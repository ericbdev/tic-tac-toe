import React from 'react';
import styles from './Square.module.scss';

import { IconO, IconX } from '../Icons/';

const Square = (props) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.square}
        onClick={props.onClick}
      >
        <div className='icon-container'>
          {
            props.value === 'X' && <IconX />
          }
          {
            props.value === 'O' && <IconO />
          }
        </div>
      </button>
    </div>
  );
};

export default Square;
