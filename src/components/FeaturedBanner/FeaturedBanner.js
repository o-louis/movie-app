import React from 'react';
import './FeaturedBanner.scss'

const FeaturedBanner = ({ featuredBanner }) => {
    return (
        <div className="featured-banner">
            { featuredBanner &&
                <img 
                    className="featured-banner__img"
                    src={featuredBanner}
                    alt="featured"
                />
            }
        </div>
    )
}

export default FeaturedBanner;
