import React from "react";
import { IMG_BASE_URL } from "../../api/queriesUtils";

import './PopularMovies.scss';

const PopularMovies = ({ popularMovies, goToMovieDetail }) => {
    return (
        <>
            <h2 className="main__title">Current popular Movies</h2>
            <div className="main__popular-list">
                {
                    popularMovies.map((item, index) => (
                        <div className="main__popular-list__item" key={index}>
                            <img 
                                className="main__popular-list__item__img" 
                                src={`${IMG_BASE_URL}${item.poster_path}`} 
                                alt={item.original_title}
                                onClick={() => goToMovieDetail(item.id)}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default PopularMovies;
