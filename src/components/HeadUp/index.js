import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mousetrap from 'mousetrap';
import short from 'short-uuid';
import get from 'lodash/get';

import Menu from '../Menu';
import Space from '../Space';
import Cell from '../../components/Cell';

import './style.css';

export default class HeadUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: this.props.spaces,
    };
  }

  componentDidMount() {
    mousetrap
      .bind('j', this.props.onToggleMenu)
      .bind(['k', 'ctrl+down'], ::this.selectNextSpace)
      .bind(['l', 'ctrl+up'], ::this.selectPrevSpace);
  }

  componentWillUnmount() {
    mousetrap
      .unbind('j')
      .unbind(['k', 'ctrl+down'])
      .unbind(['j', 'ctrl+up']);
  }

  componentWillReceiveProps() {
    // TODO: Investigate how to deal with async properly
    // setTimeout(::this.updateSpaces);
    setTimeout(() => {
      this.props.children.map(::this.createSpace);
    });
  }

  getCurrentIndex() {
    return this.props.spaces.map(x => x.name).indexOf(this.props.activeSpace);
  }

  getPrevSpaceName() {
    const currentIndex = this.getCurrentIndex();
    const prevIndex =
      currentIndex - 1 < 0 ? this.props.spaces.length - 1 : currentIndex - 1;
    return this.props.spaces[prevIndex].name;
  }

  getNextSpaceName() {
    const currentIndex = this.getCurrentIndex();
    const nextIndex =
      currentIndex + 1 > this.props.spaces.length - 1 ? 0 : currentIndex + 1;

    return this.props.spaces[nextIndex].name;
  }

  selectPrevSpace() {
    const name = this.getPrevSpaceName();
    this.props.onPrevSpace(name);
  }

  selectNextSpace() {
    const name = this.getNextSpaceName();
    this.props.onNextSpace(name);
  }

  createSpace({ props } = {}) {
    if (!props) {
      const name = `space-${this.props.spaces.length + 1}`;

      this.props.onAddSpace({ name });
      this.props.onNextSpace(name);
      return;
    }

    const cellsFromChildren = props.children.map(cell => ({
      size: cell.props.size,
      widget: {
        ...get(cell, 'props.children.props'),
        id: short().new(),
      },
    }));
    const space = { name: props.name, cells: cellsFromChildren };
    const isExistingSpace = Boolean(
      this.props.spaces.find(s => s.name === space.name)
    );

    if (!isExistingSpace) {
      this.props.onAddSpace(space);
    }
  }

  renderMenu() {
    const spaces = get(this.props, 'spaces', []);

    if (spaces.length < 2) {
      return null;
    }

    return (
      <Menu
        spaces={spaces}
        activeSpace={this.props.activeSpace}
        isMenuClosed={this.props.isMenuClosed}
        onToggleMenu={this.props.onToggleMenu}
        onSelectMenuItem={this.props.onSelectMenuItem}
        onCreateSpace={() => this.createSpace()}
        onRemoveSpace={name => this.editSpace(name)}
      />
    );
  }

  renderSpaces() {
    const spaces = get(this.props, 'spaces', []);

    return (
      <div styleName="collection">
        {spaces.map(space => (
          <Space
            name={space.name}
            key={space.name}
            isActive={this.props.activeSpace === space.name}
          >
            {space.cells &&
              space.cells.map((props, i) => <Cell {...props} key={i} />)}
          </Space>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div styleName="head-up">
        {this.renderMenu()}
        {this.renderSpaces()}
      </div>
    );
  }
}

HeadUp.propTypes = {
  children: PropTypes.node,
  spaces: PropTypes.array,
  activeSpace: PropTypes.string,
  isMenuClosed: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onSelectMenuItem: PropTypes.func,
  onPrevSpace: PropTypes.func,
  onNextSpace: PropTypes.func,
  onAddSpace: PropTypes.func,
};
