import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';
import createBoard from './boardArray';

describe('boardArr', () => {
  it('Should have length 100', () => {
    expect(createBoard.boardArr).toHaveLength(100);
  });
});
test('loads', () => {
  const { getByTestId } = render(<Board />);
  getByTestId('Board');
});

// test('should have 100 squares', () => {
//   const {getByTestId} = render(<Board/>) {
//   expect(getByTestId('Board')).to

// });
