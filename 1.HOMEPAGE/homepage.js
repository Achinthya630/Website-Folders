import { getComponent,displayComponent} from "../components.js";
let comp = getComponent("Header2");
displayComponent("homepage-header",comp);

// comp = getComponent("Header-Navbar");
// displayComponent("homepage-navbar",comp);


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


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ------------------ COUNTER ------------------

const counts = document.querySelectorAll(".count");
const speed = 10.5;

counts.forEach((counter) => {
  function upDate() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      setTimeout(upDate, 15);
    } else {
      counter.innerText = target;
    }
  }
  upDate();
});

// ----------------------------------------------------