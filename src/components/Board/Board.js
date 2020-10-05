import React, { useEffect, useState } from 'react';
import Square from 'components/Square/Square.js';
import createBoard from './boardArray';

export default function Board() {
  const [board, setBoard] = useState(createBoard.boardArr);
  // console.log(board);

  let display = board.map((thing) => <Square key={thing.id} />);

  return (
    <div className="board" data-testid="Board">
      {display}
    </div>
  );
}
