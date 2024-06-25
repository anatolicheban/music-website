import "./styles/style.scss";

const corrects = document.querySelectorAll(".corrects-items > .item");

const heights = [];

corrects.forEach((item, i) => {
  const content = item.querySelector(".item-content");
  const wrap = item.querySelector(".item-wrap");
  const header = item.querySelector(".item-header");
  heights[i] = content.clientHeight;
  header.addEventListener("click", () => {
    item.classList.toggle("open");
    wrap.style.height =
      (item.classList.contains("open") ? heights[i] : 0) + "px";
  });
});

console.log(heights);
