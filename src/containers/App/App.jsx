import React, { Component } from 'react';
import styles from './App.module.scss';
import calculateWinner from '../../lib/calculateWinner';

import Button from '../../components/Button/Button';

import Game from '../../components/Game/Game';
import GameBoard from '../../components/GameBoard/GameBoard';
import GameActions from '../../components/GameActions/GameActions'
import GameStatus from '../../components/GameStatus/GameStatus';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      isTied: false,
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
    // Stop if winner already chosen
    if (this.state.winner) {
      return;
    }

    const currentStep = this.state.stepNumber + 1;
    const history = this.state.history.slice(0, currentStep);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // Stop if winner, or if square is played
    if (squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const nextHistory = history.concat([
      {
        squares: squares,
      },
    ]);
    const winner = calculateWinner(squares);
    const isTied = currentStep === 9 && !winner;

    this.setState({
      history: nextHistory,
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      winner,
      isTied,
    });
  };

  changeStep(step) {
    this.setState({
      isTied: false,
      winner: null,
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  undoMove = () => {
    this.changeStep(this.state.stepNumber - 1);
  }

  resetGame = () => {
    this.changeStep(0);
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <main className={styles.container}>
        <Game>
          <GameBoard
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          <GameActions>
            <Button onClick={this.undoMove}>Hey, go back a step!</Button>
            <Button onClick={this.resetGame}>Nah, lets start over.</Button>
          </GameActions>
          <GameStatus
            winner={this.state.winner}
            xIsNext={this.state.xIsNext}
            isTied={this.state.isTied}
          />
        </Game>
      </main>
    );
  }
}

export default App;
