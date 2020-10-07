import React from 'react';
import Ship from './Ship';
import { render, fireEvent } from '@testing-library/react';

test('should load', () => {
  const { getByTestId } = render(<Ship />);
  getByTestId('Ship');
});

test('should render correct number of squares', () => {
  const { getAllByTestId } = render(<Ship size={4} />);
  expect(getAllByTestId('PieceSquare')).toHaveLength(4);
});

// describe.('onClick', () => {
//   test('should click', () => {
//     const handleClick = jest.fn();
//     const { getAllByTestId } = render(<Ship size={4} onClick={handleClick} />);

//     fireEvent.click(getAllByTestId('PieceSquare')[0]);

//     expect(handleClick.mock.calls.length).toBe(1);
//   });
// });
