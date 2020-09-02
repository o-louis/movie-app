import React from "react";
import { useHistory } from 'react-router-dom';

import { IMG_BASE_URL } from "../../api/config";

import './MoviesList.scss';

const DefaultPoster = require('../../assets/default_poster.png');

const MoviesList = ({ title, list}) => {
    const history = useHistory();

    const goToMovieDetail = (id) => {
        history.push(`/movie/${id}`)
    }

    return (
        <>
            <h2 className="main__title">{title}</h2>
            <div className="main__popular-list">
                {
                    list.map((item, index) => (
                        <div className="main__popular-list__item" key={index}>
                            <img 
                                className="main__popular-list__item__img" 
                                src={`${IMG_BASE_URL}${item.poster_path}`} 
                                alt={item.original_title}
                                onClick={() => goToMovieDetail(item.id)}
                                onError={e => e.target.src=DefaultPoster}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default MoviesList;
