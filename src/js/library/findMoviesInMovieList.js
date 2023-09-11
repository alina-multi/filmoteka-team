export function findMoviesInMovieList(movieList, list) {
  if (!movieList || !list || list.length === 0 ) return null;

  const listForRender = [];
  for(i = 0; i < list.length; i += 1) {
    const movie = movieList.find((movie) => movie.id === list[i].id);
    if (movie) {
      listForRender.push(movie);
    }
  }

  return listForRender;
}
