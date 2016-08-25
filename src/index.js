import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers';
import Dashboard from './components/dashboard';

import './index.css';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Dashboard/>
  </Provider>,
  document.getElementById('app')
);