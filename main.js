import "./styles/style.scss";

const corrects = document.querySelectorAll(".corrects-items > .item");

const heights = [];

corrects.forEach((item, i) => {
  const content = item.querySelector(".item-content");
  const wrap = item.querySelector(".item-wrap");
  const header = item.querySelector(".item-header");
  const calcHeight = () => {
    heights[i] = content.clientHeight;
    wrap.style.height =
      (item.classList.contains("open") ? heights[i] : 0) + "px";
  };
  window.addEventListener("resize", calcHeight);
  calcHeight();

  header.addEventListener("click", () => {
    item.classList.toggle("open");
    corrects.forEach((el) => {
      const wrap = el.querySelector(".item-wrap");
      if (el !== item) {
        el.classList.remove("open");
      }
      wrap.style.height =
        (el.classList.contains("open") ? heights[i] : 0) + "px";
    });
  });
});

const hiddenText = document.getElementById("hidden-text");
const showButton = document.getElementById("show-hidden");
const hWrap = hiddenText.querySelector("p");

let hiddenHeight = hWrap.clientHeight;

const calcHeight = () => {
  hiddenHeight = hWrap.clientHeight;
  hiddenText.classList.contains("open")
    ? (hiddenHeight.style.height = hiddenHeight + "px")
    : "0";
};

window.addEventListener("resize", calcHeight);

showButton.addEventListener("click", () => {
  hiddenText.classList.toggle("open");
  showButton.classList.add("hide");
  hiddenText.classList.contains("open")
    ? (hiddenText.style.height = hiddenHeight + "px")
    : "0";
});
