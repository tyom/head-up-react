import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import createReducer from '../src/reducers';
import Example from './Example';

const devtools = window.devToolsExtension || (() => noop => noop);

const enhancers = [persistState(), devtools()];

const store = createStore(createReducer(), compose(...enhancers));

render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById('app')
);
