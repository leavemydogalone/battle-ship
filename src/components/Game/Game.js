import React, { useEffect, useState } from 'react';
import Board from 'components/Board/Board.js';
import PieceDisplay from 'components/PieceDisplay/PieceDisplay.js';
import placementCheck from './placementCheck';
import createBoard from './boardArray';
import shipArr from 'components/PieceDisplay/shipArr';
import shipCheck from './shipCheck';

export default function Game() {
  const [direction, setDirection] = useState('right');
  const [playerBoard, setPlayerBoard] = useState(createBoard.boardArr);
  // const [computerBoard, setComputerBoard] = useState()
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [shipInfo, setShipInfo] = useState([
    { name: 'L', isSet: false, isDead: false },
    { name: 'M1', isSet: false, isDead: false },
    { name: 'M2', isSet: false, isDead: false },
    { name: 'S1', isSet: false, isDead: false },
    { name: 'S2', isSet: false, isDead: false },
  ]);

  async function placePiece(event) {
    if (placementCheck(selectedPiece, event.target.id, direction) === false) {
      console.log('failed');
      return;
    }
    // check for if their is a piece there
    let length;
    shipArr.map((thing) => {
      if (thing.name === selectedPiece) length = thing.size;
    });

    let newBoard = playerBoard.map((thing) => {
      if (
        thing.id >= parseInt(event.target.id) &&
        thing.id < parseInt(event.target.id) + length
      ) {
        thing.ship = selectedPiece;
      }
    });
    await function () {
      setPlayerBoard(newBoard);
    };

    let newShipInfo = shipInfo.map((thing) => {
      if (thing.name === selectedPiece) thing.isSet = true;
    });
    await function () {
      setShipInfo(newShipInfo);
    };

    setSelectedPiece(null);

    if (shipInfo.filter((input) => input.isSet).length === 5) {
      setGameStarted(true);
      console.log('started');
    }
  }

  useEffect(() => {
    if (shipInfo.filter((input) => input.isSet).length === 5) {
      setGameStarted(true);
      console.log('started');
    }
  }, [shipInfo]);
  return (
    <div data-testid="Game">
      <Board
        boardArr={playerBoard}
        placePiece={placePiece}
        gameStarted={gameStarted}
      />
      <Board boardArr={playerBoard} />
      <PieceDisplay
        shipInfo={shipInfo}
        gameStarted={gameStarted}
        setSelectedPiece={setSelectedPiece}
        direction={direction}
      />
    </div>
  );
}
