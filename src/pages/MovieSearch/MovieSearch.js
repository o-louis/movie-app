import React, {useState, useEffect} from 'react';

import MoviesList from "../../components/MoviesList/MoviesList";

import { fetchSearchMovies } from '../../api/requests.js';

import './MovieSearch.scss';

const MovieSearch = () => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        if (query.length >= 2) {
            fetchSearchMovies(query)
                .then(response => setResult(response))
                .catch(err => console.log(err));
        }
    }, [query]);

    return (
        <main className="main">
            <input 
                type="text"
                value={query} 
                placeholder="Search a movie..."
                onChange={e => setQuery(e.target.value)}
            />

            { query.length >= 2 &&
                <MoviesList
                    title="Search result"
                    list={result}
                />
            }
        </main>
    )
}

export default MovieSearch;