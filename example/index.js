import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';
import persistState from 'redux-localstorage';
import {VictoryPie} from 'victory';

import createReducer from '../src/reducers';

import {
  HeadUp,
  Dashboard,
  Cell
} from '../src';

// import './../dist/styles.css';
import './index.css';

import CityTemp from './widgets/city-temp';
import CityForecast from './widgets/city-forecast';


const devtools = window.devToolsExtension || (() => noop => noop);

const enhancers = [
  persistState(),
  devtools()
];

const store = createStore(createReducer(), compose(...enhancers));

render(
  <Provider store={store}>
    <HeadUp>
      <Dashboard name="first">
        <Cell title="Hello" size="1">
          <svg style={{width: '100%', height: '100%'}} viewBox="0 0 400 400">
            <VictoryPie standalone={false}/>
          </svg>
        </Cell>
        <Cell title="World" size="1"/>
        <Cell title="Foo" size="2:1"/>
        <Cell title="3 day forecast" size="2">
          <CityForecast postcode="W1"/>
        </Cell>
        <Cell title="Current weather" size="2">
          <CityTemp postcode="W1"/>
        </Cell>
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
    </HeadUp>
  </Provider>,
  document.getElementById('root')
);
