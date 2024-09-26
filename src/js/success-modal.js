const successModal = document.querySelector(".success-modal");
const bookForm = document.querySelector(".book-form-js");
const closeBtn = document.querySelector(".modal-close-btn-js");
const modalBtn = document.querySelector(".success-modal-btn-js");
const backdrop = document.querySelector(".backdrop-js");
const body = document.body;

const handleKeyDown = e => {
  if (e.key === "Escape") {
    closeModal();
  }
};

const closeModal = () => {
  successModal.classList.remove("visible");
  backdrop.classList.remove("visible");
  body.classList.remove("no-scroll");
  successModal.setAttribute("aria-hidden", "true");

  closeBtn.removeEventListener("click", closeModal);
  modalBtn.removeEventListener("click", closeModal);
  backdrop.removeEventListener("click", closeModal);
  document.removeEventListener("keydown", handleKeyDown);
};

const openModal = () => {
  successModal.classList.add("visible");
  backdrop.classList.add("visible");
  body.classList.add("no-scroll");
  successModal.setAttribute("aria-hidden", "false");

  closeBtn.addEventListener("click", closeModal);
  modalBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", handleKeyDown);
};

bookForm.addEventListener("submit", e => {
  e.preventDefault();
  openModal();
  bookForm.reset();
});
