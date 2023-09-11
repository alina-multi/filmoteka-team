import Pagination from "../common/pagination.js";
import { preloaderShowLonger } from "../common/loader.js";
import { renderMovieList } from "../common/renderMovieList.js";
import { getMovieStorage } from "../library/getMovieStorage.js";
import refLocalStore from "../localstorage/refLocalStore.js";
const pagination = document.querySelector(".pagination");

const { MOVIE_LIST_KEY, QUEUE_LIST_KEY } = refLocalStore;

const paginationQueue = new Pagination();
let totalMoviePage = 0;

export function createQueueList(page = false) {
   
  const movieList = JSON.parse(localStorage.getItem(MOVIE_LIST_KEY));
  const listForRender = getMovieStorage(QUEUE_LIST_KEY, movieList);
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

  totalMoviePage = partMovie.length - 1;

  paginationQueue.setCallback = createQueueList;
  renderMovieList(partMovie[queryPage]);
  
  if(listForRender.length <countElpage) {
    pagination.classList.add("is-hidden");
  }


   
  if (totalMoviePage > 1) {
    paginationQueue.setCurrentPage = queryPage;
    paginationQueue.setTotalPages = totalMoviePage;
    paginationQueue.renderPagination();
  }
}
