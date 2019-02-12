import React, { PureComponent } from 'react';
import styles from './GameStatus.module.scss';

export default class GameStatus extends PureComponent {
  render() {
    const {winner, xIsNext, isTied} = this.props;

    return (
      <div className={styles.container}>
        {
          !isTied && winner && (
            <div>{winner} is the winner!</div>
          )
        }
        {
          !isTied && !winner && (
            <div>Next player: {xIsNext ? 'X' : 'O'}</div>
          )
        }
        {
          isTied && !winner && (
            <div>Game is all tied up.</div>
          )
        }
      </div>
    );
  }
}
