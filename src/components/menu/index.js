import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import {activateDashboard} from '../../actions';
import {toggleMenu} from '../../actions';

import Toggle from './toggle';
import styles from './styles.css';


function Menu({items=[], isMenuClosed=false, activeDashboard=items[0], onMenuItemClick, onToggleClick}) {
  if (!items.length) {return;}

  return (
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
}

Menu.propTypes = {
  items: PropTypes.array,
  onMenuItemClick: PropTypes.func,
  onToggleClick: PropTypes.func,
  activeDashboard: PropTypes.string,
  isMenuClosed: PropTypes.bool
};

const mapStateToProps = (state) => ({
  activeDashboard: state.dashboardReducer.activeDashboard,
  isMenuClosed: state.dashboardReducer.isMenuClosed
});

function mapDispatchToProps(dispatch) {
  return {
    onToggleClick: () => dispatch(toggleMenu()),
    onMenuItemClick: name => dispatch(activateDashboard(name))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
