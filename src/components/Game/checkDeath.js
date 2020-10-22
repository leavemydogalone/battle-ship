export default function checkDeath(boardArr, shipArr, target) {
  const theTarget = parseInt(target);
  const theShipName = boardArr[theTarget].ship;
  let lengthOfShip;
  let isDead = false;
  let numberOfDead = 0;

  if (theShipName) {
    // gets the length of the ship
    shipArr.map((thing) => {
      if (theShipName === thing.name) lengthOfShip = thing.size;
    });
    numberOfDead = boardArr.filter((thing) => {
      return thing.ship == theShipName;
    }).length;
    if (lengthOfShip === numberOfDead) isDead = true;
  }
  return isDead;
}
