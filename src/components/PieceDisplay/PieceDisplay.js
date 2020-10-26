import React from 'react';
import Ship from 'components/Ship/Ship.js';
import shipArr from './shipArr';

export default function PieceDisplay({
  shipInfo,
  gameStarted,
  handleClick,
  direction,
}) {
  const ships = shipArr.map((thing, index) => (
    <Ship
      size={thing.size}
      name={thing.name}
      direction={direction}
      shipInfo={shipInfo[index]}
      handleClick={handleClick}
      key={index}
    />
  ));
  return (
    <div className="pieceDisplay" data-testid="PieceDisplay">
      {handleClick === null ? 'Computer Pieces' : 'Player Pieces'}
      <br />
      {ships}
    </div>
  );
}
