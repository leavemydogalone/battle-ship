import React, { useEffect } from 'react';

// to serve as building block for ships
export default function PieceSquare({ direction, isSet, id, isdead }) {
  const backGround = !isSet
    ? { backgroundColor: 'blue' }
    : isdead === 'true'
    ? { backgroundColor: 'red' }
    : { backgroundColor: 'grey' };

  const theStyle =
    direction === 'down'
      ? { ...backGround, display: 'block' }
      : { ...backGround, display: 'inline-block' };

  return (
    <div
      id={isSet ? undefined : id}
      className="pieceSquare"
      data-testid="PieceSquare"
      style={theStyle}
    ></div>
  );
}
