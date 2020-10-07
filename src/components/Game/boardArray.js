const createBoard = (() => {
  let boardArr = [];

  for (let i = 0; i < 100; i++) {
    boardArr.push({ id: i, isHit: false, ship: null });
  }
  return { boardArr };
})();

export default createBoard;
