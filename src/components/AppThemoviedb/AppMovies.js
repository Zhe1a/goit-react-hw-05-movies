import axios from 'axios';

//https://api.themoviedb.org/3/search/movie?api_key=35dff1a8139e3844887023acb43de4ac&language=en-US&page=1&include_adult=false

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search';
const KEY = '35dff1a8139e3844887023acb43de4ac';

export const AppHome = () => {
  return axios
    .get(`/3/trending/movie/day?api_key=${KEY}`)
    .then(({ data }) => data);
};

export const AppMovies = (query, page = 1) => {
  return axios
    .get('/movie', {
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
