export default function attack(boardArray, target) {
  let newArray = boardArray.slice();
  const theTarget = newArray[parseInt(target)];
  theTarget.isHit = true;
  return newArray;
}
