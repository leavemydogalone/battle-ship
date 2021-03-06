import React, { useEffect, useState } from 'react';
import Board from 'components/Board/Board.js';
import PieceDisplay from 'components/PieceDisplay/PieceDisplay.js';
import ButtonBox from 'components/ButtonBox/ButtonBox.js';
import placementCheck from './placementCheck';
import createBlankBoard from './boardArray';
import createShipInfo from './createShipinfo';
import shipArr from 'components/PieceDisplay/shipArr';
import shipCheck from './shipCheck';
import newBoard from './newBoard';
import changeComputerBoard from './changeComputerBoard';
import attack from './attack';
import makeShipDeadArray from './makeDead';
import checkDeath from './checkDeath';
import checkWin from './checkWin';

export default function Game() {
  const [direction, setDirection] = useState('right');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [shipInfo, setShipInfo] = useState(createShipInfo());
  const [enemyShipInfo, setEnemyShipInfo] = useState(createShipInfo());
  const [boards, setBoards] = useState({
    playerBoard: createBlankBoard(),
    computerBoard: createBlankBoard(),
  });
  const [playerTurn, setPlayerTurn] = useState(true);

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
  }

  // logic for clicking a square on the board, attacking that spot
  function attackSquare(
    target,
    targetBoard,
    setTargetShipInfo,
    targetShipInfo
  ) {
    const newBoard = attack(targetBoard, target);
    setBoards({ ...boards, targetBoard: newBoard });

    if (checkDeath(targetBoard, shipArr, target))
      setTargetShipInfo(makeShipDeadArray(targetBoard, targetShipInfo, target));
    setPlayerTurn(false);
  }

  // checks to see if all of the pieces are placed and starts the game
  useEffect(() => {
    if (shipInfo.filter((input) => input.isSet).length === 5) {
      setGameStarted(true);
    }
  }, [shipInfo]);

  // setting up the enemy board and piecedisplay after the game has started
  useEffect(() => {
    if (gameStarted) {
      setBoards({
        playerBoard: boards.playerBoard,
        computerBoard: changeComputerBoard(boards.computerBoard),
      });
      let newEnShIn = enemyShipInfo
        .slice()
        .map((thing) => ({ ...thing, isSet: true }));
      setEnemyShipInfo(newEnShIn);
    }
  }, [gameStarted]);

  // enemy attacks after player attacks
  useEffect(() => {
    if (!playerTurn) {
      attackSquare(
        Math.floor(Math.random() * Math.floor(100)),
        boards.playerBoard,
        setShipInfo,
        shipInfo
      );
      setPlayerTurn(true);
    }
  }, [playerTurn]);

  useEffect(() => {
    if (checkWin(shipInfo) || checkWin(enemyShipInfo)) {
      setGameOver(true);
      console.log('game over');
    }
  }, [playerTurn]);

  function reset() {
    setBoards({
      playerBoard: createBlankBoard(),
      computerBoard: createBlankBoard(),
    });
    setShipInfo(createShipInfo);
    setEnemyShipInfo(createShipInfo);
    setSelectedPiece(null);
    setGameStarted(false);
  }

  return (
    <div data-testid="Game" className="gameContainer">
      <div className="boardRow">
        <Board
          theBoardArr={boards.playerBoard}
          handleClick={placePiece}
          gameStarted={gameStarted}
        />
        <Board
          theBoardArr={boards.computerBoard}
          gameStarted={gameStarted}
          computerBoard={true}
          handleClick={(event) => {
            attackSquare(
              event.target.id,
              boards.computerBoard,
              setEnemyShipInfo,
              enemyShipInfo
            );
          }}
        />
      </div>

      <div className="row">
        <PieceDisplay
          shipInfo={shipInfo}
          gameStarted={gameStarted}
          handleClick={(event) => setSelectedPiece(event.target.id)}
          direction={direction}
        />
        <ButtonBox
          setDirection={setDirection}
          direction={direction}
          gameStarted={gameStarted}
          reset={reset}
          gameOver={gameOver}
        />
        <PieceDisplay
          shipInfo={enemyShipInfo}
          gameStarted={gameStarted}
          direction={'right'}
          handleClick={null}
        />
      </div>
    </div>
  );
}
