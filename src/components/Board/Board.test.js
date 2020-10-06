import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

const playerBoard = [{ id: 0 }, { id: 1 }];
test('loads', () => {
  const { getByTestId } = render(<Board boardArr={playerBoard} />);
  getByTestId('Board');
});

test('should have 100 squares', () => {
  const { getAllByTestId } = render(<Board boardArr={playerBoard} />);
  expect(getAllByTestId('Square')).toHaveLength(2);
});
