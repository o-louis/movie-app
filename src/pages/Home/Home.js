import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MoviesList from "../../components/MoviesList/MoviesList";
import FeaturedBanner from '../../components/FeaturedBanner/FeaturedBanner.js';

import { IMG_BASE_URL } from '../../api/config';
import { fetchTopRatedMovie, fetchPopularMovies } from '../../api/requests.js';


const Home = () => {
  const history = useHistory();
  const [id, setId] = useState('');
  const [popularMovies, setPopularMovies] = useState([]);
  const [urlFeaturedBanner, setUrlFeaturedBanner] = useState('');

  // Fetch top rated Movie
  useEffect(() => {
      fetchTopRatedMovie()
          .then(({id, backdrop_path}) => {
            setId(id);
            const img = `${IMG_BASE_URL}${backdrop_path}`;
            setUrlFeaturedBanner(img);
          }).catch(err => console.log(err));
  }, []);

  // Fetch popular Movies
  useEffect(() => {
      fetchPopularMovies()
        .then(response => setPopularMovies(response))
        .catch((err) => console.log(err));
  }, []);

  const goToMovieDetail = () => {
      id && history.push(`/movie/${id}`)
  }

  return (
    <>
      <FeaturedBanner 
        urlFeaturedBanner={urlFeaturedBanner}
        goToMovieDetail={goToMovieDetail}
      />
      <main className="main">
        <MoviesList
          title="Current popular Movies"
          list={popularMovies}
        />
      </main>
    </>
  );
};

export default Home;
