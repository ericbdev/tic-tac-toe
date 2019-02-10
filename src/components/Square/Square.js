import React from 'react';
import Proptypes from 'prop-types';

const Square = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Square</button>
    </div>
  );
};

Square.propTypes = {
  onClick: Proptypes.func.isRequired,
}

export default Square;
