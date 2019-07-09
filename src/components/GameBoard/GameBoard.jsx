import React from 'react';
import Proptypes from 'prop-types';
import Square from '../Square/Square'
import styles from './GameBoard.module.scss';

const GameBoard = props => (
  <div className={styles.container} data-game-board>
    {props.squares.map((value, index) => {
      return <Square
        key={index}
        value={value}
        onClick={() => props.onClick(index)}
      />
    })}
  </div>
);

GameBoard.propTypes = {
  squares: Proptypes.array.isRequired,
  onClick: Proptypes.func.isRequired,
};

export default GameBoard;
