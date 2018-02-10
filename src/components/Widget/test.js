import React from 'react';
import Widget from './';

describe('Widget: structure', () => {
  test('initialise widget', () => {
    const wrapper = shallow(<Widget />);

    console.log(wrapper);
  });
});
