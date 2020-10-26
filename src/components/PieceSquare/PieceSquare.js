import React, { useEffect } from 'react';

// to serve as building block for ships
export default function PieceSquare({ direction, isSet, id, isdead }) {
  let backGround = isSet
    ? { backgroundColor: 'grey' }
    : { backgroundColor: 'blue' };
  // console.log(isdead);
  useEffect(() => {
    // if (isdead === 'true') backGround = { backgroundColor: 'red' };
    console.log(isdead);
  }, [isdead]);

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
