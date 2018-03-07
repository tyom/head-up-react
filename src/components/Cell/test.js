import React from 'react';
import Cell from './';

describe('Cell: structure', () => {
  let rendered;

  afterEach(() => {
    expect(rendered).toMatchSnapshot();
  });

  test('default component', () => {
    rendered = shallow(<Cell />);
  });

  test('has size', () => {
    rendered = shallow(<Cell size="1:3" />);
  });

  test('has children', () => {
    rendered = shallow(<Cell size="2">contents</Cell>);
  });

  test('has widget', () => {
    rendered = shallow(
      <Cell size="2" widget={{ title: 'my data', isActive: true }} />
    );
  });
});
