import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../../containers/Widget';
import { GRID_SIZE } from '../../constants';

import './style.css';

const Cell = props => {
  const dimensions = props.size
    .split(/:|\//)
    .map(d => `${d / GRID_SIZE * 100}%`);

  return (
    <div
      styleName="cell"
      className={props.className}
      style={{
        width: dimensions[0],
        height: dimensions[1] || dimensions[0],
      }}
    >
      {props.children ? props.children : null}
      {props.widget ? <Widget {...props.widget} /> : null}
    </div>
  );
};

Cell.defaultProps = {
  size: '1',
};

Cell.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  widget: PropTypes.object,
  className: PropTypes.string,
};

export default Cell;
