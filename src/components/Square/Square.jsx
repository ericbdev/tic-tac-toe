import React from 'react';
import Proptypes from 'prop-types';
import styles from './Square.module.scss'

const Square = (props) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.square} 
        onClick={props.onClick}
      >
        Square
      </button>
    </div>
  );
};

Square.propTypes = {
  onClick: Proptypes.func.isRequired,
}

export default Square;
