import Pagination from "./common/pagination.js";
import API from "./api/api-service.js";
import { preloaderShowLonger } from "./common/loader.js";
import { addCurrrentMoviesToLocalStorage } from "./localstorage/addCurrrentMoviesToLocalStorage.js";
import { renderMovieList } from "./common/renderMovieList.js";

const apiService = new API();
const pagination = new Pagination();

export async function getPopularMovie(page = false) {
  preloaderShowLonger();
  const queryPage = page ? page : 1;
  apiService.setPageNumber = queryPage;
  const data = await apiService.fetchPopularMovie();
  pagination.setCurrentPage = queryPage;
  pagination.setTotalPages = data.total_pages;
  pagination.setCallback = getPopularMovie;
  pagination.renderPagination();
  addCurrrentMoviesToLocalStorage(data.results);
  renderMovieList(data.results);
}
