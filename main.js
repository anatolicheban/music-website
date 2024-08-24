import "./styles/style.scss";
import "swiper/css";
import Swiper from "swiper";

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
  setTimeout(calcHeight, 500);

  item.addEventListener("click", () => {
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

try {
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
} catch (e) {
  console.log(e);
}

const vSwiper = new Swiper(".videos-swiper.swiper", {
  slidesPerView: 1.25,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
    501: {
      centeredSlides: false,
      slidesPerView: 2.4,
    },
  },
});

vSwiper.slideTo(1);

const vPagination = Array.from(
  document.querySelectorAll(".videos-pagination span"),
);

vPagination.forEach((el, i) => {
  el.addEventListener("click", () => {
    vSwiper.slideTo(i);
  });
});

vSwiper.on("slideChange", (swiper) => {
  vPagination.forEach((el, i) => {
    el.classList[swiper.activeIndex === i ? "add" : "remove"]("active");
  });
});

const menuButton = document.getElementById("menu-btn");
const aside = document.querySelector(".mobile-aside");

menuButton.addEventListener("click", () => {
  console.log("!");
  window.scrollTo(0, 0);
  menuButton.classList.toggle("active");
  aside.classList.toggle("open");
  document.documentElement.style["overflow-y"] =
    document.documentElement.style["overflow-y"] === "hidden"
      ? "initial"
      : "hidden";

  aside.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", () => {
      menuButton.classList.remove("active");
      aside.classList.remove("open");
      document.documentElement.style["overflow-y"] = "initial";
    });
  });
});
