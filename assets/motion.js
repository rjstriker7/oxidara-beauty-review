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
  const pause = clip => { clip.request++; clip.video.pause(); setState(clip, false); };
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
  const play = async (clip, manual = false) => {
    if (document.hidden || (!manual && (!automaticAllowed() || clip.userPaused || !clip.autoVisible))) return;
    if (!clip.video.paused) return;
    for (const other of clips.values()) if (other !== clip) pause(other);
    const request = ++clip.request;
    load(clip);
    clip.button.disabled = true;
    try {
      await clip.video.play();
      // A pending play promise must not restart a video that scrolled away.
      if (request !== clip.request || document.hidden || !clip.visible || (!manual && !automaticAllowed())) pause(clip);
    } catch (_) { setState(clip, false); }
    finally { clip.button.disabled = false; }
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const clip = clips.get(entry.target);
      clip.visible = entry.isIntersecting && entry.intersectionRatio > 0;
      clip.autoVisible = entry.isIntersecting && entry.intersectionRatio >= 0.55;
      if (!clip.visible) pause(clip);
      else if (!clip.userPaused) play(clip);
    }
  }, {threshold: [0, 0.01, 0.55]});
  const init = (scope = document) => scope.querySelectorAll('[data-motion]').forEach(root => {
    if (clips.has(root)) return;
    const clip = {root, video: root.querySelector('video'), button: root.querySelector('[data-motion-toggle]'), action: root.querySelector('[data-motion-action]'), status: root.querySelector('[data-motion-status]'), label: root.dataset.motionLabel, visible: false, userPaused: false, request: 0};
    clips.set(root, clip);
    root.querySelector('.motion-controls').hidden = false;
    clip.video.addEventListener('playing', () => { root.classList.add('has-played'); setState(clip, true); });
    clip.video.addEventListener('pause', () => setState(clip, false));
    root.addEventListener('oxidara:motion-hide', () => pause(clip));
    clip.video.addEventListener('error', () => {
      root.classList.remove('has-played');
      pause(clip);
      clip.status.textContent = 'The film could not load. The campaign still is shown.';
    });
    clip.button.addEventListener('click', () => {
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
  const initHero = (scope = document) => scope.querySelectorAll('[data-hero-slider]').forEach(slider => {
    if (slider.dataset.initialized) return;
    slider.dataset.initialized = 'true';
    const buttons = [...slider.querySelectorAll('[data-hero-view]')];
    const rotation = slider.querySelector('[data-hero-rotation]');
    const status = slider.querySelector('[data-hero-status]');
    slider.querySelector('.hero-view-controls').hidden = false;
    let index = 0, stopped = reduced.matches, visible = false, timer, startX, startY;
    const updateRotation = () => { rotation.textContent = stopped ? 'Play slides' : 'Pause slides'; rotation.setAttribute('aria-label', stopped ? 'Start automatic slides' : 'Pause automatic slides'); };
    const select = (next, manual = false) => {
      index = (next + buttons.length) % buttons.length;
      buttons.forEach((button, i) => {
        const selected = i === index;
        button.setAttribute('aria-pressed', String(selected));
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        panel.hidden = !selected;
        if (!selected) panel.querySelectorAll('[data-motion]').forEach(root => root.dispatchEvent(new Event('oxidara:motion-hide')));
      });
      if (manual) { stopped = true; updateRotation(); status.textContent = buttons[index].getAttribute('aria-label'); }
    };
    const start = () => { clearInterval(timer); timer = setInterval(() => {
      if (!slider.isConnected) { clearInterval(timer); return; }
      if (!stopped && !reduced.matches && visible && !document.hidden && !slider.matches(':hover') && !slider.contains(document.activeElement) && !slider.querySelector('.is-playing')) select(index + 1);
    }, 12000); };
    buttons.forEach((button, i) => {
      button.addEventListener('click', () => select(i, true));
      button.addEventListener('keydown', event => {
        const next = {ArrowRight: (i + 1) % buttons.length, ArrowLeft: (i - 1 + buttons.length) % buttons.length, Home: 0, End: buttons.length - 1}[event.key];
        if (next === undefined) return;
        event.preventDefault(); buttons[next].focus(); select(next, true);
      });
    });
    rotation.addEventListener('click', () => { stopped = !stopped; updateRotation(); start(); });
    slider.addEventListener('pointerdown', event => { startX = event.clientX; startY = event.clientY; });
    slider.addEventListener('pointerup', event => { if (startX === undefined) return; const dx = event.clientX - startX, dy = event.clientY - startY; startX = undefined; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4 && event.pointerType !== 'mouse') select(index + (dx < 0 ? 1 : -1), true); });
    slider.addEventListener('pointercancel', () => { startX = undefined; });
    const visibility = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }, {threshold: .3}); visibility.observe(slider);
    reduced.addEventListener('change', () => { if (reduced.matches) stopped = true; updateRotation(); });
    updateRotation(); start();
  });
  initHero();
  document.addEventListener('shopify:section:load', event => initHero(event.target));
})();
