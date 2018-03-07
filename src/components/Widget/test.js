import React from 'react';
import Widget from './';

describe('Widget: structure', () => {
  test('initialise widget', () => {
    const wrapper = shallow(<Widget />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Widget: behaviour', () => {
  test('click to activate cell', () => {
    const clickSpy = jest.fn();
    const wrapper = shallow(<Widget onClick={clickSpy} />);

    wrapper.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });

  test('click to activate cell settings', () => {
    const clickSpy = jest.fn();
    const wrapper = mount(
      <Widget title="test" isActive={true} onSettingsClick={clickSpy} />
    );
    const settingsButton = wrapper.find('SettingsButton');

    settingsButton.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });
});

describe('Cell: settings', () => {
  test('clicking settings calls a handler', () => {
    const clickSpy = jest.fn();
    const wrapper = shallow(<Widget onClick={clickSpy} />);

    wrapper.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });
});