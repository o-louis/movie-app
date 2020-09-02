import React, { useEffect, useState } from 'react';

import MoviesList from '../../components/MoviesList/MoviesList';

const MovieFavorites = () => {
    const [favoritesMovies, setFavoritesMovies] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('favoritesMovies'));
        if (storage.length > 0) setFavoritesMovies(storage);
        setMounted(true);
    }, []);

    return (
        <main className="main">
            { mounted && favoritesMovies.length > 0 ? (
                    <MoviesList
                        title="Your favorites list"
                        list={favoritesMovies}
                    />
                ) : (
                    <h2>You could find here you favorites movies list.</h2>
                )
            }
        </main>
    )
}

export default MovieFavorites;