import React, { useState } from 'react';

import PieceSquare from 'components/PieceSquare/PieceSquare.js';

export default function Ship({ size, name, direction, shipInfo, handleClick }) {
  const shipArr = new Array(size).fill(name);

  const theShip = shipArr.map((thing, index) => (
    <PieceSquare
      key={index}
      direction={direction}
      isSet={shipInfo.isSet}
      id={name}
    />
  ));

  return (
    <div data-testid="Ship" onClick={shipInfo.isSet ? null : handleClick}>
      {theShip}
    </div>
  );
}
