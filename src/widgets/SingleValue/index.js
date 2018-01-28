import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SingleValue = ({ heading, value }) => (
  <div styleName="container">
    <div styleName="heading">{heading}</div>
    <div styleName="body">{value}</div>
  </div>
);

SingleValue.propTypes = {
  heading: PropTypes.string,
  value: PropTypes.string,
};

export default SingleValue;
