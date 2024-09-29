import { createImage, debounce } from "./helpers";

const nextButton = document.querySelector(".hero-slider-btn-next-js");
const prevButton = document.querySelector(".hero-slider-btn-prev-js");
const slidesContainer = document.querySelector(".hero__slides");

const images = [
  "img/main-page/hero/slider-background-1",
  "img/main-page/hero/slider-background-2",
  "img/main-page/hero/slider-background-3",
];

let currentIndex = 0;
let totalSlides = 0;
let intervalId;
const slideRefs = [];
const loadedImages = new Set();

const loadSlideImage = (slide, indexToLoad, callback) => {
  if (!loadedImages.has(indexToLoad)) {
    const src = images[indexToLoad];
    const alt = `slide ${indexToLoad + 1}`;

    const imgElement = createImage(src, alt);

    slide.appendChild(imgElement);

    imgElement.onload = () => {
      loadedImages.add(indexToLoad);

      if (callback) callback();
    };
  } else {
    if (callback) callback();
  }
};

const preloadNeighborSlideImages = () => {
  const nextIndex = (currentIndex + 1) % totalSlides;
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;

  slideRefs[nextIndex].classList.remove("active");
  slideRefs[prevIndex].classList.remove("active");

  loadSlideImage(slideRefs[nextIndex], nextIndex);
  loadSlideImage(slideRefs[prevIndex], prevIndex);

  resetAutoSlide();
};

const resetAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 10000);
};

const showSlide = index => {
  totalSlides = images.length;

  currentIndex = (index + totalSlides) % totalSlides;

  slidesContainer.style.transform = `translateX(${currentIndex * -100}%)`;

  slideRefs[currentIndex].classList.add("active");

  loadSlideImage(
    slideRefs[currentIndex],
    currentIndex,
    preloadNeighborSlideImages
  );
};

const createSlides = () => {
  slidesContainer.innerHTML = "";

  images.forEach(() => {
    const slide = document.createElement("li");
    slide.classList.add("hero__slide");
    slideRefs.push(slide);

    slidesContainer.appendChild(slide);
  });
};

const handleResize = () => {
  currentIndex = 0;
  slidesContainer.innerHTML = "";
  slideRefs.length = 0;
  loadedImages.clear();
  createSlides();
  showSlide(currentIndex);
};

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

window.addEventListener("resize", debounce(handleResize, 300));

createSlides();
showSlide(currentIndex);
