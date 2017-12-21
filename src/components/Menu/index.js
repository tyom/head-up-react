import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import Toggle from './Toggle';
import styles from './styles.css';

export default function Menu({items=[], isMenuClosed=false, activeDashboard=items[0], onSelectMenuItem, onToggleMenu}) {
  if (!items.length) {return;}

  return (
    <nav
      className={classNames(styles.Menu, {
        [styles['is-hidden']]: isMenuClosed
      })}
    >
      {onToggleMenu
        ? <Toggle onClick={onToggleMenu} isMenuClosed={isMenuClosed}/>
        : null
      }
      <ul className={styles['Menu-list']}>
        {items.map(item =>
          <li
            key={kebabCase(item)}
            className={classNames(styles['Menu-item'], {
              [styles['is-active']]: item === activeDashboard
            })}
            onClick={() => onSelectMenuItem(item)}
          >
            {item}
          </li>
        )}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  items: PropTypes.array,
  onSelectMenuItem: PropTypes.func,
  onToggleMenu: PropTypes.func,
  activeDashboard: PropTypes.string,
  isMenuClosed: PropTypes.bool
};
