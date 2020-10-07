import React, { useState, useEffect } from 'react';

export default function Square({ id, placePiece, isHit, gameStarted, text }) {
  const [color, setColor] = useState('grey');
  // function handleClick() {
  //   setColor(color === 'red' ? 'grey' : 'red');
  //   // console.log(event.target.id);
  // }

  // if (isHit) setColor('red');
  useEffect(() => {
    if (gameStarted) setColor('blue');
  }, [gameStarted]);
  return (
    <div
      id={id}
      className="square"
      data-testid="Square"
      style={{ backgroundColor: color }}
      onClick={placePiece}
    >
      {text}
    </div>
  );
}
