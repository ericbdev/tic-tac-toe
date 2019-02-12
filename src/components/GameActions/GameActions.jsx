import React, { PureComponent } from 'react';
import styles from './GameActions.module.scss';

export default class GameActions extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
