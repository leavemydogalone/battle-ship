import React, { useState, useEffect } from 'react';

import PieceSquare from 'components/PieceSquare/PieceSquare.js';

export default function Ship() {
  return (
    <div data-testid="Ship">
      <PieceSquare />
    </div>
  );
}
