import axios from 'axios';
import * as query from './queriesUtils';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchTopRatedMovie = async () => {
    const url = `${query.TOP_RATED_MOVIE}&api_key=${API_KEY}`;
    return axios.get(url)
        .then(response => {
            const { results } = response.data;
            if (results.length > 0 && results[0])
                return results[0];
            return {};
        })
        .catch(error => error);
};

export const fetchPopularMovies = async () => {
    const url = `${query.POPULAR_MOVIES}&api_key=${API_KEY}`;
    return axios.get(url)
        .then(response => {
            const { results } = response.data;
            if (results.length > 0)
                return results;
            return [];
        })
        .catch(error => error);
};

export const fetchMovieDetail = async (id) => {
    const url = `${query.API_BASE_URL}${id}?api_key=${API_KEY}`;
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => error);
};

export const fetchMovieTrailer = async (id) => {
    const url = `${query.TRAILER_MOVIE.replace(':id', id)}?api_key=${API_KEY}`;
    console.log(url);
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => error);
};