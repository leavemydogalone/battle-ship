import React, { useState, useEffect } from 'react';

export default function Square() {
  const [color, setColor] = useState('red');
  function handleClick() {
    setColor(color === 'red' ? 'grey' : 'red');
  }
  return (
    <div
      className="Square"
      data-testid="Square"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}
