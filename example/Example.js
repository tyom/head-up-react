import React from 'react';
import {VictoryPie} from 'victory';

import {
  HeadUp,
  Dashboard,
  Cell
} from '../src';

import CityTemp from './widgets/city-temp';
import CityForecast from './widgets/city-forecast';

const Example = () => (
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
        <CityForecast postcode="London"/>
      </Cell>
      <Cell title="Current weather" size="2">
        <CityTemp postcode="London"/>
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
);

export default Example;
