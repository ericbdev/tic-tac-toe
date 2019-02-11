import React, { Component }  from 'react';

import styles from './GameBoard.module.scss'

class GameBoard extends Component {
  render() {
    const classList = `game-board ${styles.container}`
    return (
      <div className={classList}>
      </div>
    )
  }
}

export default GameBoard;
