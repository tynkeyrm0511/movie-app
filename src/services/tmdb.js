import axios from "axios";

const API_KEY = "fe9d8c1dad8fb31016d90feff2a9dc8f";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
    baseURL: BASE_URL,
    params:{
        api_key: API_KEY,
        language: 'en-US'
    },
});

export const getPopularMovies = (page = 1) =>
    tmdb.get('/movie/popular', {params:{page}});

export const searchMovies = (query, page = 1) =>
    tmdb.get('/search/movie', {params:{query, page}})

export const getGenres = () =>
    tmdb.get('/genre/movie/list');

export const getMovieDetail = (id) =>
    tmdb.get(`/movie/${id}`,
        {params:{append_to_response: 'videos'}
    });