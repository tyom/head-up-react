import React from 'react';
import PropTypes from 'prop-types';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

import './style.css';

const Toggle = ({ onClick, isMenuClosed }) => (
  <button styleName="toggle" onClick={onClick} type="button">
    {isMenuClosed ? (
      <FaEllipsisV styleName="toggleIcon" />
    ) : (
      <FaAngleLeft styleName="toggleIcon" />
    )}
    <span>{isMenuClosed ? 'Open' : 'Close'} menu</span>
  </button>
);

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuClosed: PropTypes.bool,
};

export default Toggle;
