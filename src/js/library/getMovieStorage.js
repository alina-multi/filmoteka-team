import { findMoviesInMovieList } from "../library/findMoviesInMovieList.js";
import refs from "../refs.js";

export function getMovieStorage(searchKey, movieList) {
  const watchedList = JSON.parse(localStorage.getItem(searchKey));
  const listForRender = findMoviesInMovieList(movieList, watchedList);

  if (!listForRender) {
    refs.emptyPage.classList.add("visible");
    refs.paginationPage.style.display = "none";
    return;
  }
  return listForRender;
}
