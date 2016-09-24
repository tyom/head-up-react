import React, {PropTypes} from 'react';
import kebabCase from 'lodash/kebabCase';
import smoothScroll from 'smoothscroll';

import {menu} from './styles.css';

function handleClick(item) {
  document.getElementById(item).scrollIntoView({behavior: 'smooth'});
}

const Menu = ({items}) => (
  <nav className={menu}>
    <ul>
      {items.map(item => (
        <li key={kebabCase(item)} onClick={() => handleClick(item)}>{item}</li>
      ))}
    </ul>
  </nav>
);

Menu.PropTypes = {
  displayName: 'Menu'
};

export default Menu;
