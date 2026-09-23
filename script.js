const header=document.querySelector('.header');const menu=document.querySelector('.menu');const links=document.querySelector('.nav-links');const glow=document.querySelector('.cursor-glow');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30),{passive:true});
menu.addEventListener('click',()=>{const isOpen=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
if(matchMedia('(pointer:fine)').matches){window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true})}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();