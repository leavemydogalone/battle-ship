export default function newBoard(
  selected,
  target,
  direction,
  boardArray,
  length
) {
  // target is the numbered id of the box you click
  let theTarget = parseInt(target);
  let downTargets = [];

  // downtargets are the boxes in a line down from the target. length is length of the ship
  for (let i = 0; i < length; i++) {
    downTargets.push(i * 10 + theTarget);
  }
  let newNew;
  // this determines the direction and makes newArr equal to the new board array
  if (direction === 'right')
    newNew = boardArray.map((thing) => {
      if (thing.id >= theTarget && thing.id < theTarget + length) {
        return { ...thing, ship: selected };
      } else return thing;
    });
  else
    newNew = boardArray.map((thing) => {
      if (downTargets.includes(thing.id)) return { ...thing, ship: selected };
      else return thing;
    });
  // console.log(newNew);
  return newNew;
}
