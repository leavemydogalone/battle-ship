import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

const playerBoard = [{ id: 0 }, { id: 1 }];
const func = jest.fn();
test('loads', () => {
  const { getByTestId } = render(
    <Board
      theBoardArr={playerBoard}
      gameStarted={false}
      handleClick={() => func}
    />
  );
  getByTestId('Board');
});

test('should have 100 squares', () => {
  const { getAllByTestId } = render(
    <Board
      theBoardArr={playerBoard}
      gameStarted={false}
      handleClick={() => func()}
    />
  );
  expect(getAllByTestId('Square')).toHaveLength(2);
});
