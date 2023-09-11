import refs from "../refs";

export function closeModal() {
  refs.modal.classList.add("is-hidden");
  refs.modalContent.innerHTML = "";
  document.body.style.overflowY = "";
}

export function outOfModal(e) {
  if (e.target === refs.modal) {
    closeModal();
  }
}

export function escExit({ code }) {
  console.log("hello");
  if (code === "Escape") {
    closeModal();
  }
}
