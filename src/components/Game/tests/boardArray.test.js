import createBlankBoard from '../boardArray';

describe('boardArr', () => {
  it('Should have length 100', () => {
    expect(createBlankBoard()).toHaveLength(100);
  });
  it('all should have ids', () => {
    expect(createBlankBoard()[5]).toMatchObject({ id: 5 });
    expect(createBlankBoard()[99]).toMatchObject({ id: 99 });
  });
});
