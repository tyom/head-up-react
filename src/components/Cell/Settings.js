import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';

import './style.css';

function handleClick(evt, isActive) {
  if (isActive) {
    evt.stopPropagation();
  }
}

const Settings = ({ isActive }) => {
  return (
    <aside styleName="settings" onClick={evt => handleClick(evt, isActive)}>
      <Widget />
    </aside>
  );
};

Settings.propTypes = {
  isActive: PropTypes.bool,
};

export default Settings;
