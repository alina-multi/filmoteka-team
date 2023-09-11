export function addMovietoLS(filmId, listKey) {
  const list = localStorage.getItem(listKey);
  if (!list) {
    localStorage.setItem(listKey, JSON.stringify([{ id: filmId }]));
    return;
  }
  const parsedList = JSON.parse(list);
  parsedList.push({ id: filmId });
  localStorage.setItem(listKey, JSON.stringify(parsedList));
}
