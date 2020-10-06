import placementCheck from './placementCheck';
describe('target parameter', () => {
  test('should work', () => {
    expect(placementCheck('S1', 5, 'right')).toBeTruthy();
  });
  test('should not work', () => {
    expect(placementCheck('S1', 9, 'right')).toBeFalsy();
  });
});

describe('piece parameter', () => {
  test('should work', () => {
    expect(placementCheck('S1', 5, 'right')).toBeTruthy();
  });
  test('should not work', () => {
    expect(placementCheck('S3', 5, 'right')).toBeFalsy();
  });
});

describe('direction param', () => {
  test('should work right', () => {
    expect(placementCheck('S1', 5, 'right')).toBeTruthy();
  });
  test('should work with down', () => {
    expect(placementCheck('L', 5, 'down')).toBeTruthy();
  });
  test('should not work', () => {
    expect(placementCheck('L', 88, 'down')).toBeFalsy();
    expect(placementCheck('L', 88, 'right')).toBeFalsy();
  });
});
