import React, { useState, useEffect } from 'react';

import Context from './LocalStorageContext';

const ContextProvider = ({ children }) => {
    const [favoritesMovieItems, setFavoritesMovieItems] = useState([]);

    useEffect(() => {
        const favoritesMovieItemsData = JSON.parse(localStorage.getItem('favoritesMovies'));
        if (favoritesMovieItemsData) setFavoritesMovieItems(favoritesMovieItemsData);
    }, [])

    useEffect(() => {
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovieItems));
    }, [favoritesMovieItems])

    function toggleFavorite(favorite, detail) {
        const favoriteStatus = !favorite;
        const { poster_path, original_title, id } = detail;

        if (favoriteStatus) 
            addToFavorites({ id, poster_path, original_title });
        else
            removeFromFavorites(id);
    }

    function addToFavorites(newItem) {
        setFavoritesMovieItems(prevItems => [...prevItems, newItem]);
    }
    
    function removeFromFavorites(id) {
        setFavoritesMovieItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    return (
        <Context.Provider value={{favoritesMovieItems, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
