import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoSettings from 'react-icons/lib/go/settings';
import classNames from 'classnames';
import Settings from './Settings';

import styles from './style.css';
import * as widgets from '../widgets';

const SettingsButton = ({ onClick }) => (
  <button styleName="menuBtn" onClick={onClick}>
    <GoSettings styleName="menuIcon" />
    <span>Menu</span>
  </button>
);

const Header = ({ title, onSettingsClick, showSettings }) => {
  function handleClick(evt) {
    const isButton = Boolean(evt.target.closest(`.${styles['menuBtn']}`));
    if (isButton) {
      evt.stopPropagation();
    }
    onSettingsClick && onSettingsClick();
  }

  return (
    <header styleName="header">
      {title}
      {showSettings ? <SettingsButton onClick={handleClick} /> : null}
    </header>
  );
};

const Body = ({ type, data }) => {
  const WidgetContent = widgets[type];

  return (
    <div styleName="body">
      {WidgetContent ? <WidgetContent {...data} /> : null}
    </div>
  );
};

class Widget extends Component {
  getSettingsFields(id) {
    return [
      {
        name: 'title',
        label: 'Title',
        value: this.state.title,
        getWidgetId: `w-${id}`,
        onChange: evt => {
          this.setState({
            title: evt.target.value,
          });
        },
      },
    ];
  }

  render() {
    const {
      id,
      type,
      data,
      title,
      isConfiguring,
      isActive,
      onClick,
      onSettingsClick,
    } = this.props;

    return (
      <article
        styleName={classNames('widget', {
          'is-configuring': isConfiguring,
          'is-active': isActive,
        })}
        onClick={onClick}
      >
        <Header
          id={id}
          title={title}
          onSettingsClick={() => onSettingsClick(id)}
          showSettings={isActive}
        />
        <Body type={type} data={data} />
        <Settings isActive={isActive} settings={this.getSettingsFields(id)} />
      </article>
    );
  }
}

SettingsButton.propTypes = {
  onClick: PropTypes.func,
};

Header.propTypes = {
  title: PropTypes.string,
  onSettingsClick: PropTypes.func,
  showSettings: PropTypes.bool,
};

Body.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
};

Widget.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.object,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  isConfiguring: PropTypes.bool,
  onSettingsClick: PropTypes.func,
  children: PropTypes.node,
};

export default Widget;
