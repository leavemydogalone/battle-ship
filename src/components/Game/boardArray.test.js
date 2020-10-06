import createBoard from './boardArray';

describe('boardArr', () => {
  it('Should have length 100', () => {
    expect(createBoard.boardArr).toHaveLength(100);
  });
  it('all should have ids', () => {
    expect(createBoard.boardArr[5]).toMatchObject({ id: 5 });
    expect(createBoard.boardArr[99]).toMatchObject({ id: 99 });
  });
});
