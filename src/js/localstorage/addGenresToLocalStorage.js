import axios from "axios";
const API_KEY = "2994e3a31c3cad99fd99bf3fe61d916f";

export const addGenresToLocalStorage = async () => {
  const genres = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  localStorage.setItem("GENRES", JSON.stringify(genres.data.genres));
};
