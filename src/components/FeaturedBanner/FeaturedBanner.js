import React from 'react';

import './FeaturedBanner.scss';

const FeaturedBanner = ({ urlFeaturedBanner }) => {
    return (
        <div className="featured-banner">
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
