import axios from 'axios';
//https://api.themoviedb.org/3/search/movie?api_key=35dff1a8139e3844887023acb43de4ac&language=en-US&page=1&include_adult=false = AppHome
//https://api.themoviedb.org/3/search/3/trending/movie/day?api_key=35dff1a8139e3844887023acb43de4ac = AppMovies
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=35dff1a8139e3844887023acb43de4ac&language=en-US  = AppMovieDetails
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US = AppMovieCast
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1 = AppMovieReviews
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '35dff1a8139e3844887023acb43de4ac';

export const AppHome = () => {
  return axios
    .get(`trending/movie/day?api_key=${KEY}`)
    .then(({ data }) => data);
};

export const AppMovies = (query, page = 1) => {
  return axios
    .get('search/movie', {
      params: {
        api_key: KEY,
        language: 'en-US',
        query,
        page,
        include_adult: 'false',
      },
    })
    .then(({ data }) => data);
};

export const AppMovieDetails = movieId => {
  return axios
    .get(`movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then(({ data }) => data);
};
export const AppMovieCast = id => {
  return axios
    .get(`movie/${id}/credits?api_key=${KEY}&language=en-US`)
    .then(({ data }) => data);
};

export const AppMovieReviews = id => {
  return axios
    .get(`movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(({ data }) => data);
};
