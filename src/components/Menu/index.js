import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GoPlus from 'react-icons/lib/go/plus';
import FaEdit from 'react-icons/lib/fa/edit';

import Cell from '../Cell';
import Toggle from './Toggle';
import './style.css';

const MenuItem = ({ name, cells = [], isActive, onClick, onRemoveClick }) => (
  <li
    styleName={classNames('list-item', {
      'is-active': isActive,
    })}
    onClick={() => onClick(name)}
  >
    <div styleName="container">
      {cells &&
        cells.map((cell, i) => (
          <Cell styleName="list-item-cell" size={cell.size} key={i} />
        ))}
    </div>
    <div styleName="name">
      {name}
      <button
        type="button"
        onClick={evt => {
          evt.stopPropagation();
          onRemoveClick(name);
        }}
      >
        <FaEdit aria-label="Edit space" />
      </button>
    </div>
  </li>
);

MenuItem.propTypes = {
  name: PropTypes.string,
  cells: PropTypes.array,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

const Menu = ({
  spaces = [],
  isMenuClosed = false,
  activeSpace = spaces[0],
  onSelectMenuItem,
  onToggleMenu,
  onCreateSpace,
  onRemoveSpace,
}) => {
  if (!spaces.length) {
    return null;
  }

  return (
    <nav styleName={classNames('menu', { 'is-hidden': isMenuClosed })}>
      {onToggleMenu ? (
        <Toggle onClick={onToggleMenu} isMenuClosed={isMenuClosed} />
      ) : null}
      <ul styleName="list">
        {spaces.map(space => (
          <MenuItem
            {...space}
            key={space.name}
            isActive={space.name === activeSpace}
            onClick={onSelectMenuItem}
            onRemoveClick={onRemoveSpace}
          />
        ))}
      </ul>
      <button type="button" styleName="addButton" onClick={onCreateSpace}>
        <GoPlus />
      </button>
    </nav>
  );
};

Menu.propTypes = {
  spaces: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      children: PropTypes.array,
    })
  ),
  onSelectMenuItem: PropTypes.func,
  onToggleMenu: PropTypes.func,
  onCreateSpace: PropTypes.func,
  onRemoveSpace: PropTypes.func,
  activeSpace: PropTypes.string,
  isMenuClosed: PropTypes.bool,
};

export default Menu;
