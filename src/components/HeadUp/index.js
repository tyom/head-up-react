import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mousetrap from 'mousetrap';
import flatten from 'lodash/flatten';

import Menu from '../Menu';
import Dashboard from '../Dashboard';

import './style.css';

export default class HeadUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [],
      dashboards: [],
    };
  }

  componentDidMount() {
    const dashboards = this.props.dashboards || flatten([this.props.children]);
    const menuItems = dashboards.map(
      dashboard => dashboard.name || dashboard.props.name
    );
    const getCurrentDashboardIndex = () =>
      menuItems.indexOf(this.props.activeDashboard);

    this.setState({ menuItems, dashboards });

    mousetrap
      .bind('h', this.props.onToggleMenu)
      .bind(['j', 'ctrl+up'], () =>
        this.getPrevDashboardName(getCurrentDashboardIndex())
      )
      .bind(['k', 'ctrl+down'], () =>
        this.getNextDashboardName(getCurrentDashboardIndex())
      );
  }

  componentWillUnmount() {
    mousetrap
      .unbind('h')
      .unbind(['j', 'ctrl+up'])
      .unbind(['k', 'ctrl+down']);
  }

  getPrevDashboardName(currentIndex) {
    const prevIndex =
      currentIndex - 1 < 0 ? this.state.menuItems.length - 1 : currentIndex - 1;
    this.props.onPrevDashboard(this.state.menuItems[prevIndex]);
  }

  getNextDashboardName(currentIndex) {
    const nextIndex =
      currentIndex + 1 > this.state.menuItems.length - 1 ? 0 : currentIndex + 1;
    this.props.onNextDashboard(this.state.menuItems[nextIndex]);
  }

  renderMenu() {
    if (this.state.menuItems.length < 2) {
      return null;
    }
    return (
      <Menu
        items={this.state.menuItems}
        activeDashboard={this.props.activeDashboard}
        isMenuClosed={this.props.isMenuClosed}
        onToggleMenu={this.props.onToggleMenu}
        onSelectMenuItem={this.props.onSelectMenuItem}
      />
    );
  }

  render() {
    return (
      <div styleName="head-up">
        {this.renderMenu()}
        <div styleName="collection">
          {this.props.children.map(({ props }) => (
            <Dashboard
              {...props}
              key={props.name}
              isActive={this.props.activeDashboard === props.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

HeadUp.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  dashboards: PropTypes.array,
  activeDashboard: PropTypes.string,
  isMenuClosed: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onSelectMenuItem: PropTypes.func,
  onPrevDashboard: PropTypes.func,
  onNextDashboard: PropTypes.func,
};
