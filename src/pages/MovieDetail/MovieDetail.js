import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import Detail from '../../components/Detail/Detail';
import LocalStorageContext from '../../context/LocalStorageContext.js';

import { YOUTUBE_BASE_URL, IMG_BASE_URL } from '../../api/config';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchMovieDetail, fetchMovieTrailer } from '../../api/requests.js';

import './MovieDetail.scss'

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
                    const video = `${YOUTUBE_BASE_URL}${response.results[0].key}`;
                    setTrailerUrl(video);
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

    const backgroundImg = {
        backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("${IMG_BASE_URL}${detail.backdrop_path}")`
    }

    const visibilityTrailer = {
        visibility: showTrailer ? 'visible' : 'hidden'
    }

    return (
        <div className="detail" style={backgroundImg}>
            <main>
                <div className="detail__content">
                    <Detail detail={detail}/>
                    <div className="detail__buttons">
                        <button className="detail__buttons-favorite" onClick={handleFavorite}>
                            { favorite ? `Remove from` : `Add to` } favourite
                            { !favorite && <FontAwesomeIcon icon={faPlus} /> }
                        </button>
                        <button
                            className="detail__buttons-trailer"
                            onClick={() => setShowTrailer(true)}>Trailer</button>
                    </div>
                </div>
                <ReactPlayer
                    url={trailerUrl}
                    playing={ showTrailer ? true : false }
                    style={visibilityTrailer}
                />
            </main>
        </div>
    )
}

export default MovieDetail;