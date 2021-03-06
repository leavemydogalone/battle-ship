import React, { useState, useEffect } from 'react';

import PieceSquare from 'components/PieceSquare/PieceSquare.js';

export default function Ship({ size, name, direction, shipInfo, handleClick }) {
  const shipArr = new Array(size).fill(name);
  let directionStyle;
  const isDead = shipInfo.isDead ? 'true' : 'false';

  if (direction === 'down')
    directionStyle = { display: 'inline-block', marginRight: '5px', top: 0 };

  const theShip = shipArr.map((thing, index) => (
    <PieceSquare
      key={index}
      direction={direction}
      isSet={shipInfo.isSet}
      id={name}
      isdead={isDead.toString()}
    />
  ));

  return (
    <div
      data-testid="Ship"
      className="ship"
      style={directionStyle}
      onClick={shipInfo.isSet ? null : handleClick}
    >
      {theShip}
    </div>
  );
}
