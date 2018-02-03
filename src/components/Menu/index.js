import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import Cell from '../Cell';
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
            key={kebabCase(item.name)}
            styleName={classNames('list-item', {
              'is-active': item.name === activeDashboard,
            })}
            onClick={() => onSelectMenuItem(item.name)}
          >
            {item.cells.map((cellSize, i) => (
              <Cell styleName="list-item-cell" size={cellSize} key={i} />
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      cells: PropTypes.array,
    })
  ),
  onSelectMenuItem: PropTypes.func,
  onToggleMenu: PropTypes.func,
  activeDashboard: PropTypes.string,
  isMenuClosed: PropTypes.bool,
};
