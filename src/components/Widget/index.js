import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const defaultSettings = [
  {
    type: 'input',
    label: 'Input',
  },
];

const Widget = ({ config = [] }) => (
  <fieldset>
    <legend>Settings</legend>
    {[...defaultSettings, ...config].map(item => (
      <div styleName="field" key={item.type}>
        <label htmlFor={item.type}>{item.label}</label>
        <input type="text" id={item.type} />
      </div>
    ))}
  </fieldset>
);

Widget.propTypes = {
  config: PropTypes.array,
};

export default Widget;
