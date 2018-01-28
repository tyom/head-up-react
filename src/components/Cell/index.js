import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

import { GRID_SIZE } from '../../constants';
import './style.css';

const Content = ({ children, className }) => (
  <div styleName="content" className={className}>
    {children}
  </div>
);

const Settings = () => (
  <aside styleName="settings">
    <h4>Settings</h4>
  </aside>
);

const CellContainer = ({
  title,
  isActive,
  onSettingsClick,
  innerClassName,
  children,
}) => (
  <article styleName="container">
    <header styleName="header">
      {title}
      {isActive ? (
        <button styleName="menuBtn" onClick={() => onSettingsClick(title)}>
          <FaEllipsisH styleName="menuIcon" />
          <span>Menu</span>
        </button>
      ) : null}
    </header>
    <div styleName="inner">
      <Content className={innerClassName}>{children}</Content>
      <Settings />
    </div>
  </article>
);

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
        <CellContainer
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

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CellContainer.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onSettingsClick: PropTypes.func,
  innerClassName: PropTypes.string,
  children: PropTypes.node,
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
