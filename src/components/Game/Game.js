import React, { useState } from 'react';
import Board from 'components/Board/Board.js';
import PieceDisplay from 'components/PieceDisplay/PieceDisplay.js';
import placementCheck from './placementCheck';
import createBoard from './boardArray';

export default function Game() {
  const [direction, setDirection] = useState('right');
  const [playerBoard, setPlayerBoard] = useState(createBoard.boardArr);
  // const [computerBoard, setComputerBoard] = useState()

  const [piecesAreSet, setPiecesAreSet] = useState([
    'no',
    'no',
    'no',
    'no',
    'no',
  ]);

  const [gameStarted, setGameStarted] = useState(false);
  if (piecesAreSet.every((piece) => piece === 'yes')) {
    setGameStarted('yes');
  }

  const [selectedPiece, setSelectedPiece] = useState(null);

  return (
    <div data-testid="Game">
      <Board boardArr={playerBoard} />
      <Board boardArr={playerBoard} />
      <PieceDisplay
        piecesAreSet={piecesAreSet}
        setPiecesAreSet={setPiecesAreSet}
        gameStarted={gameStarted}
        setSelectedPiece={setSelectedPiece}
        direction={direction}
      />
    </div>
  );
}
