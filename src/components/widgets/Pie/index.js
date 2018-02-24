import React from 'react';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory';

import './style.css';

const Pie = () => (
  <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 400 400">
    <VictoryPie standalone={false} />
  </svg>
);

Pie.propTypes = {};

export default Pie;
