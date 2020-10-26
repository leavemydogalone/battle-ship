import checkDeath from '../checkDeath';
import createBlankBoard from '../boardArray';
import shipArr from 'components/PieceDisplay/shipArr';
// needs to check if the hit was a ship and send the appropriate info to both
// what keeps track of the dead ships and the square to show a hitt
const theBoard = createBlankBoard();

test('should be falsy if no ship', () => {
  expect(checkDeath(theBoard, shipArr, '7')).toBeFalsy();
});

test('should be true if L ship has 4 dead', () => {
  let newB = theBoard.slice();
  newB[5].ship = 'L';
  newB[6].ship = 'L';
  newB[7].ship = 'L';
  newB[8].ship = 'L';
  expect(checkDeath(newB, shipArr, '7')).toBeTruthy();
  newB = null;
});

test.only('should be true if L ship has 4 dead', () => {
  let newB = theBoard.slice();
  newB[5].ship = 'L';

  expect(checkDeath(newB, shipArr, '5')).toBeFalsy();
});
