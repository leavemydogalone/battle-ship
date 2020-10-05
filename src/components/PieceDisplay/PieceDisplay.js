import React, { useState, useEffect } from 'react';
import Ship from 'components/Ship/Ship.js';

export default function PieceDisplay() {
  return (
    <div className="pieceDisplay" data-testid="PieceDisplay">
      <Ship />
    </div>
  );
}
