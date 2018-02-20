import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mousetrap from 'mousetrap';

import Menu from '../Menu';
import Space from '../Space';
import Cell from '../../containers/Cell';

import './style.css';

const transformSpaceComponentToData = space => ({
  name: space.props.name,
  cells: space.props.children
    ? space.props.children.map(cell => ({
        size: cell.props.size,
        title: cell.props.title,
      }))
    : [],
});

export default class HeadUp extends Component {
  constructor(props) {
    super(props);

    const transformedChildren = this.props.children.map(
      transformSpaceComponentToData
    );

    this.state = {
      spaces: [...transformedChildren, ...this.props.spaces],
    };
  }

  componentDidMount() {
    mousetrap
      .bind('h', this.props.onToggleMenu)
      .bind(['j', 'ctrl+up'], this.selectPrevSpace.bind(this))
      .bind(['k', 'ctrl+down'], this.selectNextSpace.bind(this));
  }

  componentWillUnmount() {
    mousetrap
      .unbind('h')
      .unbind(['j', 'ctrl+up'])
      .unbind(['k', 'ctrl+down']);
  }

  getCurrentIndex() {
    return this.state.spaces.map(x => x.name).indexOf(this.props.activeSpace);
  }

  getPrevSpaceName() {
    const currentIndex = this.getCurrentIndex();
    const prevIndex =
      currentIndex - 1 < 0 ? this.state.spaces.length - 1 : currentIndex - 1;
    return this.state.spaces[prevIndex].name;
  }

  getNextSpaceName() {
    const currentIndex = this.getCurrentIndex();
    const nextIndex =
      currentIndex + 1 > this.state.spaces.length - 1 ? 0 : currentIndex + 1;

    return this.state.spaces[nextIndex].name;
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
    const name = `space-${this.state.spaces.length + 1}`;
    const space = { name };

    this.props.onAddSpace(space);
    this.props.onSelectMenuItem(name);

    this.setState({
      spaces: [...this.state.spaces, space],
    });
  }

  // editSpace(name) {
  //   console.log('editing ' + name);
  // }
  //
  // removeSpace(name) {
  //   const isLast = this.getCurrentIndex() === this.state.spaces.length - 1;
  //
  //   if (isLast) {
  //     this.selectPrevSpace();
  //   } else {
  //     this.selectNextSpace();
  //   }
  // }

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

  renderSpaces() {
    return (
      <div styleName="collection">
        {this.state.spaces.map(space => (
          <Space
            name={space.name}
            key={space.name}
            isActive={this.props.activeSpace === space.name}
          >
            {space.cells &&
              space.cells.map(({ title, size }, i) => (
                <Cell title={title} size={size} key={i} />
              ))}
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
