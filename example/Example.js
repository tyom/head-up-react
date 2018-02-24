import React from 'react';
import get from 'lodash/fp/get';

import { HeadUp, Space, Cell, Widget } from '../src';

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
      londonTempForecast: null,
    };
  }

  async componentDidMount() {
    let londonTemp;
    let londonForecast;

    try {
      londonTemp = await getCurrentTempForUkCity('London');
      londonForecast = await getForecastForUkCity('London');
    } catch (error) {
      throw new Error('API down');
    }

    const londonTempForecast = londonForecast.list.map(item => ({
      x: new Date(item.dt * 1000),
      y: item.main.temp,
    }));

    this.setState({ londonTemp, londonTempForecast });
  }

  render() {
    return (
      <HeadUp>
        <Space name="weather">
          <Cell>
            <Widget type="Pie" title="Example pie" />
          </Cell>
          <Cell />
          <Cell size="2:1" />
          <Cell size="2">
            <Widget
              title="3 day forecast"
              type="LineGraph"
              data={{ values: this.state.londonTempForecast }}
            />
          </Cell>
          <Cell size="2">
            <Widget
              title="Current weather"
              type="SingleValue"
              data={{
                heading: 'London',
                value: `${this.state.londonTemp}°C`,
              }}
            />
          </Cell>
          <Cell size="4:1" />
        </Space>
        <Space name="second">
          <Cell size="3:2" />
          <Cell size="1:2" />
          <Cell size="2:1" />
          <Cell size="2:1" />
          <Cell size="2:1" />
          <Cell size="2:1" />
        </Space>
      </HeadUp>
    );
  }
}

export default Example;
