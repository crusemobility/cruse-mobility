
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const header=document.querySelector('.header');
const onScroll=()=>{
  if(header) header.classList.toggle('scrolled',window.scrollY>24);
};
onScroll();
window.addEventListener('scroll',onScroll,{passive:true});

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
