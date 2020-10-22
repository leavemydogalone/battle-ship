import placementCheck from './placementCheck';
import shipCheck from './shipCheck';
import newBoard from './newBoard';
import shipArr from 'components/PieceDisplay/shipArr';

export default function changeComputerBoard(computerBoard) {
  let arrList = shipArr.slice();
  const randomNumber = (x) => Math.floor(Math.random() * Math.floor(x));
  let copyBoard = computerBoard.slice();
  let otherNew;

  do {
    arrList.forEach((thing, index) => {
      let target = randomNumber(100);
      let direction = randomNumber(2) === 0 ? 'right' : 'down';

      if (!placementCheck(thing.name, target, direction, thing.size)) return;
      if (!shipCheck(target, direction, copyBoard, thing.size)) return;

      const newArr = newBoard(
        thing.name,
        target,
        direction,
        copyBoard,
        thing.size
      );
      arrList.splice(index, 1);
      otherNew = newArr.slice();
      copyBoard = otherNew.slice();
    });
  } while (arrList[0]);
  return otherNew;
}
