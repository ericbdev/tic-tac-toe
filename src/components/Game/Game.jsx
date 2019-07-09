import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';
import styles from './Game.module.scss';

const Game = (props) => {
  return (
    <div className={classNames(styles.container, 'js-game')}>
      {props.children}
    </div>
  );
};

Game.propTypes = {
  children: Proptypes.element.isRequired,
};

export default Game;
