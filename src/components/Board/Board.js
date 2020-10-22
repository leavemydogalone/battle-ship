import React, { useState, useEffect } from 'react';
import Square from 'components/Square/Square.js';

export default function Board({
  theBoardArr,
  handleClick,
  gameStarted,
  computerBoard,
}) {
  let display = computerBoard
    ? theBoardArr.map((thing) => (
        <Square
          key={thing.id}
          id={thing.id}
          text={thing.ship}
          handleClick={handleClick}
          isHit={thing.isHit}
          gameStarted={gameStarted}
          board={'enemy'}
        />
      ))
    : theBoardArr.map((thing) => (
        <Square
          key={thing.id}
          id={thing.id}
          text={thing.ship}
          handleClick={handleClick}
          isHit={thing.isHit}
          gameStarted={gameStarted}
          board={'player'}
        />
      ));

  return (
    <div className="board" data-testid="Board">
      {display}
    </div>
  );
}
