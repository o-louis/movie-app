import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

import Detail from '../../components/Detail/Detail';

import { YOUTUBE_BASE_URL } from '../../api/config';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchMovieDetail, fetchMovieTrailer } from '../../api/requests.js';

const MovieDetail = (props) => {
    let favoritesMovies = useRef();
    const id = props.match.params.id;
    const [detail, setDetail] = useState(null);
    const [favorite, setFavorite] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [showTrailer, setShowTrailer] = useState(false);

    useEffect(() => {
        const checkFavorites = () => {
            favoritesMovies.current = JSON.parse(localStorage.getItem('favoritesMovies')) || [];

            // Create a key in localStorage if key is not set yet
            if (!favoritesMovies.current.length) {
                localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies.current));
            } else {
                // Check if current movie is saved in favorites
                const element = favoritesMovies.current.find(element =>  element.id === (id*1));
                if (element) setFavorite(true);
            }
        }

        checkFavorites();
        fetchMovieDetail(id)
            .then(response => {
                setDetail(response);
            }).catch(err => console.log(err));
    }, [id]);

    useEffect(() => {
        fetchMovieTrailer(id)
            .then(response => {
                const { results } = response;
                if (results) {
                    setTrailerUrl(`${YOUTUBE_BASE_URL}${results[0].key}`);
                }
            }).catch(err => console.log(err));
    }, [id]);

    const toggleFavorite = () => {
        setFavorite(favorite => !favorite);

        const favoriteStatus = !favorite;
        if (favoriteStatus) {
            const { poster_path, original_title, id } = detail;
            const dataMovie = { id, poster_path, original_title };
            favoritesMovies.current.push(dataMovie);
        } else {
            const element = favoritesMovies.current.findIndex(element =>  element.id === (id*1));
            favoritesMovies.current.splice(element, 1);
        }
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies.current));
    }

    if (!detail) {
        return <h1>Loading</h1>
    }

    return (
        <div>
            <Detail detail={detail}/>
            <FontAwesomeIcon 
                className="heart"
                icon={faHeart}
                color={favorite ? "red" : "black" }
                onClick={toggleFavorite}
            />
            <button onClick={() => setShowTrailer(true)}>Trailer</button>
            { showTrailer &&
                <ReactPlayer url={trailerUrl} playing />
            }
        </div>
    )
}

export default MovieDetail;