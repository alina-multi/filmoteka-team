export function addCurrrentMoviesToLocalStorage(array) {
  const currentList = JSON.parse(localStorage.getItem("MOVIE_LIST"));
  if (currentList) {
    const newList = [...currentList, ...array];
    localStorage.setItem("MOVIE_LIST", JSON.stringify(newList));
    return;
  }
  localStorage.setItem("MOVIE_LIST", JSON.stringify(array));
}
