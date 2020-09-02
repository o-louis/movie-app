import React, { useState, useEffect } from 'react';
import { fetchTopRatedMovie, fetchPopularMovies } from '../api/requests.js';
import { IMG_BASE_URL } from '../api/queriesUtils';
import { useHistory } from 'react-router-dom';
import PopularMovies from "../components/PopularMovies/PopularMovies";
import FeaturedBanner from '../components/FeaturedBanner/FeaturedBanner.js';

const Home = () => {
  const [urlFeaturedBanner, setUrlFeaturedBanner] = useState('');
  const [popularMovies, setPopularMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
      fetchTopRatedMovie()
          .then(response => {
              const img = response.backdrop_path ?
                `${IMG_BASE_URL}${response.backdrop_path}` : '';
              setUrlFeaturedBanner(img);
          }).catch(err => console.log(err));
  }, []);

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
    <React.Fragment>
      <FeaturedBanner urlFeaturedBanner={urlFeaturedBanner} />
      <main className="main">
        <PopularMovies 
          popularMovies={popularMovies}
          goToMovieDetail={goToMovieDetail}
        />
      </main>
    </React.Fragment>
  );
};

export default Home;
