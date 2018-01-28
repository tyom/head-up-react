import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import './style.css';

export default class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.isActive) {
      return;
    }
    // FIXME: Do away without setTimeout
    const d = this._dashboard;
    setTimeout(() => {
      d.scrollIntoView();
    }, 0);
  }

  componentDidUpdate() {
    if (!this.props.isActive) {
      return;
    }
    this._dashboard.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const dashboardId = kebabCase(this.props.name);

    return (
      <div
        id={dashboardId}
        ref={c => (this._dashboard = c)}
        styleName={classNames('dashboard', {
          'is-active': this.props.isActive,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

Dashboard.defaultProps = {
  isActive: false,
};

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array,
  isActive: PropTypes.bool,
};
