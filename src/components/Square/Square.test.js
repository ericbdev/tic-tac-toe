import React from 'react';
import { mount } from 'enzyme';
import Square from './Square';

describe('Square', () => {
  it('Should have a button with a click handler', () => {
    const wrapper = mount(<Square />);
    const propType = typeof wrapper.find('button').prop('onClick');

    expect(propType).toBe('function');
  });
});
