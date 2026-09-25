(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const compact = matchMedia('(max-width: 1023px), (pointer: coarse)');
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const clips = new Map();
  // Small, visible desktop clips only. Phones/tablets always need an explicit
  // tap; Save-Data, known cellular/slow links and reduced motion never autoplay.
  const automaticAllowed = () => !reduced.matches && !compact.matches &&
    !connection?.saveData && !['cellular', 'none'].includes(connection?.type) &&
    (!connection?.effectiveType || connection.effectiveType === '4g');
  const setState = (clip, playing) => {
    clip.root.classList.toggle('is-playing', playing);
    clip.button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${clip.label}`);
    clip.action.textContent = playing ? 'Pause film' : 'Play film';
  };
  const pause = clip => { clip.request++; clip.manualActive = false; clip.video.pause(); setState(clip, false); };
  const load = clip => {
    if (clip.video.hasAttribute('src') && !clip.video.error) return;
    const mobile = matchMedia('(max-width: 760px)').matches;
    // The H.264 files are smaller for these particular excerpts. WebM is
    // available for browsers without H.264 support; never fetch both versions.
    const key = clip.video.canPlayType('video/mp4; codecs="avc1.42E01E"') ? 'Mp4' : 'Webm';
    clip.video.src = clip.video.dataset[(mobile ? 'mobile' : '') + (mobile ? key : key.toLowerCase())];
    clip.video.muted = true;
    clip.video.defaultMuted = true;
    clip.video.load();
  };
  const clipAutoplayAllowed = clip => !clip.manualOnly && automaticAllowed();
  const panelHidden = clip => Boolean(clip.root.closest('[data-hero-panel][aria-hidden="true"], [data-hero-panel][hidden]'));
  const visibleNow = clip => {
    const rect = clip.root.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0 || window.getComputedStyle(clip.root).visibility === 'hidden') return false;
    let left = Math.max(0, rect.left), top = Math.max(0, rect.top);
    let right = Math.min(window.innerWidth, rect.right), bottom = Math.min(window.innerHeight, rect.bottom);
    // Also honor the social rail's clipping, not just the outer viewport.
    for (let parent = clip.root.parentElement; parent && right > left && bottom > top; parent = parent.parentElement) {
      const style = window.getComputedStyle(parent);
      const box = parent.getBoundingClientRect();
      if (/^(auto|scroll|hidden|clip)$/.test(style.overflowX)) { left = Math.max(left, box.left); right = Math.min(right, box.right); }
      if (/^(auto|scroll|hidden|clip)$/.test(style.overflowY)) { top = Math.max(top, box.top); bottom = Math.min(bottom, box.bottom); }
    }
    return right > left && bottom > top;
  };
  const play = async (clip, manual = false) => {
    // Global smooth scrolling can still be moving toward a keyboard-focused
    // control when Enter arrives. Complete that explicit focus navigation now,
    // before starting playback; automatic clips never initiate a scroll.
    if (manual) {
      clip.visible = visibleNow(clip);
      if (!clip.visible && document.activeElement === clip.button) {
        clip.root.scrollIntoView({behavior: 'instant', block: 'nearest', inline: 'nearest'});
        clip.visible = visibleNow(clip);
      }
      if (!clip.visible) return;
    }
    if (document.hidden || panelHidden(clip) || (!manual && (!clipAutoplayAllowed(clip) || clip.userPaused || !clip.autoVisible))) return;
    if (!clip.video.paused || clip.pending) return;
    for (const other of clips.values()) if (other !== clip) pause(other);
    const request = ++clip.request;
    clip.manualActive = manual;
    clip.pending = true;
    load(clip);
    // Native disabled drops keyboard focus and can make a snapping rail move
    // while its video starts. Keep focus stable and guard repeat activation.
    clip.button.setAttribute('aria-busy', 'true');
    try {
      await clip.video.play();
      // A pending play promise must not restart a video that scrolled away.
      if (request !== clip.request || document.hidden || panelHidden(clip) || !(manual ? visibleNow(clip) : clip.visible) || (!manual && !clipAutoplayAllowed(clip))) pause(clip);
    } catch (_) { clip.manualActive = false; setState(clip, false); }
    finally { clip.pending = false; clip.button.removeAttribute('aria-busy'); }
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const clip = clips.get(entry.target);
      clip.visible = entry.isIntersecting && entry.intersectionRatio > 0;
      // A queued pre-focus observer record can arrive after an explicit Play.
      // Keep that playback only if current geometry is genuinely still visible.
      if (!clip.visible && clip.manualActive && visibleNow(clip)) clip.visible = true;
      clip.autoVisible = entry.isIntersecting && entry.intersectionRatio >= 0.55;
      if (!clip.visible) pause(clip);
      else if (!clip.userPaused) play(clip);
    }
  }, {threshold: [0, 0.01, 0.55]});
  const init = (scope = document) => scope.querySelectorAll('[data-motion]').forEach(root => {
    if (clips.has(root)) return;
    const clip = {root, video: root.querySelector('video'), button: root.querySelector('[data-motion-toggle]'), action: root.querySelector('[data-motion-action]'), status: root.querySelector('[data-motion-status]'), label: root.dataset.motionLabel, manualOnly: root.hasAttribute('data-motion-manual'), visible: false, userPaused: false, manualActive: false, pending: false, request: 0};
    clips.set(root, clip);
    root.querySelector('.motion-controls').hidden = false;
    clip.video.addEventListener('playing', () => { root.classList.add('has-played'); setState(clip, true); });
    clip.video.addEventListener('pause', () => setState(clip, false));
    root.addEventListener('oxidara:motion-hide', () => pause(clip));
    root.addEventListener('oxidara:motion-show', () => play(clip));
    clip.video.addEventListener('error', () => {
      root.classList.remove('has-played');
      pause(clip);
      clip.status.textContent = 'The film could not load. The campaign still is shown.';
    });
    clip.button.addEventListener('click', () => {
      if (clip.pending) return;
      clip.userPaused = !clip.video.paused;
      if (clip.userPaused) pause(clip);
      else { clip.status.textContent = ''; play(clip, true); }
    });
    observer.observe(root);
  });
  const stopAutomatic = () => { for (const clip of clips.values()) if (!automaticAllowed()) pause(clip); };
  reduced.addEventListener('change', stopAutomatic);
  compact.addEventListener('change', stopAutomatic);
  connection?.addEventListener('change', stopAutomatic);
  document.addEventListener('visibilitychange', () => {
    for (const clip of clips.values()) {
      if (document.hidden) pause(clip);
      else if (clip.visible && !clip.userPaused) play(clip);
    }
  });
  window.addEventListener('pagehide', () => { for (const clip of clips.values()) pause(clip); });
  document.addEventListener('shopify:section:load', event => init(event.target));
  document.addEventListener('shopify:section:unload', event => {
    for (const [root, clip] of clips) if (event.target.contains(root)) { pause(clip); observer.unobserve(root); clips.delete(root); }
  });
  init();
  const heroes = new Map();
  const initHero = (scope = document) => scope.querySelectorAll('[data-hero-slider]').forEach(slider => {
    if (heroes.has(slider)) return;
    const buttons = [...slider.querySelectorAll('[data-hero-view]')];
    const panels = buttons.map(button => document.getElementById(button.getAttribute('aria-controls')));
    const rotation = slider.querySelector('[data-hero-rotation]');
    const status = slider.querySelector('[data-hero-status]');
    if (buttons.length < 2 || panels.some(panel => !panel) || !rotation) return;
    const events = new AbortController();
    const listen = (target, name, listener) => target.addEventListener(name, listener, {signal: events.signal});
    const interval = Math.max(6000, Number(slider.dataset.slideDuration) || 8000);
    let index = 0, userPaused = false, visible = false, pageActive = true, destroyed = false, keyboardFocus = false, pointerFocus = false, timer, pointerStart;
    const clearTimer = () => { clearTimeout(timer); timer = undefined; };
    const canRotate = () => !destroyed && slider.isConnected && pageActive && visible && !document.hidden &&
      !userPaused && !reduced.matches && !pointerStart && !(keyboardFocus && slider.contains(document.activeElement)) &&
      !panels[index].querySelector('.is-playing');
    const schedule = () => {
      clearTimer();
      if (canRotate()) timer = setTimeout(() => {
        timer = undefined;
        if (canRotate()) select(index + 1);
      }, interval);
    };
    const updateRotation = () => {
      rotation.disabled = reduced.matches;
      rotation.textContent = reduced.matches ? 'Motion reduced' : userPaused ? 'Play slides' : 'Pause slides';
      rotation.setAttribute('aria-label', reduced.matches ? 'Automatic slides disabled by reduced-motion preference' : userPaused ? 'Start automatic slides' : 'Pause automatic slides');
    };
    const select = (next, manual = false) => {
      clearTimer();
      index = (next + buttons.length) % buttons.length;
      buttons.forEach((button, i) => {
        const selected = i === index;
        const panel = panels[i];
        button.setAttribute('aria-pressed', String(selected));
        // All panels share one layout cell so opacity can crossfade without
        // changing hero height. Inactive content is inert and unavailable to AT.
        panel.hidden = false;
        panel.inert = !selected;
        panel.setAttribute('aria-hidden', String(!selected));
        panel.classList.toggle('is-current', selected);
        panel.querySelectorAll('[data-motion]').forEach(root => root.dispatchEvent(new Event(selected ? 'oxidara:motion-show' : 'oxidara:motion-hide')));
      });
      slider.dataset.activeSlide = String(index + 1);
      // Prepare the following photograph before its turn, without giving it
      // priority over the initial product image.
      panels[(index + 1) % panels.length].querySelectorAll('img[loading="lazy"]').forEach(image => { image.loading = 'eager'; });
      if (manual && status) status.textContent = panels[index].getAttribute('aria-label');
      schedule();
    };
    buttons.forEach((button, i) => {
      listen(button, 'click', () => select(i, true));
      listen(button, 'keydown', event => {
        pointerFocus = false; keyboardFocus = true; schedule();
        const next = {ArrowRight: (i + 1) % buttons.length, ArrowLeft: (i - 1 + buttons.length) % buttons.length, Home: 0, End: buttons.length - 1}[event.key];
        if (next === undefined) return;
        event.preventDefault();
        buttons[next].focus();
        select(next, true);
      });
    });
    listen(rotation, 'click', () => {
      userPaused = !userPaused;
      // Explicit Play starts even if that control still has keyboard focus.
      if (!userPaused) keyboardFocus = false;
      updateRotation(); schedule();
    });
    // Keyboard focus pauses while someone reads/operates the hero. Pointer
    // focus left behind after a tap/click does not silently freeze the slides.
    listen(slider, 'focusin', () => {
      keyboardFocus = !pointerFocus && Boolean(document.activeElement?.matches(':focus-visible'));
      schedule();
    });
    listen(slider, 'keydown', () => { pointerFocus = false; keyboardFocus = true; schedule(); });
    listen(slider, 'focusout', () => queueMicrotask(() => {
      if (!slider.contains(document.activeElement)) { keyboardFocus = false; pointerFocus = false; }
      schedule();
    }));
    listen(slider, 'pointerdown', event => {
      pointerFocus = true; keyboardFocus = false; schedule();
      if (event.pointerType === 'mouse' || event.target.closest('a, button, input, select, textarea, summary')) return;
      pointerStart = {x: event.clientX, y: event.clientY};
      clearTimer();
    });
    listen(window, 'pointerup', event => {
      if (!pointerStart) return;
      const dx = event.clientX - pointerStart.x, dy = event.clientY - pointerStart.y;
      pointerStart = undefined;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) select(index + (dx < 0 ? 1 : -1), true);
      else schedule();
    });
    listen(window, 'pointercancel', () => { pointerStart = undefined; schedule(); });
    panels.forEach(panel => panel.querySelectorAll('video').forEach(video => {
      listen(video, 'playing', clearTimer);
      listen(video, 'pause', schedule);
    }));
    const visibility = new IntersectionObserver(entries => {
      const entry = entries[entries.length - 1];
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.3;
      schedule();
    }, {threshold: [0, 0.3]});
    visibility.observe(slider);
    listen(reduced, 'change', () => { updateRotation(); schedule(); });
    listen(document, 'visibilitychange', schedule);
    listen(window, 'pagehide', () => { pageActive = false; pointerStart = undefined; clearTimer(); });
    listen(window, 'pageshow', () => { pageActive = true; schedule(); });
    heroes.set(slider, () => { destroyed = true; clearTimer(); events.abort(); visibility.disconnect(); });
    slider.classList.add('is-enhanced');
    slider.querySelector('.hero-view-controls').hidden = false;
    updateRotation();
    select(0);
  });
  initHero();
  document.addEventListener('shopify:section:load', event => initHero(event.target));
  document.addEventListener('shopify:section:unload', event => {
    for (const [slider, destroy] of heroes) if (event.target.contains(slider)) { destroy(); heroes.delete(slider); }
  });
})();
