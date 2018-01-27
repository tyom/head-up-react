import React from 'react';
import { VictoryPie } from 'victory';
import get from 'lodash/fp/get';

import { HeadUp, Dashboard, Cell } from '../src';

import { SingleValue, LineGraph } from '../src/widgets';

import { API_KEY, ENDPOINT } from './constants';

function getCurrentTempForUkCity(cityName) {
  return fetch(
    `${ENDPOINT}/weather?q=${cityName},uk&units=metric&APPID=${API_KEY}`
  )
    .then(res => res.json())
    .then(get('main.temp'));
}

function getForecastForUkCity(cityName) {
  return fetch(
    `${ENDPOINT}/forecast?q=${cityName},uk&units=metric&APPID=${API_KEY}`
  ).then(res => res.json());
}

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      londonTemp: null,
      londonForecast: null,
    };
  }

  async componentDidMount() {
    const londonTemp = await getCurrentTempForUkCity('London');
    const londonForecast = await getForecastForUkCity('London');

    const londonTempForecast = londonForecast.list.map(item => ({
      x: new Date(item.dt * 1000),
      y: item.main.temp,
    }));

    this.setState({ londonTemp, londonTempForecast });
  }

  render() {
    return (
      <HeadUp>
        <Dashboard name="first">
          <Cell title="Hello" size="1">
            <svg
              style={{ width: '100%', height: '100%' }}
              viewBox="0 0 400 400"
            >
              <VictoryPie standalone={false} />
            </svg>
          </Cell>
          <Cell title="World" size="1" />
          <Cell title="Foo" size="2:1" />
          <Cell title="3 day forecast" size="2">
            {this.state.londonTempForecast ? (
              <LineGraph values={this.state.londonTempForecast} />
            ) : null}
          </Cell>
          <Cell title="Current weather" size="2">
            <SingleValue
              heading="London"
              value={`${this.state.londonTemp}°C`}
            />
          </Cell>
          <Cell title="Gollum" size="4:1" />
        </Dashboard>
        <Dashboard name="second">
          <Cell title="Best time" size="3: 2" />
          <Cell title="Best quality" size="1:2" />
          <Cell title="Quickest win" size="2:1" />
          <Cell title="Shortest straw" size="2:1" />
          <Cell title="Maximum effort" size="2:1" />
          <Cell title="Strongest link" size="2:1" />
        </Dashboard>
      </HeadUp>
    );
  }
}

export default Example;
