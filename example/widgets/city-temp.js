import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {API_KEY, ENDPOINT} from '../constants';

import * as s from './widgets.css';


class CityTemp extends Component {
  constructor(props) {
    super(props);

    this.state = {data: null};
  }

  componentDidMount() {
    this.getData(this.props.postcode);
  }

  getData(postcode) {
    if (!postcode) {return;}

    fetch(`${ENDPOINT}/weather?q=${postcode},uk&units=metric&APPID=${API_KEY}`).then(res => {
      res.json().then(json => this.setState({data: json}));
    });
  }

  render() {
    const data = this.state.data;
    if (!data) {return null;}
    return (

      <div className={s.CityTemp}>
        <div className={s['CityTemp-subtitle']}>
          {data.name}
        </div>
        <h1 className={s['CityTemp-title']}>
          {data.main.temp}°C
        </h1>
      </div>
    );
  }
}

CityTemp.propTypes = {
  postcode: PropTypes.string.isRequired
};

export default CityTemp;
