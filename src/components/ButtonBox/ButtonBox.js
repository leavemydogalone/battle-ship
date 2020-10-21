import React from 'react';

export default function ButtonBox({ setDirection, direction }) {
  const infoBox = (
    <div>
      Please click the ships to place them on the board. If they are vertical,
      click the top-most square the ship would occupy. If horizontal, click the
      left-most square.
    </div>
  );
  return (
    <div className="buttonBox">
      <button
        type="button"
        onClick={() => setDirection(direction === 'right' ? 'down' : 'right')}
      >
        Ship direction
      </button>
      <button type="button" onClick={() => console.log('reset')}>
        reset
      </button>
      {infoBox}
    </div>
  );
}
