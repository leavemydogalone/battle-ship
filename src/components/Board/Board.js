import React, { useState, useEffect } from 'react';
import Square from 'components/Square/Square.js';

export default function Board({ boardArr, placePiece }) {
  let display = boardArr.map((thing) => (
    <Square
      key={thing.id}
      id={thing.id}
      placePiece={placePiece}
      isHit={thing.isHit}
    />
  ));

  return (
    <div className="board" data-testid="Board">
      {display}
    </div>
  );
}
