import React from 'react';
import Ship from './Ship';
import { render } from '@testing-library/react';

test('should load', () => {
  const { getByTestId } = render(<Ship />);
  getByTestId('Ship');
});
