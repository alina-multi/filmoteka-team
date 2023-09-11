export function findMoviesInMovieList(movieList, list) {
 
  if (!movieList || !list || list.length === 0 ) return null;
  const listForRender = [];

  list.forEach((item) => {
    const movie = movieList.find((movie) => movie.id === item.id);
    if (movie) {
      listForRender.push(movie);
    }
  });

  return listForRender;
}
