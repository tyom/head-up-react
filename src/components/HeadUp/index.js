import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mousetrap from 'mousetrap';
import flatten from 'lodash/fp/flatten';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import compose from 'lodash/fp/compose';

import Menu from '../Menu';
import Dashboard from '../Dashboard';

import './style.css';

export default class HeadUp extends Component {
  constructor(props) {
    super(props);

    const dashboards = compose(filter(get('props.children')), flatten)([
      this.props.children,
    ]);

    const menuItems = dashboards.map(({ props }) => ({
      name: props.name,
      cells: flatten([props.children]).map(cell => cell.props.size),
    }));

    this.state = {
      dashboards,
      menuItems,
    };
  }

  componentDidMount() {
    mousetrap
      .bind('h', this.props.onToggleMenu)
      .bind(['j', 'ctrl+up'], this.selectPrevDashboard.bind(this))
      .bind(['k', 'ctrl+down'], this.selectNextDashboard.bind(this));
  }

  componentWillUnmount() {
    mousetrap
      .unbind('h')
      .unbind(['j', 'ctrl+up'])
      .unbind(['k', 'ctrl+down']);
  }

  getCurrentIndex() {
    return this.state.menuItems
      .map(x => x.name)
      .indexOf(this.props.activeDashboard);
  }

  getPrevDashboardName() {
    const currentIndex = this.getCurrentIndex();
    const prevIndex =
      currentIndex - 1 < 0 ? this.state.menuItems.length - 1 : currentIndex - 1;
    return this.state.menuItems[prevIndex].name;
  }

  getNextDashboardName() {
    const currentIndex = this.getCurrentIndex();
    const nextIndex =
      currentIndex + 1 > this.state.menuItems.length - 1 ? 0 : currentIndex + 1;
    return this.state.menuItems[nextIndex].name;
  }

  selectPrevDashboard() {
    const name = this.getPrevDashboardName();
    this.props.onPrevDashboard(name);
  }

  selectNextDashboard() {
    const name = this.getNextDashboardName();
    this.props.onNextDashboard(name);
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
    const { dashboards } = this.state;

    if (!dashboards.length) {
      return null;
    }

    return (
      <div styleName="head-up">
        {this.renderMenu()}
        <div styleName="collection">
          {this.state.dashboards.map(({ props }) => (
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  activeDashboard: PropTypes.string,
  isMenuClosed: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onSelectMenuItem: PropTypes.func,
  onPrevDashboard: PropTypes.func,
  onNextDashboard: PropTypes.func,
};
