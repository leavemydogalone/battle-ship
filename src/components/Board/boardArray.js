const createBoard = (() => {
  let boardArr = [];

  for (let i = 0; i < 100; i++) {
    boardArr.push({ id: i });
  }
  return { boardArr };
})();

export default createBoard;
