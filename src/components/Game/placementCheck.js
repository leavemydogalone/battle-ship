export default function placementCheck(selection, target, direction) {
  let result = false;
  if (direction === 'right') {
    if (selection === 'L') {
      let startOfShip = target.toString().substr(-1);
      if (startOfShip >= 0 && startOfShip <= 6) {
        result = true;
      }
    }
    if (selection === 'M1' || selection === 'M2') {
      let startOfShip = target.toString().substr(-1);
      if (startOfShip >= 0 && startOfShip <= 7) {
        result = true;
      }
    }
    if (selection === 'S1' || selection === 'S2') {
      let startOfShip = target.toString().substr(-1);
      if (startOfShip >= 0 && startOfShip <= 8) {
        result = true;
      }
    }
  }
  if (direction === 'down') {
    if (selection === 'L') {
      let endOfShip = target + 30;
      if (endOfShip < 99) {
        result = true;
      }
    }
    if (selection === 'M1' || selection === 'M2') {
      let endOfShip = target + 20;
      if (endOfShip < 99) {
        result = true;
      }
    }
    if (selection === 'S1' || selection === 'S2') {
      let endOfShip = target + 10;
      if (endOfShip < 99) {
        result = true;
      }
    }
  }

  return result;
}
