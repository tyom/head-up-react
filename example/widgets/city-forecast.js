import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {VictoryChart, VictoryAxis, VictoryLine} from 'victory';
import {API_KEY, ENDPOINT} from '../constants';

import * as s from './widgets.css';


class CityForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {data: null};
  }

  componentDidMount() {
    this.getData(this.props.postcode);
  }

  getData(postcode) {
    if (!postcode) {return;}

    fetch(`${ENDPOINT}/forecast?q=${postcode},uk&units=metric&APPID=${API_KEY}`).then(res => {
      res.json().then(json => this.setState({data: json}));
    });
  }

  render() {
    const data = this.state.data;
    if (!data) {return null;}

    console.log(data);

    const temps = data.list.map(item => {
      return {
        x: new Date(item.dt * 1000),
        y: item.main.temp
      };
    });

    return (
      <svg className={s.CityForecast} style={{width: '100%', height: '100%'}} viewBox="0 0 450 300">
        <VictoryChart
          standalone={false}
          padding={{
            left: 30,
            right: 20,
            bottom: 30
          }}
        >
          <VictoryAxis
            style={{
              axis: {stroke: '#444'},
              ticks: {stroke: '#444', size: 5},
              label: {fill: '#fff'},
              tickLabels: {fill: '#888'},
            }}
            tickFormat={x => new Date(x).toISOString().slice(5, 10).split('-').reverse().join('/')}
          />
          <VictoryAxis
            dependentAxis
            style={{
              axis: {stroke: '#444'},
              ticks: {stroke: '#444', size: 5},
              label: {fill: '#fff'},
              tickLabels: {fill: '#888'},
            }}
          />
          <VictoryLine
            interpolation={'cardinal'}
            style={{
              data: {stroke: '#0f8'}
            }}
            data={temps}
          />
        </VictoryChart>
      </svg>
    );
  }
}

CityForecast.propTypes = {
  postcode: PropTypes.string.isRequired
};

export default CityForecast;
