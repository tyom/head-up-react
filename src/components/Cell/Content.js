import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Content = ({ children, className }) => (
  <div styleName="content" className={className}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Content;
