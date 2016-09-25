import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import {activateDashboard} from '../../actions';

import styles from './styles.css';

const Menu = ({items, activeDashboard, onMenuItemClick}) => (
  <nav className={styles.Menu}>
    <ul>
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
  onMenuItemClick: PropTypes.func,
  activeDashboard: PropTypes.string
};

const mapStateToProps = state => {
  return {
    activeDashboard: state.dashboard.activeDashboard
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuItemClick: name => {
      dispatch(activateDashboard(name))
    }
  }
};

const menuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default menuContainer;
