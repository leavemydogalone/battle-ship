import React from 'react';
import { render } from '@testing-library/react';
import Square from './Square';

test('it loads', () => {
  const { getByText } = render(<Square />);
  getByText('Square');
});
