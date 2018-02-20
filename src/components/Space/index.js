import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

import './style.css';

export default class Space extends React.Component {
  componentDidMount() {
    this.handleScrolling();
  }

  componentDidUpdate() {
    this.handleScrolling({ behavior: 'smooth' });
  }

  handleScrolling(behavior) {
    if (!this.props.isActive) {
      return;
    }
    this._dashboard.scrollIntoView && this._dashboard.scrollIntoView(behavior);
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

Space.defaultProps = {
  isActive: false,
  cells: [],
};

Space.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  cells: PropTypes.array,
  isActive: PropTypes.bool,
};
