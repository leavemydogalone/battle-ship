import React from 'react';
import { render } from '@testing-library/react';
import PieceDisplay from './PieceDisplay';

test('should load', () => {
  const { getByTestId } = render(<PieceDisplay />);
  getByTestId('PieceDisplay');
});
