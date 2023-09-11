import { createQueueList } from "./js/library/queue.js";
import { createWatchedList } from "./js/library/watched.js";
import "./js/modal/modal-film.js";
import "./js/common/js-modal-devops.js";
import "./js/firebase.js";
import refs from "./js/refs.js";



createWatchedList();


refs.containerBox.setAttribute("id", "watched");
const watchedList = document.querySelector("#watched");


const watched = document.querySelector(".header_btn-watched");
const queue = document.querySelector(".header_btn-queue");

queue.addEventListener("click", onQueueClick);
watched.addEventListener("click", onWatchedClick);

function onQueueClick(e) {
  refs.containerMovie.innerHTML = "";
  refs.watched.classList.remove("current-btn");
  refs.queue.classList.add("current-btn");
  refs.queue.classList.remove("simple-btn");
  refs.watched.classList.add("simple-btn");
  createQueueList();

  refs.containerBox.setAttribute("id", "queue");
  const watchedList = document.querySelector("#queue");
  
}

function onWatchedClick(e) {
  refs.containerMovie.innerHTML = "";
  refs.watched.classList.add("current-btn");
  refs.queue.classList.remove("current-btn");
  refs.queue.classList.add("simple-btn");
  refs.watched.classList.remove("simple-btn");
  createWatchedList();

  refs.containerBox.setAttribute("id", "watched");
  const watchedList = document.querySelector("#watched");

}
