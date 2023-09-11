import refs from '../refs';
import { handleEmptyPage } from '../library/handleEmptyPage.js';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function renderMovieList(films) {
  refs.containerBox.innerHTML = '';
  handleEmptyPage(films);

  const markup = films
    .map(film => {
      let date = film.release_date ?? film.first_air_date ?? null;
      date = date !== null ? date.slice(0, 4) : '';
      return `
              <li class="main-container--card"
          data-modal-open>
          <img class="card-poster"
          data-id="${film.id} "
          ${imageSrc(film)}
          alt="${film.original_name}" loading="lazy">
          <div class="card-wrap">
          <h2 class="card-title" data-id="${film.id}">${
        film.title.toUpperCase() || film.title.toUpperCase()
      }</h2>
          <p class="card-info"> ${transformId(film.genre_ids)} | ${date} </p>
           </div>
      </li>`;
    })
    .join('');
  refs.containerBox.innerHTML = markup;
}

function imageSrc(image) {
  if (image.original_title == 'Kærlighed for voksne') {
    return `src="https://m.media-amazon.com/images/M/MV5BOWQ1ODQ0ZTQtOGJjYi00ODZmLWFkOTAtOWMzN2E4YzE0YmVjXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_.jpg"`;
  }
  return `src=${
    image.poster_path
      ? `${IMG_URL}${image.poster_path}`
      : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
  }`;
}

function transformId([...arr]) {
  const g = localStorage.getItem('GENRES');
  const genres = JSON.parse(g);
  let genreName;
  const array = [...arr];
  for (let i = 0; i < genres.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (array[x] === genres[i].id) {
        genreName = genres[i].name;
        array[x] = genreName;
      }
    }
  }

  if (array.length > 2) {
    return `${array[0]}, ${array[1]}, Other`;
  } else if (array.length === 1) {
    return `${array[0]}`;
  } else if (array.length === 0) {
    return `No genre`;
  }
  return `${array[0]}, ${array[1]}`;
}
