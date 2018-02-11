import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mousetrap from 'mousetrap';
import flatten from 'lodash/flatten';
import uniqueId from 'lodash/uniqueId';
import reject from 'lodash/reject';

import Menu from '../Menu';
import Space from '../Space';

import './style.css';

export default class HeadUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: flatten([this.props.children]),
    };
  }

  componentWillUnmount() {
    mousetrap
      .unbind('h')
      .unbind(['j', 'ctrl+up'])
      .unbind(['k', 'ctrl+down']);
  }

  componentDidMount() {
    mousetrap
      .bind('h', this.props.onToggleMenu)
      .bind(['j', 'ctrl+up'], this.selectPrevSpace.bind(this))
      .bind(['k', 'ctrl+down'], this.selectNextSpace.bind(this));
  }

  getCurrentIndex() {
    return this.state.menuItems
      .map(x => x.name)
      .indexOf(this.props.activeSpace);
  }

  getPrevSpaceName() {
    const currentIndex = this.getCurrentIndex();
    const prevIndex =
      currentIndex - 1 < 0 ? this.state.menuItems.length - 1 : currentIndex - 1;
    return this.state.menuItems[prevIndex].name;
  }

  getNextSpaceName() {
    const currentIndex = this.getCurrentIndex();
    const nextIndex =
      currentIndex + 1 > this.state.menuItems.length - 1 ? 0 : currentIndex + 1;
    return this.state.menuItems[nextIndex].name;
  }

  selectPrevSpace() {
    const name = this.getPrevSpaceName();
    this.props.onPrevSpace(name);
  }

  selectNextSpace() {
    const name = this.getNextSpaceName();
    this.props.onNextSpace(name);
  }

  createSpace() {
    const name = uniqueId('space-');

    this.setState({
      spaces: [...this.state.spaces, { props: { name, children: [] } }],
    });

    this.props.onSelectMenuItem(name);
  }

  editSpace(name) {
    console.log('editing ' + name);
  }

  removeSpace(name) {
    const isLast = this.getCurrentIndex() === this.state.spaces.length - 1;

    if (isLast) {
      this.selectPrevSpace();
    } else {
      this.selectNextSpace();
    }

    this.setState({
      spaces: reject(this.state.spaces, ['name', name]),
    });
  }

  renderMenu() {
    if (this.state.spaces.length < 2) {
      return null;
    }
    return (
      <Menu
        spaces={this.state.spaces}
        activeSpace={this.props.activeSpace}
        isMenuClosed={this.props.isMenuClosed}
        onToggleMenu={this.props.onToggleMenu}
        onSelectMenuItem={this.props.onSelectMenuItem}
        onCreateSpace={() => this.createSpace()}
        onRemoveSpace={name => this.editSpace(name)}
      />
    );
  }

  render() {
    const { spaces } = this.state;

    if (!spaces.length) {
      return null;
    }

    return (
      <div styleName="head-up">
        {this.renderMenu()}
        <div styleName="collection">
          {this.state.spaces.map(({ props }) => (
            <Space
              {...props}
              key={props.name}
              isActive={this.props.activeSpace === props.name}
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
  activeSpace: PropTypes.string,
  isMenuClosed: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onSelectMenuItem: PropTypes.func,
  onPrevSpace: PropTypes.func,
  onNextSpace: PropTypes.func,
};
