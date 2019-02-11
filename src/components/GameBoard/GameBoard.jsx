import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Square from '../Square/Square'
import styles from './GameBoard.module.scss';

class GameBoard extends Component {
  handleClick = () => {

  }

  render() {
    const classList = `game-board ${styles.container}`;

    return (
      <div className={classList}>
        {this.props.squares.map((value, index) => {
          return <Square onClick={this.handleClick} key={index} />;
        })}
      </div>
    );
  }
}

GameBoard.propTypes = {
  squares: Proptypes.array.isRequired,
};

export default GameBoard;
