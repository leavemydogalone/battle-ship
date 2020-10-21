import React, { useEffect, useState } from 'react';
import Board from 'components/Board/Board.js';
import PieceDisplay from 'components/PieceDisplay/PieceDisplay.js';
import ButtonBox from 'components/ButtonBox/ButtonBox.js';
import placementCheck from './placementCheck';
import createBlankBoard from './boardArray';
import shipArr from 'components/PieceDisplay/shipArr';
import shipCheck from './shipCheck';
import newBoard from './newBoard';
import changeComputerBoard from './changeComputerBoard';
import attack from './attack';

export default function Game() {
  const [boards, setBoards] = useState({
    playerBoard: createBlankBoard(),
    computerBoard: createBlankBoard(),
  });

  const [direction, setDirection] = useState('right');

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [shipInfo, setShipInfo] = useState([
    { name: 'L', isSet: false, isDead: false },
    { name: 'M1', isSet: false, isDead: false },
    { name: 'M2', isSet: false, isDead: false },
    { name: 'S1', isSet: false, isDead: false },
    { name: 'S2', isSet: false, isDead: false },
  ]);

  function placePiece(event) {
    let length;
    const targetID = event.target.id;

    shipArr.map((thing) => {
      if (thing.name === selectedPiece) length = thing.size;
    });

    if (!placementCheck(selectedPiece, event.target.id, direction, length)) {
      return;
    }
    if (!shipCheck(event.target.id, direction, boards.playerBoard, length)) {
      return;
    }

    const copyBoard = boards.playerBoard.slice();
    const newNew = newBoard(
      selectedPiece,
      targetID,
      direction,
      copyBoard,
      length
    );
    setBoards({ playerBoard: newNew, computerBoard: boards.computerBoard });

    const copyInfo = shipInfo.slice();
    let newShipInfo = copyInfo.map((thing) => {
      if (thing.name === selectedPiece) return { ...thing, isSet: true };
      else return thing;
    });
    setShipInfo(newShipInfo);

    setSelectedPiece(null);
    // console.log(shipInfo);
  }

  useEffect(() => {
    if (shipInfo.filter((input) => input.isSet).length === 5) {
      setGameStarted(true);
      // console.log('started');
    }
  }, [shipInfo]);

  useEffect(() => {
    if (gameStarted)
      setBoards({
        playerBoard: boards.playerBoard,
        computerBoard: changeComputerBoard(boards.computerBoard),
      });
  }, [gameStarted]);

  return (
    <div data-testid="Game">
      <Board
        theBoardArr={boards.playerBoard}
        handleClick={placePiece}
        gameStarted={gameStarted}
      />
      <Board
        theBoardArr={boards.computerBoard}
        gameStarted={gameStarted}
        computerBoard={true}
        handleClick={() => console.log('hello')}
      />
      <div className="row">
        <PieceDisplay
          shipInfo={shipInfo}
          gameStarted={gameStarted}
          setSelectedPiece={setSelectedPiece}
          direction={direction}
        />
        <ButtonBox setDirection={setDirection} direction={direction} />
      </div>
    </div>
  );
}
