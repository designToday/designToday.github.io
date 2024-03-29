const navToggle = document.querySelector(".nav__toggle");
const menuMobileElem = document.querySelector(".menu__mobile");
const menuMobile = document.querySelector('.menu__mobile')

window.addEventListener("load", () => {
  let horseElem = document.querySelector("#horse");
  let minutesElem = document.querySelector("#minutes");
  let SecondElem = document.querySelector("#Second");

  
  const date = new Date();
  let horse = 24 - date.getHours();
  let minutes = 60 - date.getMinutes();
  let second = 60 - date.getSeconds();
  setInterval(() => {
    if (second) {
      --second;
    } else {
      second = 59;
      --minutes;
    }
    if (minutes == 0) {
      minutes = 59;
      --horse;
    }

    SecondElem.innerHTML = second;
    minutesElem.innerHTML = minutes;
    horseElem.innerHTML = horse;
  }, 1000);
});

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav__toggle--open");
  menuMobileElem.classList.toggle("menu__mobile--open");
});

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});

var mySwiper = new Swiper(".portfolio-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const closeNav = ()=>{
  navToggle.classList.remove("nav__toggle--open");
  menuMobileElem.classList.remove("menu__mobile--open");
}