//change navbar styles on scroll

window.addEventListener('scroll', ()=>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

//show/hide FAQ answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
  })
})

//toggle plus/minus icon
let i = 1;
const faq = document.querySelectorAll('.faq').forEach((f) => {
  let obj = document.getElementById('uil-plus'+i);
  i += 1;
  f.addEventListener('click', () => {
    if(obj.getAttribute('src') == './images/plus.svg'){
      obj.src = './images/minus.svg';
    }
    
    else{
      obj.src = './images/plus.svg';
    }
  }
)})

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  //menu.classList.toggle('active')
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

closeBtn.addEventListener('click', ()=>{
  menu.style.display = "none";
  //menu.classList.toggle('')
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
})
