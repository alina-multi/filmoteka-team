import "./js/common/js-modal-devops.js";
import "./js/firebase.js";
import { getPopularMovie } from "./js/getPopularMovie.js";
import { addGenresToLocalStorage } from "./js/localstorage/addGenresToLocalStorage.js";
import "./js/search-by-keyword.js";
import "./js/modal/modal-film.js";

addGenresToLocalStorage();
getPopularMovie()
