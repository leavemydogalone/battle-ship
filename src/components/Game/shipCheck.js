export default function shipCheck(target, direction, theArray, length) {
  let result = false;
  let targetNumber = parseInt(target);

  if (direction === 'right') {
    function findContenders(thing) {
      return thing.id >= targetNumber && thing.id < targetNumber + length;
    }
    let theContenders = theArray.filter(findContenders);
    if (theContenders.filter((thing) => thing.ship).length === 0) result = true;
  }

  if (direction === 'down') {
    let downTheLine = [];
    let theContenders = [];
    for (let i = 1; i < length; i++) {
      downTheLine.push(i * 10);
    }
    downTheLine.forEach((number) => {
      function findContender(arrayThing) {
        return arrayThing.id === targetNumber + number;
      }

      theContenders = [...theContenders, ...theArray.filter(findContender)];
    });

    if (theContenders.filter((thing) => thing.ship).length === 0) result = true;
  }
  return result;
}
