import refsLocalStore from "../localstorage/refLocalStore";
const { WATCHED_LIST_KEY, QUEUE_LIST_KEY } = refsLocalStore;

export function handleVisabilityofModalButtons(filmId) {
  const btnAddWatched = document.querySelector(
    "button[data-value=add-to-watched]"
  );
  const btnRemoveWatched = document.querySelector(
    "button[data-value=remove-from-watched]"
  );

  const btnAddQueue = document.querySelector("button[data-value=add-to-queue]");
  const btnRemoveQueue = document.querySelector(
    "button[data-value=remove-from-queue]"
  );

  const isWatched = isMovieInList(filmId, WATCHED_LIST_KEY);
  const isQueue = isMovieInList(filmId, QUEUE_LIST_KEY);

  if (isWatched) {
    btnAddWatched.classList.add("is-hidden");
    btnRemoveWatched.classList.remove("is-hidden");
  } else {
    btnAddWatched.classList.remove("is-hidden");
    btnRemoveWatched.classList.add("is-hidden");
  }

  if (isQueue) {
    btnAddQueue.classList.add("is-hidden");
    btnRemoveQueue.classList.remove("is-hidden");
  } else {
    btnAddQueue.classList.remove("is-hidden");
    btnRemoveQueue.classList.add("is-hidden");
  }
}

function isMovieInList(filmId, listKey) {
  const isListExist = localStorage.getItem(listKey);
  if (!isListExist) {
    return false;
  }
  const list = JSON.parse(isListExist);
  const isMovieInList = list.find((film) => film.id === filmId);
  return isMovieInList;
}
