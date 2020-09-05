import React from 'react';

import { IMG_BASE_URL } from '../../api/config';

import './FeaturedBanner.scss';


const FeaturedBanner = ({ data, goToMovieDetail }) => {
    const { backdrop_path, title, release_date } = data;
    const img = `${IMG_BASE_URL}${backdrop_path}`;
    const date = new Date(release_date).getFullYear();
    const backgroundImg = {
        backgroundImage: `url("${img}")`
    }

    return (
        <div className="featured-banner" onClick={goToMovieDetail}>
            { backdrop_path &&
                <div className="featured-banner__inner" style={backgroundImg}>
                    <h1 className="featured-banner__title" >{title}<span> | {date}</span></h1>
                </div> 
            }
        </div>
    )
}

export default FeaturedBanner;
