import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './components/Main';
import SingleAnime from './components/SingleAnime';

import store from './store';

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route path='/anime/:id' render={props => <SingleAnime {...props} />} />
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
