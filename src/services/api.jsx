import axios from 'axios';
import.meta.env.VITE_TMDB_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export function MOVIES_POPULAR_GET() {
  return api.get('/movie/popular');
}

export function SERIES_POPULAR_GET() {
  return api.get('/tv/popular');
}

export function GERAL_SEARCH_GET(query) {
  return api.get('/search/multi', {
    params: {
      query,
    },
  });
}

export function MOVIE_DETAILS_GET(id) {
  return api.get(`/movie/${id}`);
}

export function SERIE_DETAILS_GET(id) {
  return api.get(`/tv/${id}`);
}

export function MOVIE_TRAILER_GET(id) {
  return api.get(`/movie/${id}/videos`);
}

export function SERIE_TRAILER_GET(id) {
  return api.get(`/tv/${id}/videos`);
}

export function MOVIE_CREDITS_GET(id) {
  return api.get(`movie/${id}/credits`);
}

export function SERIE_CREDITS_GET(id) {
  return api.get(`tv/${id}/credits`);
}
