import placementCheck from './placementCheck';
describe('target parameter', () => {
  test('should work', () => {
    expect(placementCheck('S1', 5, 'right', 4)).toBeTruthy();
  });
  test('should not work', () => {
    expect(placementCheck('S1', 9, 'right', 4)).toBeFalsy();
  });
});

describe('piece parameter', () => {
  test('should work', () => {
    expect(placementCheck('S1', 5, 'right', 4)).toBeTruthy();
  });
  test('should not work', () => {
    expect(placementCheck('S3', 5, 'right', 4)).toBeFalsy();
  });
});

describe('direction param', () => {
  test('should work right', () => {
    expect(placementCheck('S1', 5, 'right', 4)).toBeTruthy();
  });
  test('should work with down', () => {
    expect(placementCheck('L', 5, 'down', 4)).toBeTruthy();
  });
  test('should not work', () => {
    expect(placementCheck('L', 88, 'down', 4)).toBeFalsy();
    expect(placementCheck('L', 88, 'right', 4)).toBeFalsy();
  });
});
