import React from 'react';
import Ship from 'components/Ship/Ship.js';
import shipArr from './shipArr';

export default function PieceDisplay({
  piecesAreSet,
  setPiecesAreSet,
  gameStarted,
  setSelectedPiece,
  direction,
}) {
  // function selectPiece(event) {
  //   console.log(event.target.name);
  //   setSelectedPiece(event.target.name);
  // }
  function selectPiece(event) {
    setSelectedPiece(event.target.id);
    console.log(event.target.id);
  }
  const ships = shipArr.map((thing, index) => (
    <Ship
      size={thing.size}
      name={thing.name}
      direction={direction}
      isSet={piecesAreSet[index]}
      handleClick={selectPiece}
      key={index}
    />
  ));
  return (
    <div className="pieceDisplay" data-testid="PieceDisplay">
      {ships}
      {/* <Ship
        size={4}
        name="L"
        direction={direction}
        isSet={piecesAreSet[0]}
        handleClick={selectPiece}
      />
      <Ship
        size={3}
        name="M1"
        direction={direction}
        isSet={piecesAreSet[1]}
        handleClick={gameStarted ? console.log('not yet') : selectPiece}
      />
      <Ship
        size={3}
        name="M2"
        direction={direction}
        isSet={piecesAreSet[2]}
        handleClick={gameStarted ? console.log('not yet') : selectPiece}
      />
      <Ship
        size={2}
        name="S1"
        direction={direction}
        isSet={piecesAreSet[3]}
        handleClick={gameStarted ? console.log('not yet') : selectPiece}
      />
      <Ship
        size={2}
        name="S2"
        direction={direction}
        isSet={piecesAreSet[4]}
        handleClick={gameStarted ? console.log('not yet') : selectPiece}
      /> */}
    </div>
  );
}
