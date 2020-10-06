import React, { useState } from 'react';

export default function Square({ id }) {
  const [color, setColor] = useState('red');
  function handleClick() {
    setColor(color === 'red' ? 'grey' : 'red');
    // console.log(event.target.id);
  }
  return (
    <div
      id={id}
      className="square"
      data-testid="Square"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}
