import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {GRID_SIZE} from '../../constants';
import {activateCell} from '../../actions';

import styles from './styles.css';

const CellComponent = ({title, size='1', isActive, onClick}) => {
  const dimensions = size.split(/:|\//).map(d => `${d/GRID_SIZE*100}%`);

  return (
    <article
      className={classNames(styles.Cell, {
        [styles['is-active']]: isActive
      })}
      onClick={onClick}
      style={
        {
          width: dimensions[0],
          height: dimensions[1] || dimensions[0]
        }
      }
    >
      <header className={styles['Cell-header']}>{title}</header>
    </article>
  );
};

CellComponent.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: ownProps.title === state.dashboard.activeCell
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(activateCell(ownProps.title))
    }
  }
};

const Cell = connect(mapStateToProps, mapDispatchToProps)(CellComponent);

export default Cell;
