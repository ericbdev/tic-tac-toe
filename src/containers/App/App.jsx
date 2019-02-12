import React, { Component } from 'react';
import styles from './App.module.scss';
import calculateWinner from '../../lib/calculateWinner';

import Game from '../../components/Game/Game';
import GameBoard from '../../components/GameBoard/GameBoard';
import GameActions from '../../components/GameActions/GameActions'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // THis does two things?
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <main className={styles.container}>
        <Game>
          <GameBoard
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          <GameActions>
          </GameActions>
          <div className={styles.status}>
            <div>{status}</div>
          </div>
        </Game>
      </main>
    );
  }
}

export default App;
