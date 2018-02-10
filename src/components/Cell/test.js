import React from 'react';
import Cell from './';

describe('Cell: structure', () => {
  let rendered;

  afterEach(() => {
    expect(rendered).toMatchSnapshot();
  });

  test('default component', () => {
    rendered = render(<Cell />);
  });

  test('custom size', () => {
    rendered = render(<Cell size="1:3" />);
  });

  test('inner container class name', () => {
    rendered = render(<Cell innerClassName="useful">content</Cell>).find(
      '.useful'
    );
  });

  test('active state', () => {
    rendered = render(<Cell size="2" isActive={true} />);
  });

  test('activated settings', () => {
    rendered = render(<Cell title="test" isConfiguring={true} />);
  });

  test('with children', () => {
    rendered = render(<Cell size="2">contents</Cell>);
  });
});

describe('Cell: behaviour', () => {
  test('click to activate cell', () => {
    const clickSpy = jest.fn();
    const wrapper = shallow(<Cell onClick={clickSpy} />);

    wrapper.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });

  test('shows settings only without children', () => {
    const wrapperWithChildren = mount(
      <Cell title="test" isActive={true}>
        contents
      </Cell>
    );
    const wrapperWithoutChildren = mount(<Cell title="test" isActive={true} />);

    expect(wrapperWithChildren.find('SettingsButton')).toHaveLength(0);
    expect(wrapperWithoutChildren.find('SettingsButton')).toHaveLength(1);
  });

  test('click to activate cell settings', () => {
    const clickSpy = jest.fn();
    const wrapper = mount(
      <Cell title="test" isActive={true} onSettingsClick={clickSpy} />
    );
    const settingsButton = wrapper.find('SettingsButton');

    settingsButton.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });
});

describe('Cell: settings', () => {
  test('clicking settings calls a handler', () => {
    const clickSpy = jest.fn();
    const wrapper = shallow(<Cell onClick={clickSpy} />);

    wrapper.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });
});
