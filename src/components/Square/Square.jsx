import React from 'react';
import styles from './Square.module.scss'

const Square = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <button
        className={styles.square}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Square;
