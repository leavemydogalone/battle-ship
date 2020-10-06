import React from 'react';
import { render } from '@testing-library/react';
import PieceSquare from './PieceSquare';

test('should render', () => {
  const { getByTestId } = render(<PieceSquare />);
  getByTestId('PieceSquare');
});

describe('should render correct direction', () => {
  test('block', () => {
    const { getByTestId } = render(<PieceSquare direction="down" />);
    expect(getByTestId('PieceSquare')).toMatchInlineSnapshot(`
      <div
        class="pieceSquare"
        data-testid="PieceSquare"
        style="background-color: blue; display: block;"
      />
    `);
  });
  test('inline', () => {
    const { getByTestId } = render(<PieceSquare direction="right" />);
    expect(getByTestId('PieceSquare')).toMatchInlineSnapshot(`
      <div
        class="pieceSquare"
        data-testid="PieceSquare"
        style="background-color: blue; display: inline-block;"
      />
    `);
  });
});
