import React from 'react';
import Ship from 'components/Ship/Ship.js';
import shipArr from './shipArr';

export default function PieceDisplay({
  shipInfo,
  gameStarted,
  setSelectedPiece,
  direction,
}) {
  function selectPiece(event) {
    setSelectedPiece(event.target.id);
    console.log(event.target.id);
  }
  const ships = shipArr.map((thing, index) => (
    <Ship
      size={thing.size}
      name={thing.name}
      direction={direction}
      shipInfo={shipInfo[index]}
      handleClick={selectPiece}
      key={index}
    />
  ));
  return (
    <div className="pieceDisplay" data-testid="PieceDisplay">
      {ships}
    </div>
  );
}
