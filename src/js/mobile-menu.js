const burgerBtn = document.querySelector(".burger-btn-js");
const closeBtn = document.querySelector(".mobile-menu__close-btn-js");
const mobileMenu = document.querySelector(".mobile-menu-js");
const backdrop = document.querySelector(".backdrop-js");
const body = document.body;

const openMenu = () => {
  mobileMenu.classList.add("visible");
  backdrop.classList.add("visible");
  body.classList.add("no-scroll");
  mobileMenu.setAttribute("aria-hidden", "false");
};

const closeMenu = () => {
  mobileMenu.classList.remove("visible");
  backdrop.classList.remove("visible");
  body.classList.remove("no-scroll");
  mobileMenu.setAttribute("aria-hidden", "true");
};

burgerBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeMenu();
  }
});
