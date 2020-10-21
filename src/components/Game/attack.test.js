import attack from './attack';
import createBlankBoard from './boardArray';

test('makes ship isHit = true', () => {
  let newBoard = createBlankBoard();
  newBoard[7].ship = 'L';
  expect(attack(newBoard, '7')[7]).toMatchObject({
    id: 7,
    isHit: true,
    ship: 'L',
  });
});
