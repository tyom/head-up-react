import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Container from './Container';
import { GRID_SIZE } from '../../constants';

import './style.css';

const Cell = ({
  title,
  size = '1',
  isActive,
  isConfiguring,
  onClick,
  onSettingsClick,
  children,
  innerClassName,
  className,
}) => {
  const dimensions = size.split(/:|\//).map(d => `${d / GRID_SIZE * 100}%`);

  return (
    <div
      styleName={classNames('cell', {
        'is-active': isActive,
        'is-configuring': isConfiguring,
      })}
      className={className}
      onClick={onClick}
      style={{
        width: dimensions[0],
        height: dimensions[1] || dimensions[0],
      }}
    >
      {title || children ? (
        <Container
          title={title}
          isActive={isActive}
          onSettingsClick={onSettingsClick}
          innerClassName={innerClassName}
          children={children}
        />
      ) : null}
    </div>
  );
};

Cell.propTypes = {
  onClick: PropTypes.func,
  onSettingsClick: PropTypes.func,
  innerClassName: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  isConfiguring: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Cell;
