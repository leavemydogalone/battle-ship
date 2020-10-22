export default function makeShipDeadArray(boardArr, shipInfo, target) {
  const theTarget = parseInt(target);
  const theShipName = boardArr[theTarget].ship;
  let newInfo = shipInfo.slice();
  newInfo.map((thing) =>
    thing.name === theShipName ? (thing.isDead = true) : null
  );
  return newInfo;
}
