import React from 'react';
import { mount } from 'enzyme';
import Square from './Square';

describe('Square', () => {
  it('Should have a button with a click handler', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Square onClick={onClick} />);
    const propType = typeof wrapper.find('button').prop('onClick');

    expect(propType).toBe('function');
  });
});
