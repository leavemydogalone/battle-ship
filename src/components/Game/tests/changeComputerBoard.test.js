import changeComputerBoard from '../changeComputerBoard';
import createBlankBoard from '../boardArray';

test('should return thing', () => {
  expect(changeComputerBoard(createBlankBoard())).toBeTruthy();
});
