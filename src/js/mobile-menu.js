const burgerBtn = document.querySelector(".burger-btn-js");
const closeBtn = document.querySelector(".mobile-menu__close-btn-js");
const mobileMenu = document.querySelector(".mobile-menu-js");
const backdrop = document.querySelector(".backdrop-js");
const body = document.body;
const navLinks = document.querySelector(".nav-links-container-js");

const handleKeyDown = e => {
  if (e.key === "Escape") {
    closeMenu();
  }
};

const handleClickLinks = e => {
  if (e.target.classList.contains("mobile-menu__link-js")) {
    closeMenu();
  }
};

export const closeMenu = () => {
  mobileMenu.classList.remove("visible");
  backdrop.classList.remove("visible");
  body.classList.remove("no-scroll");
  mobileMenu.setAttribute("aria-hidden", "true");

  closeBtn.removeEventListener("click", closeMenu);
  backdrop.removeEventListener("click", closeMenu);
  document.removeEventListener("keydown", handleKeyDown);
  navLinks.removeEventListener("click", handleClickLinks);
};

const openMenu = () => {
  mobileMenu.classList.add("visible");
  backdrop.classList.add("visible");
  body.classList.add("no-scroll");
  mobileMenu.setAttribute("aria-hidden", "false");

  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", handleKeyDown);
  navLinks.addEventListener("click", handleClickLinks);
};

burgerBtn.addEventListener("click", openMenu);
