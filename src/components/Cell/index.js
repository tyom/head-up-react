import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

import { GRID_SIZE } from '../../constants';
import styles from './styles.css';

const Content = ({ children, className }) => (
  <div className={classNames(className, styles['Cell-content'])}>
    {children}
  </div>
);

const Settings = () => (
  <aside className={styles['Cell-settings']}>
    <h4>Settings</h4>
  </aside>
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
}) => {
  const dimensions = size.split(/:|\//).map(d => `${d / GRID_SIZE * 100}%`);

  return (
    <div
      className={classNames(styles.Cell, {
        [styles['is-active']]: isActive,
        [styles['is-configuring']]: isConfiguring,
      })}
      onClick={onClick}
      style={{
        width: dimensions[0],
        height: dimensions[1] || dimensions[0],
      }}
    >
      <article className={styles['Cell-container']}>
        <header className={styles['Cell-header']}>
          {title}
          {isActive ? (
            <button
              className={styles['Cell-menuBtn']}
              onClick={() => onSettingsClick(title)}
            >
              <FaEllipsisH className={styles['Cell-menuIcon']} />
              <span>Menu</span>
            </button>
          ) : null}
        </header>
        <div className={styles['Cell-inner']}>
          <Content className={innerClassName}>{children}</Content>
          <Settings />
        </div>
      </article>
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
};

export default Cell;
