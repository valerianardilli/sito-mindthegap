// Mind the Gap — script unico per tutte le pagine.

// menu mobile
const b=document.querySelector('.burger'),m=document.querySelector('.menu');
if(b&&m)b.addEventListener('click',()=>{
  const o=m.classList.toggle('open');
  b.setAttribute('aria-expanded',o);
  b.textContent=o?'✕':'☰';
});

// comparsa allo scroll
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});

// Immagini mancanti: al loro posto un riquadro che dice quale file serve.
function segnaposto(img){
  if(img.closest('.track')){
    const s=document.createElement('span');
    s.className='logo-txt';s.textContent=img.alt;img.replaceWith(s);return;
  }
  const src=img.getAttribute('src')||'';
  const h=img.getBoundingClientRect().height;
  const d=document.createElement('div');
  d.className='ph';
  if(h>40) d.style.height=h+'px';
  d.innerHTML='<b>Immagine da inserire</b><span>'+src+'</span><em>'+(img.alt||'')+'</em>';
  img.replaceWith(d);
}
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener('error',()=>segnaposto(img));
  if(img.complete && img.naturalWidth===0) segnaposto(img);
});
