import { filmMarkup } from "./render-modal";
import refs from "../refs";

export function createContentForMovieModal(film) {
  const markup = filmMarkup(film);
  refs.modalContent.insertAdjacentHTML("beforeend", markup);
}
