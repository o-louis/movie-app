import React, { useState, useEffect } from 'react';
import { fetchMovieDetail } from '../api/requests.js';
import { IMG_BASE_URL } from '../api/queriesUtils';

const MovieDetail = (props) => {
    const id = props.match.params.id;
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetchMovieDetail(id)
            .then(response => {
                setDetail(response);
            }).catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{detail.title}</h1>
            <img src={`${IMG_BASE_URL}${detail.backdrop_path}`} alt={detail.title} />
        </div>
    )
}

export default MovieDetail;