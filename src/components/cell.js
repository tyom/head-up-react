import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {GRID_SIZE} from '../constants';
import {activateCell} from '../actions';

const CellComponent = ({title, size='1', isActive, onClick}) => {
  const dimensions = size.split(/:|\//).map(d => `${d/GRID_SIZE*100}%`);

  return (
    <div
      className={`cell${isActive && ' is-active' || ''}`}
      onClick={onClick}
      style={
        {
          width: dimensions[0],
          height: dimensions[1] || dimensions[0]
        }
      }
    >{title} {isActive}</div>
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