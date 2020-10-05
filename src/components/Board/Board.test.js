import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';
import createBoard from './boardArray';

describe('boardArr', () => {
  it('Should have length 100', () => {
    expect(createBoard.boardArr).toHaveLength(100);
  });
  it('all should have ids', () => {
    expect(createBoard.boardArr[5]).toMatchObject({ id: 5 });
    expect(createBoard.boardArr[99]).toMatchObject({ id: 99 });
  });
});

test('loads', () => {
  const { getByTestId } = render(<Board />);
  getByTestId('Board');
});

test('should have 100 squares', () => {
  const { getAllByTestId } = render(<Board />);
  expect(getAllByTestId('Square')).toHaveLength(100);
});
