import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Body = ({ children, className }) => (
  <div className={className}>{children}</div>
);

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Body;
