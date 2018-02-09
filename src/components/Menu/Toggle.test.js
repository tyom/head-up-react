import React from 'react';
import Toggle from './Toggle';

const onClickSpy = jest.fn();

describe('Toggle: structure', () => {
  test('renders as open', () => {
    const component = shallow(<Toggle onClick={onClickSpy} />);
    expect(component).toMatchSnapshot();
  });

  test('renders as closed', () => {
    const component = shallow(
      <Toggle isMenuClosed={true} onClick={onClickSpy} />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Toggle: behaviour', () => {
  test('responds to clicks', () => {
    const component = shallow(<Toggle onClick={onClickSpy} />);

    component.simulate('click');

    expect(onClickSpy).toBeCalled();
  });
});
