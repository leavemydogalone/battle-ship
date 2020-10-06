import React from 'react';

// to serve as building block for ships
export default function PieceSquare({ direction, isSet, id }) {
  const backGround =
    isSet === 'yes' ? { backgroundColor: 'grey' } : { backgroundColor: 'blue' };

  const theStyle =
    direction === 'down'
      ? { ...backGround, display: 'block' }
      : { ...backGround, display: 'inline-block' };

  return (
    <div
      id={id}
      className="pieceSquare"
      data-testid="PieceSquare"
      style={theStyle}
    ></div>
  );
}
