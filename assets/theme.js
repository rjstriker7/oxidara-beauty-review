(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-navigation');
  const close = () => { if(!button || !menu)return;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');menu.hidden=true; };
  button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.hidden=!open;});
  menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&button?.getAttribute('aria-expanded')==='true'){close();button.focus();}});
  matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)close();});
})();
(() => {
 const gallery=document.getElementById('product-main-image');
 document.querySelectorAll('[data-gallery-src]').forEach(button=>button.addEventListener('click',()=>{
  const image=gallery?.querySelector('img');if(!image)return;
  image.removeAttribute('srcset');image.removeAttribute('sizes');image.src=button.dataset.gallerySrc;image.alt=button.dataset.galleryAlt||'Oxidara campaign image';
  gallery.className='product-visual detail-visual visual-'+button.dataset.galleryClass;
  document.querySelectorAll('[data-gallery-src]').forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
 }));
})();
document.querySelectorAll('.site-header nav a').forEach(a=>{if(a.getAttribute('href')?.replace(/\/$/,'')===location.pathname.replace(/\/$/,''))a.setAttribute('aria-current','page');});
