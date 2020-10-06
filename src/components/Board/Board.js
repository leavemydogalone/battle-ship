import React, { useState } from 'react';
import Square from 'components/Square/Square.js';

export default function Board({ boardArr }) {
  // console.log(board);

  let display = boardArr.map((thing) => (
    <Square key={thing.id} id={thing.id} />
  ));

  return (
    <div className="board" data-testid="Board">
      {display}
    </div>
  );
}
