import React from 'react';
import PropTypes from 'prop-types';
import GoSettings from 'react-icons/lib/go/settings';
import Content from './Content';
import Settings from './Settings';

import './style.css';

const SettingsButton = ({ onClick }) => (
  <button styleName="menuBtn" onClick={onClick}>
    <GoSettings styleName="menuIcon" />
    <span>Menu</span>
  </button>
);

SettingsButton.displayName = 'SettingsButton';
SettingsButton.propTypes = {
  onClick: PropTypes.func,
};

const Container = ({
  title,
  isActive,
  onSettingsClick,
  innerClassName,
  children,
}) => (
  <article styleName="container">
    <header styleName="header">
      {title}
      {!children && isActive ? (
        <SettingsButton onClick={() => onSettingsClick(title)} />
      ) : null}
    </header>
    <div styleName="inner">
      <Content className={innerClassName}>{children}</Content>
      {!children ? <Settings isActive={isActive} /> : null}
    </div>
  </article>
);

Container.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onSettingsClick: PropTypes.func,
  innerClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
