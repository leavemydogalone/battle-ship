import React from 'react';
import { render } from '@testing-library/react';
import PieceDisplay from './PieceDisplay';

const piecesAreSet = ['no', 'no', 'no', 'no', 'no'];
const setPiecesAreSet = jest.fn();
const gameStarted = false;
const setSelectedPiece = jest.fn();
const direction = 'right';

test('should load', () => {
  const { getByTestId } = render(
    <PieceDisplay
      piecesAreSet={piecesAreSet}
      setPiecesAreSet={setPiecesAreSet}
      gameStarted={gameStarted}
      setSelectedPiece={setSelectedPiece}
      direction={direction}
    />
  );
  getByTestId('PieceDisplay');
});
