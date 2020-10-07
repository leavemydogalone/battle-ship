import React, { useState } from 'react';

import PieceSquare from 'components/PieceSquare/PieceSquare.js';

export default function Ship({ size, name, direction, isSet, handleClick }) {
  const shipArr = new Array(size).fill(name);

  const theShip = shipArr.map((thing, index) => (
    <PieceSquare key={index} direction={direction} isSet={isSet} id={name} />
  ));

  return (
    <div
      data-testid="Ship"
      id={isSet === 'no' ? name : null}
      onClick={isSet === 'no' ? handleClick : null}
    >
      {theShip}
    </div>
  );
}
