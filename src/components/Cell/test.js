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
    rendered = render(<Cell isConfiguring={true} />);
  });

  test('with children', () => {
    rendered = render(
      <Cell size="2" isConfiguring={true}>
        contents
      </Cell>
    );
  });
});

describe('Cell: behaviour', () => {
  test('click to activate cell', () => {
    const clickSpy = jest.fn();
    const wrapper = shallow(<Cell onClick={clickSpy} />);

    wrapper.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });

  test('click to activate cell settings', () => {
    const clickSpy = jest.fn();
    const wrapper = mount(
      <Cell isActive={true} onSettingsClick={clickSpy}>
        contents
      </Cell>
    );
    const settingsButton = wrapper.find('header > button');

    settingsButton.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });
});
