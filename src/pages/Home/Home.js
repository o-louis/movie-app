import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MoviesList from "../../components/MoviesList/MoviesList";
import FeaturedBanner from '../../components/FeaturedBanner/FeaturedBanner.js';

import { IMG_BASE_URL } from '../../api/config';
import { fetchTopRatedMovie, fetchPopularMovies } from '../../api/requests.js';


const Home = () => {
  const history = useHistory();
  const [id, setId] = useState('');
  const [urlFeaturedBanner, setUrlFeaturedBanner] = useState('');
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
      fetchTopRatedMovie()
          .then(response => {
              setId(response.id);
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

  const goToMovieDetail = () => {
      history.push(`/movie/${id}`)
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Home;
