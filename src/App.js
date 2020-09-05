import React from 'react';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import MovieSearch from './pages/MovieSearch/MovieSearch';
import MovieFavorites from './pages/MovieFavorites/MovieFavorites';

import LocalStorageProvider from './context/LocalStorageProvider.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />

      <LocalStorageProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movie/:id' component={MovieDetail} />
          <Route path='/search' component={MovieSearch} />
          <Route path='/favorites' component={MovieFavorites} />
        </Switch>
      </LocalStorageProvider>
    </Router>
  );
}

export default App;
