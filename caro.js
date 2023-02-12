const current = document.querySelector(".container__image--current");
const allimages = document.querySelectorAll(".container__image");
let index = 0;
function arrangeImages(i) {
  index += i;
  if (index >= allimages.length) {
    index = 0;
  } else if (index < 0) {
    index = allimages.length - 1;
  }
  allimages.forEach((el, id) => {
    if (id !== index && el.classList.contains("container__image--current"))
      el.classList.remove("container__image--current");
    if (id === index) el.classList.add("container__image--current");
    el.style.transform = `translateX(${
      current.getBoundingClientRect().width * (id - index)
    }px)`;
  });
}
arrangeImages(index);
const pre = document.querySelector(".btn--prev");
const next = document.querySelector(".btn--next");
next.addEventListener("click", () => arrangeImages(1));
pre.addEventListener("click", () => arrangeImages(-1));

const interval = setInterval(() => {
  arrangeImages(1);
}, 2000);
