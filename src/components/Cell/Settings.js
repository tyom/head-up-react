import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function handleClick(evt, isActive) {
  if (isActive) {
    evt.stopPropagation();
  }
}

const Settings = ({ isActive }) => (
  <aside styleName="settings" onClick={evt => handleClick(evt, isActive)}>
    <fieldset>
      <legend>Settings</legend>
      <div styleName="field">
        <label htmlFor="input">Input</label>
        <input type="text" id="input" />
      </div>
    </fieldset>
  </aside>
);

Settings.propTypes = {
  isActive: PropTypes.bool,
};

export default Settings;
