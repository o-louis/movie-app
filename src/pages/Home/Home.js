import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MoviesList from "../../components/MoviesList/MoviesList";
import FeaturedBanner from '../../components/FeaturedBanner/FeaturedBanner.js';

import { fetchTopRatedMovie, fetchPopularMovies } from '../../api/requests.js';


const Home = () => {
  const history = useHistory();
  const [id, setId] = useState('');
  const [data, setData] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);

  // Fetch top rated Movie
  useEffect(() => {
      fetchTopRatedMovie()
          .then((response) => {
            setData(response);
            setId(response.id);
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
        data={data}
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
