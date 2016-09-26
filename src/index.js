import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';
import persistState from 'redux-localstorage';

require('smoothscroll-polyfill').polyfill();

import createReducer from './reducers';
import Dashboards from './components/dashboards';
import Dashboard from './components/dashboard';
import Cell from './components/cell';

import './index.css';


const devtools = window.devToolsExtension || (() => noop => noop);

const enhancers = [
  persistState(),
  devtools()
];

const store = createStore(createReducer(), compose(...enhancers));

render(
  <Provider store={store}>
    <Dashboards>
      <Dashboard name="first">
        <Cell title="Hello" size="1"/>
        <Cell title="World" size="1"/>
        <Cell title="Foo" size="2:1"/>
        <Cell title="Lorem" size="2"/>
        <Cell title="ipsum" size="2"/>
        <Cell title="Gollum" size="4:1"/>
      </Dashboard>
      <Dashboard name="second">
        <Cell title="Best time" size="3: 2"/>
        <Cell title="Best quality" size="1:2"/>
        <Cell title="Quickest win" size="2:1"/>
        <Cell title="Shortest straw" size="2:1"/>
        <Cell title="Maximum effort" size="2:1"/>
        <Cell title="Strongest link" size="2:1"/>
      </Dashboard>
    </Dashboards>
  </Provider>,
  document.getElementById('root')
);
