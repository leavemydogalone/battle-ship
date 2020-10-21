const createBlankBoard = () => {
  const board = [];
  for (let i = 0; i < 100; i++) {
    board.push({ id: i, isHit: false, ship: null });
  }
  return board;
};

export default createBlankBoard;
