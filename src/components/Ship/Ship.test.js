import React from 'react';
import Ship from './Ship';
import { render } from '@testing-library/react';

test('should load', () => {
  const { getByTestId } = render(<Ship />);
  getByTestId('Ship');
});

test('should render correct number of squares', () => {
  const { getAllByTestId } = render(<Ship size={4} />);
  expect(getAllByTestId('PieceSquare')).toHaveLength(4);
});
