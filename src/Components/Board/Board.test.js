import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

test('loads', () => {
  const { getByTestId } = render(<Board />);
  getByTestId('Board');
});
