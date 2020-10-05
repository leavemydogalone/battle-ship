import React, { useState, useEffect } from 'react';
import Board from 'components/Board/Board.js';
import PieceDisplay from 'components/PieceDisplay/PieceDisplay.js';

export default function Game() {
  return (
    <div data-testid="Game">
      <Board />
      <Board />
      <PieceDisplay />
    </div>
  );
}
