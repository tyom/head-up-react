import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import {activateDashboard} from '../../actions';
import {toggleMenu} from '../../actions';

import Toggle from './toggle';
import styles from './styles.css';

const Menu = ({items, isMenuClosed=false, activeDashboard, onMenuItemClick, onToggleClick}) => (
  <nav
    className={classNames(styles.Menu, {
      [styles['is-hidden']]: isMenuClosed
    })}
  >
    <Toggle onClick={onToggleClick} isMenuClosed={isMenuClosed}/>
    <ul className={styles['Menu-list']}>
      {items.map(item =>
        <li
          key={kebabCase(item)}
          className={classNames(styles['Menu-item'], {
            [styles['is-active']]: item === activeDashboard
          })}
          onClick={() => onMenuItemClick(item)}
        >
          {item}
        </li>
      )}
    </ul>
  </nav>
);

Menu.propTypes = {
  items: PropTypes.array,
  isMenuClosed: PropTypes.bool,
  onMenuItemClick: PropTypes.func,
  onToggleClick: PropTypes.func,
  activeDashboard: PropTypes.string
};

const mapStateToProps = state => {
  return {
    activeDashboard: state.dashboard.activeDashboard,
    isMenuClosed: state.dashboard.isMenuClosed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleClick: () => {
      dispatch(toggleMenu());
    },
    onMenuItemClick: name => {
      dispatch(activateDashboard(name));
    }
  };
};

const menuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default menuContainer;
