import React, { Component } from 'react';
import styles from './App.module.scss';

import GameBoard from '../../components/GameBoard/GameBoard'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className={styles.container}>
        <GameBoard />
      </main>
    );
  }
}

export default App;
