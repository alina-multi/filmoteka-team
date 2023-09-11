import refs from "../refs";
import { outOfModal, escExit, closeModal } from "./closeModalFunction";
import { handleVisabilityofModalButtons } from "./handleVisabilityofModalButtons";
import refs from "../refs";
import refsLocalStore from "../localstorage/refLocalStore";
import { deleteMovieFromLS } from "../localstorage/deleteMovieFromLS";
import { addMovietoLS } from "../localstorage/addMovietoLS";
import { getFilmByIdFromLS } from "../localstorage/getFilmByIdFromLS";
import { createContentForMovieModal } from "./createContentForMovieModal";
import { findMoviesInMovieList } from "../library/findMoviesInMovieList";
import { renderMovieList } from "../common/renderMovieList";

const { containerBox, onBtnClose, modal } = refs;
const { MOVIE_LIST_KEY } = refsLocalStore;

containerBox.addEventListener("click", onModalOpen);
onBtnClose.addEventListener("click", closeModal);
modal.addEventListener("click", outOfModal);

const currentMovie = {
  id: null,
};

function onModalOpen(e) {
  if (e.target.nodeName === "IMG" || e.target.nodeName === "H2") {
    modal.classList.remove("is-hidden");
    document.body.style.overflowY = "hidden";

    const filmId = Number(e.target.dataset.id);
    const film = getFilmByIdFromLS(filmId, MOVIE_LIST_KEY);
    createContentForMovieModal(film);
    currentMovie.id = film.id;
    handleVisabilityofModalButtons(film.id);
    modal.addEventListener("click", handleModalButtons);
  }
  document.addEventListener("keydown", escExit);
}

function handleModalButtons(e) {
  const value = e.target.dataset.value;
  if (!value) return;

  const currentButton = document.querySelector(`button[data-value=${value}]`);
  const filmId = currentMovie.id;

  currentButton.classList.add("is-hidden");
  const listName = value.split("-");

  if (listName.includes("add")) {
    addMovietoLS(filmId, listName[2]);
    const button = document.querySelector(
      `button[data-value=remove-from-${listName[2]}]`
    );
    button.classList.remove("is-hidden");
  }

  if (listName.includes("remove")) {
    const button = document.querySelector(
      `button[data-value=add-to-${listName[2]}]`
    );
    button.classList.remove("is-hidden");

    const currentPage = document.querySelector(`#${listName[2]}`);
    const newList = deleteMovieFromLS(filmId, listName[2]);
    const movieList = JSON.parse(localStorage.getItem(MOVIE_LIST_KEY));
    if (currentPage) {
      const listForRender = findMoviesInMovieList(movieList, newList);
      renderMovieList(listForRender);
    }
  }
}
