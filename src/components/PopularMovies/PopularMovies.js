import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../api/requests.js";
import { IMG_BASE_URL } from "../../api/queriesUtils";
import { useHistory } from 'react-router-dom';

import './PopularMovies.scss';

const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetchPopularMovies()
        .then((response) => {
            setPopularMovies(response);
        })
        .catch((err) => console.log(err));
    }, []);

    const goToMovieDetail = (id) => {
        history.push(`/movie/${id}`)
    }

    return (
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
    );
};

export default PopularMovies;
