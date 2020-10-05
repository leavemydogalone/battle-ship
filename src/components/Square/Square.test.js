import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Square from './Square';

test('it loads', () => {
  const { getByTestId } = render(<Square />);
  getByTestId('Square');
});

test('should match snapshot ', () => {
  const { getByTestId } = render(<Square />);
  expect(getByTestId('Square')).toMatchSnapshot();
});

describe('click', () => {
  test('should turn red', () => {
    const { getByTestId } = render(<Square />);
    fireEvent.click(getByTestId('Square'));
    expect(getByTestId('Square')).toMatchInlineSnapshot(`
      <div
        class="Square"
        data-testid="Square"
        style="background-color: grey;"
      />
    `);
  });
});
