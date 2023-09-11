import { findMoviesInMovieList } from "../library/findMoviesInMovieList.js";
import refs from "../refs.js";

export function getMovieStorage(searchKey, movieList) {
  const watchedList = JSON.parse(localStorage.getItem(searchKey));
  const listForRender = findMoviesInMovieList(movieList, watchedList);
  return listForRender;
}
