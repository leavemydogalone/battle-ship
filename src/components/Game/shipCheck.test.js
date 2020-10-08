import shipCheck from './shipCheck';

describe('new array', () => {
  let boardArr = [];
  for (let i = 0; i < 100; i++) {
    boardArr.push({ id: i, isHit: false, ship: false });
  }
  test('should be truthy with new array', () => {
    expect(shipCheck('5', 'down', boardArr, 4)).toBeTruthy();
    expect(shipCheck('4', 'right', boardArr, 3)).toBeTruthy();
  });
});

describe(' array full of ships', () => {
  let boardArr = [];
  for (let i = 0; i < 100; i++) {
    boardArr.push({ id: i, isHit: false, ship: 'M' });
  }
  test('should fail right', () => {
    expect(shipCheck('4', 'right', boardArr, 3)).toBeFalsy();
  });
  test('should fail down', () => {
    expect(shipCheck('5', 'down', boardArr, 4)).toBeFalsy();
  });
});

describe('with just one ship in the way', () => {
  let boardArr = [];
  for (let i = 0; i < 100; i++) {
    boardArr.push({ id: i, isHit: false, ship: false });
  }
  boardArr[15].ship = 'M';
  test('should fail right', () => {
    expect(shipCheck('14', 'right', boardArr, 3)).toBeFalsy();
  });
});
