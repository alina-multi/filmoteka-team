import Pagination from "../common/pagination.js";
import { preloaderShowLonger } from "../common/loader.js";
import { renderMovieList } from "../common/renderMovieList.js";
import { getMovieStorage } from "../library/getMovieStorage.js";
import refLocalStore from "../localstorage/refLocalStore.js";

const { MOVIE_LIST_KEY, WATCHED_LIST_KEY } = refLocalStore;
const paginationWatched = new Pagination();
let totalMoviePages = 0;

export function createWatchedList(page = false) {
  const movieList = JSON.parse(localStorage.getItem(MOVIE_LIST_KEY));
  const listForRender = getMovieStorage(WATCHED_LIST_KEY, movieList);
  const countElpage = 9;

  if (!listForRender) return;
  preloaderShowLonger();
  const queryPage = page ? page : 1;
  const partMovie = [];

  for (let i = 1; i <= Math.ceil(listForRender.length / countElpage); i += 1) {
    let end = countElpage * i;
    let start = i > 1 ? countElpage * (i - 1) : 0;
    if (countElpage * i > listForRender.length) {
      end = listForRender.length;
    }
    partMovie[i] = listForRender.slice(start, end);
  }

  totalMoviePages = partMovie.length - 1;

  renderMovieList(partMovie[queryPage]);

  if (totalMoviePages > 1) {
    paginationWatched.setCurrentPage = queryPage;
    paginationWatched.setTotalPages = totalMoviePages;
    paginationWatched.setCallback = createWatchedList;
    paginationWatched.renderPagination();
  }
}
