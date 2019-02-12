import React, { PureComponent } from 'react';
import styles from './Game.module.scss';

export default class Game extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
