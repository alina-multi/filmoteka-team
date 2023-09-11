export function getFilmByIdFromLS(id, localKey) {
  const list = JSON.parse(localStorage.getItem(localKey));
  const film = list.find((film) => film.id === id);
  return film;
}
