import makeDead from '../makeDead';
import createBlankBoard from '../boardArray';
let shipInfo = [
  { name: 'L', isSet: false, isDead: false },
  { name: 'M1', isSet: false, isDead: false },
  { name: 'M2', isSet: false, isDead: false },
  { name: 'S1', isSet: false, isDead: false },
  { name: 'S2', isSet: false, isDead: false },
];
const selected = 'L';
let newB = createBlankBoard();
newB[0].ship = 'L';
test('make it dead', () => {
  expect(makeDead(newB, shipInfo, 0)[0]).toMatchObject({
    name: 'L',
    isSet: false,
    isDead: true,
  });
});
