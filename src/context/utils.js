const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "839a1aa6e43e23445dedbeb46bb21d5d";
const API_READ_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzlhMWFhNmU0M2UyMzQ0NWRlZGJlYjQ2YmIyMWQ1ZCIsInN1YiI6IjYyNjk1M2QwZWEzN2UwMTE4Nzg0MmQxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZJzT4w-FPSy4b2ABWvNPkUjmGEEHp8ADt7GWYeP9A8";
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
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_READ_TOKEN}`,
      },
    };
    const response = await fetch(url, options);
    json = response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getTrending() {
  let url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
  let data = await get(url);
  return data.results;
}
export async function getDiscover(genre) {
  // const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28';

  let url = `${BASE_URL}/discover/movie?with_genres=${genre}&api_key=${API_KEY}`;
  let data = await get(url);
  console.log(data);
  return data.results;
}
export async function getCast(movie_id) {
  let url = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`;
  let data = await get(url);
  return data.cast;
}
