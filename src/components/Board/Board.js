import React, { useState, useEffect } from 'react';
import Square from 'components/Square/Square.js';

export default function Board({ boardArr, placePiece, gameStarted }) {
  let display = boardArr.map((thing) => (
    <Square
      key={thing.id}
      id={thing.id}
      text={thing.ship}
      placePiece={placePiece}
      isHit={thing.isHit}
      gameStarted={gameStarted}
    />
  ));

  return (
    <div className="board" data-testid="Board">
      {display}
    </div>
  );
}
