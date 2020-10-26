import React from 'react';

export default function ButtonBox({
  setDirection,
  direction,
  gameStarted,
  reset,
}) {
  const infoBox = gameStarted
    ? 'The game has started! Attack your enemies board!'
    : 'Place your ships by clicking them and then clicking on a space on your board to the left';

  return (
    <div className="buttonBox">
      <button
        type="button"
        onClick={() => setDirection(direction === 'right' ? 'down' : 'right')}
      >
        Ship direction
      </button>
      <br />
      <button type="button" onClick={reset}>
        reset
      </button>
      <br />
      {infoBox}
    </div>
  );
}
