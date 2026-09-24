(() => {
 const button=document.querySelector('.menu-toggle'),menu=document.getElementById('mobile-navigation');
 const close=()=>{if(!button||!menu)return;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');menu.hidden=true;};
 button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.hidden=!open;});
 menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&button?.getAttribute('aria-expanded')==='true'){close();button.focus();}});
 document.addEventListener('click',e=>{if(!menu?.contains(e.target)&&!button?.contains(e.target))close();});
 menu?.addEventListener('focusout',e=>{if(e.relatedTarget&&!menu.contains(e.relatedTarget)&&e.relatedTarget!==button)close();});
 matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)close();});
 window.addEventListener('pageshow',close);
})();
(() => {
 const gallery=document.getElementById('product-main-image'),buttons=[...document.querySelectorAll('[data-gallery-src]')];
 const select=button=>{const image=gallery?.querySelector('img');if(!image)return;image.removeAttribute('srcset');image.removeAttribute('sizes');image.src=button.dataset.gallerySrc;image.alt=button.dataset.galleryAlt||'Oxidara campaign image';gallery.className='product-visual detail-visual visual-'+button.dataset.galleryClass;const caption=document.getElementById('product-image-note');if(caption&&button.dataset.galleryCaption)caption.textContent=button.dataset.galleryCaption;buttons.forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});};
 buttons.forEach((b,i)=>{b.addEventListener('click',()=>select(b));b.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%buttons.length;if(e.key==='ArrowLeft')next=(i-1+buttons.length)%buttons.length;if(e.key==='Home')next=0;if(e.key==='End')next=buttons.length-1;if(next!==undefined){e.preventDefault();buttons[next].focus();select(buttons[next]);}});});
})();
const normalize=path=>path.replace(/\/+$/,'')||'/';
document.querySelectorAll('.site-header nav a').forEach(a=>{if(normalize(new URL(a.href).pathname)===normalize(location.pathname))a.setAttribute('aria-current','page');});

// Demo forms have no Shopify submission endpoint; intercept Enter as an extra guard.
document.addEventListener('submit',event=>{if(event.target.matches('[data-demo-form]'))event.preventDefault();},true);
