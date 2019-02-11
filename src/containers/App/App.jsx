import React, { Component } from 'react';
import styles from './App.module.scss';

import GameBoard from '../../components/GameBoard/GameBoard';

class App extends Component {
  constructor(props) {
    super(props);

    this.squares = Array(9).fill(null);
  }

  render() {
    return (
      <main className={styles.container}>
        <GameBoard squares={this.squares} />
      </main>
    );
  }
}

export default App;
