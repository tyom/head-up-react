import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

import {GRID_SIZE} from '../../constants';
import {activateCell} from '../../actions';
import {activateCellSettings} from '../../actions';

import styles from './styles.css';

const Content = () => (
  <div className={styles['Cell-content']}>
    <h4>Content</h4>
  </div>
);

const Settings = () => (
  <aside className={styles['Cell-settings']}>
    <h4>Settings</h4>
  </aside>
);

const Cell = ({title, size='1', isActive, isConfiguring, onClick, onSettingsClick}) => {
  const dimensions = size.split(/:|\//).map(d => `${d/GRID_SIZE*100}%`);

  return (
    <div
      className={classNames(styles.Cell, {
        [styles['is-active']]: isActive,
        [styles['is-configuring']]: isConfiguring
      })}
      onClick={onClick}
      style={{
        width: dimensions[0],
        height: dimensions[1] || dimensions[0]
      }}
    >
      <article className={styles['Cell-container']}>
        <header className={styles['Cell-header']}>
          {title}
          {isActive ?
            <button className={styles['Cell-menuBtn']} onClick={() => onSettingsClick(title)}>
              <FaEllipsisH className={styles['Cell-menuIcon']}/>
              <span>Menu</span>
            </button>
            : null
          }
        </header>
        <div className={styles['Cell-inner']}>
          <Content>Content</Content>
          <Settings/>
        </div>
      </article>
    </div>
  );
};

Cell.propTypes = {
  onClick: PropTypes.func,
  onSettingsClick: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  isConfiguring: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: ownProps.title === state.dashboard.activeCell,
    isConfiguring: ownProps.title === state.dashboard.activeCellSettings
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: evt => {
      const isButton = !!evt.target.closest(`.${styles['Cell-menuBtn']}`);
      if (isButton) {return;}
      dispatch(activateCell(ownProps.title));
    },
    onSettingsClick: title => {
      dispatch(activateCellSettings(title));
    }
  };
};

const CellContainer = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellContainer;
