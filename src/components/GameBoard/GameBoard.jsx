import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Square from '../Square/Square'
import styles from './GameBoard.module.scss';

class GameBoard extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.squares.map((value, index) => {
          return <Square
            key={index}
            value={value}
            onClick={() => this.props.onClick(index)}
          />
        })}
      </div>
    );
  }
}

GameBoard.propTypes = {
  squares: Proptypes.array.isRequired,
  onClick: Proptypes.func.isRequired,
};

export default GameBoard;
