// change the nav style on scroll
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scrolled",window.scrollY > 0);
})



// nav
const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
   nav.style.display ='flex';
   openNavBtn.style.display = 'none';
   closeNavBtn.style.display = 'inline-block';
}
openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
   nav.style.display ='none';
   openNavBtn.style.display = 'inline-block';
   closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav);

nav.querySelectorAll('li a').forEach(navlink => {
   navlink.addEventListener('click',  closeNav);
})

//close nav menu click of menu link
if(document.body.clientWidth < 1024){
   navigator.querySelectorAll('li a').forEach(navlink => {
       navlink.addEventListener('clik', closeNav);
   })
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//SWIPER JS (gallery section)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 3,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
        },
        breakpoints:{
            400:{
                 slidesPerView:2,
                 spaceBetween:40
            },
            1023:{
                slidesPerView:3,
                spaceBetween: 60
            }
        }
      });