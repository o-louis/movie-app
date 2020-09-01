import React from 'react';

import Home from './pages/Home';
import Header from './pages/Header/Header';
import MovieDetail from './pages/MovieDetail';
import MovieSearch from './pages/MovieSearch';
import MovieFavorites from './pages/MovieFavorites';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie/:id' component={MovieDetail} />
        <Route path='/search' component={MovieSearch} />
        <Route path='/favorites' component={MovieFavorites} />
      </Switch>
    </Router>
  );
}

export default App;
