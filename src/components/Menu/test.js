import React from 'react';
import Menu from './';

const menuItems = [
  {
    name: 'first',
    cells: ['1', '2:1', '1:3'],
  },
  {
    name: 'second',
    cells: ['2', '3:2', '1:2'],
  },
];

const onToggleMenuSpy = jest.fn();
const onSelectMenuItemSpy = jest.fn();

const getItemsClassNames = arrayOfComponents =>
  arrayOfComponents.map(x => x.getElement().props.className);

describe('Menu: structure', () => {
  test("doesn't render if no items", () => {
    const component = shallow(<Menu />);
    expect(component).toMatchSnapshot();
  });

  test('renders menu items (dashboards) with cells', () => {
    const component = shallow(<Menu items={menuItems} />);
    expect(component).toMatchSnapshot();
  });

  test('renders menu as closed', () => {
    const component = shallow(<Menu items={menuItems} isMenuClosed={true} />);
    const el = component.getElement();
    expect(el.props.className).toMatchSnapshot();
  });

  test('active state', () => {
    const component1 = shallow(
      <Menu items={menuItems} activeDashboard="first" />
    );
    const component2 = shallow(
      <Menu items={menuItems} activeDashboard="second" />
    );
    const firstClassNames = getItemsClassNames(component1.find('ul > li'));
    const secondClassNames = getItemsClassNames(component2.find('ul > li'));

    expect(firstClassNames).toMatchSnapshot();
    expect(secondClassNames).toMatchSnapshot();
  });

  test('render toggleMenu open', () => {
    const component = shallow(
      <Menu items={menuItems} onToggleMenu={onToggleMenuSpy} />
    );

    expect(component.find('Toggle')).toMatchSnapshot();
  });

  test('render toggleMenu closed', () => {
    const component = shallow(
      <Menu
        items={menuItems}
        onToggleMenu={onToggleMenuSpy}
        isMenuClosed={true}
      />
    );

    expect(component.find('Toggle')).toMatchSnapshot();
  });
});

describe('Menu: behaviour', () => {
  test('menu toggle responds to clicks', () => {
    const component = shallow(
      <Menu items={menuItems} onToggleMenu={onToggleMenuSpy} />
    );

    component.find('Toggle').simulate('click');

    expect(onToggleMenuSpy).toBeCalled();
  });

  test('menu items respond to clicks', () => {
    const component = shallow(
      <Menu items={menuItems} onSelectMenuItem={onSelectMenuItemSpy} />
    );

    component
      .find('li')
      .at(0)
      .simulate('click');
    expect(onSelectMenuItemSpy).toBeCalledWith('first');

    component
      .find('li')
      .at(1)
      .simulate('click');
    expect(onSelectMenuItemSpy).toBeCalledWith('second');
  });
});
