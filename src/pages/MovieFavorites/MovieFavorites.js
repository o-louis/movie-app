import React from 'react';

import MoviesList from '../../components/MoviesList/MoviesList';
import LocalStorageContext from '../../context/LocalStorageContext.js';

const MovieFavorites = () => {
    const { favoritesMovieItems } = React.useContext(LocalStorageContext);
    return (
        <main className="main">
            { favoritesMovieItems.length > 0 ? (
                    <MoviesList
                        title="Your favorites list"
                        list={favoritesMovieItems}
                    />
                ) : (
                    <h2>You could find here you favorites movies list.</h2>
                )
            }
        </main>
    )
}

export default MovieFavorites;