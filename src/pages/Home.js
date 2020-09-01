import React, { useState, useEffect } from 'react';
import { fetchTopRatedMovie } from '../api/requests.js';
import { IMG_BASE_URL } from '../api/queriesUtils';
import PopularMovies from "../components/PopularMovies/PopularMovies";
import FeaturedBanner from '../components/FeaturedBanner/FeaturedBanner.js';

const Home = () => {
  const [featuredBanner, setFeaturedBanner] = useState('');

  useEffect(() => {
      fetchTopRatedMovie()
          .then(response => {
              const img = response.backdrop_path ? `${IMG_BASE_URL}${response.backdrop_path}` : '';
              setFeaturedBanner(img);
          }).catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <FeaturedBanner featuredBanner={featuredBanner} />
      <main className="main">
        <h2 className="main__title">Current popular Movies</h2>
        <PopularMovies />
      </main>
    </React.Fragment>
  );
};

export default Home;
