import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import Toggle from './Toggle';
import './style.css';

export default function Menu({
  items = [],
  isMenuClosed = false,
  activeDashboard = items[0],
  onSelectMenuItem,
  onToggleMenu,
}) {
  if (!items.length) {
    return;
  }

  return (
    <nav styleName={classNames('menu', { 'is-hidden': isMenuClosed })}>
      {onToggleMenu ? (
        <Toggle onClick={onToggleMenu} isMenuClosed={isMenuClosed} />
      ) : null}
      <ul styleName="list">
        {items.map(item => (
          <li
            key={kebabCase(item)}
            styleName={classNames({
              'is-active': item === activeDashboard,
            })}
            onClick={() => onSelectMenuItem(item)}
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  items: PropTypes.array,
  onSelectMenuItem: PropTypes.func,
  onToggleMenu: PropTypes.func,
  activeDashboard: PropTypes.string,
  isMenuClosed: PropTypes.bool,
};
