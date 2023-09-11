export default {
  //form

  searchForm: document.querySelector(".header_input-wrap"),
  inputEl: document.querySelector(".header_input"),
  errorText: document.querySelector(".header_error-msg"),
  containerBox: document.querySelector(`.main-container--card__box`),
  containerCard: document.querySelector(`.main-container--card`),
  watchedList: document.querySelector(".header_btn-watched"),
  moviesContainer: document.querySelector(".main-container--card__box"),
  queueList: document.querySelector(".header_btn-queue"),
  loader: document.querySelector(".js-loader"),

  // MODAL REFS
  onBtnClose: document.querySelector("button[data-modal-close]"),
  onBtnOpen: document.querySelector(".main-container--card__box"),
  modal: document.querySelector("[data-modal]"),
  modalContainer: document.querySelector(".modal"),
  modalContent: document.querySelector(".modal-content"),

  modalOpen: document.querySelector(".modal-open"),
  modalBox: document.querySelector(".modal-dev__box "),
  btnFooter: document.querySelectorAll(".footer__btn"),
  closeBtn: document.querySelector(".modal-close"),

  // WATCHED LIST REFS

  watched: document.querySelector(".header_btn-watched"),
  queue: document.querySelector(".header_btn-queue"),
  containerMovie: document.querySelector(".main-container--card__box"),
  emptyPage: document.querySelector(".empty_page"),
  paginationPage: document.querySelector("#section__pagination"),


};
