import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import Detail from '../../components/Detail/Detail';
import LocalStorageContext from '../../context/LocalStorageContext.js';

import { YOUTUBE_BASE_URL } from '../../api/config';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchMovieDetail, fetchMovieTrailer } from '../../api/requests.js';

const MovieDetail = (props) => {
    const id = props.match.params.id*1;
    const [detail, setDetail] = useState(null);
    const [favorite, setFavorite] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [showTrailer, setShowTrailer] = useState(false);
    const { favoritesMovieItems, toggleFavorite } = React.useContext(LocalStorageContext);

    // Fetch Movie Detail
    useEffect(() => {
        function getFavorites() {
            const element = favoritesMovieItems.find(element =>  element.id === id);
            if (element) setFavorite(true);
        }
        getFavorites();
        fetchMovieDetail(id)
            .then(response => setDetail(response))
            .catch(err => console.log(err));
    }, [id, favoritesMovieItems]);

    // Fetch Movie trailer
    useEffect(() => {
        fetchMovieTrailer(id)
            .then(response => {
                if (response.results) {
                    const img = `${YOUTUBE_BASE_URL}${response.results[0].key}`;
                    setTrailerUrl(img);
                }
            }).catch(err => console.log(err));
    }, [id]);

    const handleFavorite = () => {
        setFavorite(favorite => !favorite);
        toggleFavorite(favorite, detail);
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
                onClick={handleFavorite}
            />
            <button onClick={() => setShowTrailer(true)}>Trailer</button>
            { showTrailer &&
                <ReactPlayer url={trailerUrl} playing />
            }
        </div>
    )
}

export default MovieDetail;