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