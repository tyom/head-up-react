import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const defaultSettings = [];

function handleClick(evt, isActive) {
  if (isActive) {
    evt.stopPropagation();
  }
}

const Settings = ({ isActive, settings = [] }) => (
  <aside styleName="settings" onClick={evt => handleClick(evt, isActive)}>
    <fieldset>
      <legend>Settings</legend>
      {[...defaultSettings, ...settings].map(item => (
        <div styleName="field" key={item.label}>
          <label htmlFor={`${item.getWidgetId}-field-${item.name}`}>
            {item.label}
          </label>
          <input
            type="text"
            id={`${item.getWidgetId}-field-${item.name}`}
            value={item.value}
            onChange={item.onChange}
          />
        </div>
      ))}
    </fieldset>
  </aside>
);

Settings.propTypes = {
  isActive: PropTypes.bool,
  settings: PropTypes.array,
};

export default Settings;
