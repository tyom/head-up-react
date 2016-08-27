import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';
import persistState from 'redux-localstorage';

import reducers from './reducers';
import Dashboard from './components/dashboard';

import './index.css';

const enhancer = compose(
  persistState()
);

const store = createStore(reducers, enhancer);

render(
  <Provider store={store}>
    <Dashboard/>
  </Provider>,
  document.getElementById('app')
);
