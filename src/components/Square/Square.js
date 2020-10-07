import React, { useState, placePiece } from 'react';

export default function Square({ id, placePiece, isHit }) {
  const [color, setColor] = useState('grey');
  // function handleClick() {
  //   setColor(color === 'red' ? 'grey' : 'red');
  //   // console.log(event.target.id);
  // }
  if (isHit) setColor('red');
  return (
    <div
      id={id}
      className="square"
      data-testid="Square"
      style={{ backgroundColor: color }}
      onClick={placePiece}
    ></div>
  );
}
