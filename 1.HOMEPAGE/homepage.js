import { getComponent,displayComponent} from "../components.js";
let comp = getComponent("header");
displayComponent("homepage-header",comp);

comp = getComponent("Header-Navbar");
displayComponent("homepage-navbar",comp);


//----------------------------------


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//--------------------------------------------------
