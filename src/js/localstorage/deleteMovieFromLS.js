

export function deleteMovieFromLS(filmId, listKey) {
  const isListExist = localStorage.getItem(listKey);
  if (!isListExist) {
    return;
  }
  const list = JSON.parse(isListExist);
  const newList = list.filter((film) => film.id !== filmId);
  localStorage.setItem(listKey, JSON.stringify(newList));
return newList;

}
