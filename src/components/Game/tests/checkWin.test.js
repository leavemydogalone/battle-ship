import checkWin from '../checkWin';
const allAlive = [
  { name: 'L', isSet: false, isDead: false },
  { name: 'M1', isSet: false, isDead: false },
  { name: 'M2', isSet: false, isDead: false },
  { name: 'S1', isSet: false, isDead: false },
  { name: 'S2', isSet: false, isDead: false },
];

const allDead = [
  { name: 'L', isSet: false, isDead: true },
  { name: 'M1', isSet: false, isDead: true },
  { name: 'M2', isSet: false, isDead: true },
  { name: 'S1', isSet: false, isDead: true },
  { name: 'S2', isSet: false, isDead: true },
];

const someDead = [
  { name: 'L', isSet: false, isDead: false },
  { name: 'M1', isSet: false, isDead: true },
  { name: 'M2', isSet: false, isDead: false },
  { name: 'S1', isSet: false, isDead: true },
  { name: 'S2', isSet: false, isDead: false },
];

test('should return true if all dead', () => {
  expect(checkWin(allDead)).toBeTruthy();
});

test('should return false if none dead', () => {
  expect(checkWin(allAlive)).toBeFalsy();
});
test('should return false if some dead', () => {
  expect(checkWin(someDead)).toBeFalsy();
});
