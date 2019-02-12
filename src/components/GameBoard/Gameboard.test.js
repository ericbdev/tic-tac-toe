import React from 'react';
import { mount } from 'enzyme';
import GameBoard from './GameBoard';

describe('GameBoard', () => {
  it('Should have 9 squares', () => {
    const squares = Array(9).fill(null);
    const wrapper = mount(<GameBoard squares={squares} />);
    const children = wrapper.find('.game-board').children();
    expect(children.length).toBe(9);
  });
});
