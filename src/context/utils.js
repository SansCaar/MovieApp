const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "";
export const POSTER_URL = "https://image.tmdb.org/t/p/w780";
export const PROFILE_URL = "https://image.tmdb.org/t/p/w185";
export const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

async function get(url) {
  try {
    const response = await fetch(url);
    json = response.json()
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getTrending() {
  let url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
  let data = await get(url);
  return(data.results)
}
export async function getDiscover(genre) {
  let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre},null`;
  let data = await get(url);
  return(data.results)
}
export async function getCast(movie_id) {
  let url = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`;
  let data = await get(url);
  console.log(data);
  return(data.cast)
}