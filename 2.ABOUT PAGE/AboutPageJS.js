import { getComponent,displayComponent} from "../components.js";
let comp = getComponent("Header2");
displayComponent("homepage-header",comp);

comp = getComponent("Footer");
displayComponent("Footer",comp);
//---------------------------------//


const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}   