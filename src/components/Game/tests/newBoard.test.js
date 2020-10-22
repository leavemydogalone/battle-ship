import newBoard from '../newBoard';
import createBlankBoard from '../boardArray';

test('should return true', () => {
  expect(newBoard('L', '4', 'right', createBlankBoard(), 4)).toBeTruthy();
});

// test.todo('just want to see the output', () => {
//   let boardArr = [];
//   for (let i = 0; i < 100; i++) {
//     boardArr.push({ id: i, isHit: false, ship: undefined });
//   }
//   expect(newBoard('L', '4', 'right', boardArr, 4)).toBe(7);
// });
