import React, { useState } from 'react';
import Board from 'components/Board/Board.js';
import PieceDisplay from 'components/PieceDisplay/PieceDisplay.js';
import placementCheck from './placementCheck';
import createBoard from './boardArray';
import shipArr from 'components/PieceDisplay/shipArr';

export default function Game() {
  const [direction, setDirection] = useState('right');
  const [playerBoard, setPlayerBoard] = useState(createBoard.boardArr);
  // const [computerBoard, setComputerBoard] = useState()
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [piecesAreSet, setPiecesAreSet] = useState([
    { name: 'L', isSet: false },
    { name: 'M1', isSet: false },
    { name: 'M2', isSet: false },
    { name: 'M3', isSet: false },
    { name: 'M4', isSet: false },
  ]);

  if (piecesAreSet.every((piece) => piece === 'yes')) {
    setGameStarted('yes');
  }

  async function placePiece(event) {
    console.log('started');
    if (placementCheck(selectedPiece, event.target.id, direction) === false) {
      console.log('failed');
      return;
    }
    // check for if their is a piece there
    let length;
    shipArr.map((thing) => {
      if (thing.name === selectedPiece) length = thing.size;
    });

    let newBoard = await playerBoard.map((thing) => {
      if (
        thing.id >= parseInt(event.target.id) &&
        thing.id < parseInt(event.target.id) + length
      ) {
        thing.ship = selectedPiece;
      }
    });
    console.log(playerBoard);
    await function () {
      setPlayerBoard(newBoard);
    };
    setSelectedPiece(null);
  }
  return (
    <div data-testid="Game">
      <Board boardArr={playerBoard} placePiece={placePiece} />
      <Board boardArr={playerBoard} />
      <PieceDisplay
        piecesAreSet={piecesAreSet}
        gameStarted={gameStarted}
        setSelectedPiece={setSelectedPiece}
        direction={direction}
      />
    </div>
  );
}
