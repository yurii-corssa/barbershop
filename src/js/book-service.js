import { closeMenu } from "./mobile-menu";

const bookButtons = document.querySelectorAll(".book-btn-js");
const mobileMenuBookButton = document.querySelector(".mobile-menu-book-btn-js");
const nameInput = document.querySelector(".book-input-name-js");

bookButtons.forEach(btn =>
  btn.addEventListener("click", () => nameInput.focus())
);

mobileMenuBookButton.addEventListener("click", () => {
  closeMenu();
  nameInput.focus();
});
