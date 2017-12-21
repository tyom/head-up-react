import React, {Component} from 'react';
import PropTypes from 'prop-types';
import mousetrap from 'mousetrap';

import Menu from '../../components/Menu';

import styles from './styles.css';

export default class HeadUp extends Component {
  constructor(props) {
    super(props);

    this.state = {menuItems: []};
  }

  componentDidMount() {
    const menuItems = this.props.children.map(dashboard => dashboard.props.name);
    const getCurrentDashboardIndex = () => menuItems.indexOf(this.props.activeDashboard);

    this.setState({menuItems});

    mousetrap
      .bind('m', this.props.onToggleMenu)
      .bind(['j', 'ctrl+up'], () => this.getPrevDashboardName(getCurrentDashboardIndex()))
      .bind(['k', 'ctrl+down'], () => this.getNextDashboardName(getCurrentDashboardIndex()))
    ;
  }

  componentWillUnmount() {
    mousetrap
      .unbind('m')
      .unbind(['j', 'ctrl+up'])
      .unbind(['k', 'ctrl+down'])
    ;
  }

  getPrevDashboardName(currentIndex) {
    const prevIndex = (currentIndex - 1) < 0 ? this.state.menuItems.length - 1 : currentIndex - 1;
    this.props.onPrevDashboard(this.state.menuItems[prevIndex]);
  }

  getNextDashboardName(currentIndex) {
    const nextIndex = (currentIndex + 1) > this.state.menuItems.length - 1 ? 0 : currentIndex + 1;
    this.props.onNextDashboard(this.state.menuItems[nextIndex]);
  }

  renderMenu() {
    if (!this.state.menuItems.length) {return null;}
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
      <div className={styles.HeadUp}>
        {this.renderMenu()}
        <div className={styles['HeadUp-collection']}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

HeadUp.propTypes = {
  children: PropTypes.array.isRequired,
  activeDashboard: PropTypes.string,
  isMenuClosed: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onSelectMenuItem: PropTypes.func,
  onPrevDashboard: PropTypes.func,
  onNextDashboard: PropTypes.func
};

