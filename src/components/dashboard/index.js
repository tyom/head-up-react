import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import styles from './styles.css';

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.isActive) {return;}
    // FIXME: Do away without setTimeout
    const d = this._dashboard;
    setTimeout(() => {
      d.scrollIntoView();
    }, 0);
  }

  componentDidUpdate() {
    if (!this.props.isActive) {return;}
    this._dashboard.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    const dashboardId = kebabCase(this.props.name);

    return (
      <div
        id={dashboardId}
        ref={(c) => this._dashboard = c}
        className={classNames(styles.Dashboard, {
          [styles['is-active']]: this.props.isActive
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  isActive: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: ownProps.name === state.dashboard.activeDashboard
  };
};

const DashboardContainer = connect(mapStateToProps)(Dashboard);

export default DashboardContainer;
