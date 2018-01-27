import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const SingleValue = ({ heading, value }) => (
  <div className={styles.container}>
    <div className={styles.heading}>{heading}</div>
    <div className={styles.body}>{value}</div>
  </div>
);

SingleValue.propTypes = {
  heading: PropTypes.string,
  value: PropTypes.string,
};

export default SingleValue;
