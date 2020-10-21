import React from 'react';
import { render } from '@testing-library/react';
import PieceDisplay from './PieceDisplay';

const shipInfo = [
  { name: 'L', isSet: false, isDead: false },
  { name: 'M1', isSet: false, isDead: false },
  { name: 'M2', isSet: false, isDead: false },
  { name: 'S1', isSet: false, isDead: false },
  { name: 'S2', isSet: false, isDead: false },
];
const gameStarted = false;
const setSelectedPiece = jest.fn();
const direction = 'right';

test('should load', () => {
  const { getByTestId } = render(
    <PieceDisplay
      shipInfo={shipInfo}
      gameStarted={gameStarted}
      setSelectedPiece={setSelectedPiece}
      direction={direction}
    />
  );
  getByTestId('PieceDisplay');
});
