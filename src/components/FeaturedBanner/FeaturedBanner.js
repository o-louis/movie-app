import React from 'react';

import './FeaturedBanner.scss';

const FeaturedBanner = ({ urlFeaturedBanner, goToMovieDetail }) => {
    return (
        <div className="featured-banner" onClick={goToMovieDetail}>
            { urlFeaturedBanner &&
                <img 
                    className="featured-banner__img"
                    src={urlFeaturedBanner}
                    alt="featured"
                />
            }
        </div>
    )
}

export default FeaturedBanner;
