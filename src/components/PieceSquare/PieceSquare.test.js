import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import PieceSquare from './PieceSquare';

test('should render', () => {
  const { getByTestId } = render(<PieceSquare />);
  getByTestId('PieceSquare');
});
