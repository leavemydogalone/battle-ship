import React, { useState, useEffect } from 'react';

export default function Square({
  id,
  handleClick,
  isHit,
  gameStarted,
  text,
  board,
}) {
  const [color, setColor] = useState('grey');

  useEffect(() => {
    if (isHit && !text) setColor('black');
    if (isHit && text) setColor('red');
  }, [isHit]);

  useEffect(() => {
    if (gameStarted) setColor('blue');
  }, [gameStarted]);

  return (
    <div
      id={id}
      className="square"
      data-testid="Square"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {board === 'player' ? text : ''}
    </div>
  );
}
