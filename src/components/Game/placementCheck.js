export default function placementCheck(selection, target, direction, length) {
  const correctSelection = ['L', 'M1', 'M2', 'S1', 'S2'];
  if (correctSelection.indexOf(selection) === -1) return;
  let result = false;

  if (direction === 'right') {
    let startOfShip = parseInt(target.toString().substr(-1));
    let shipEnd = parseInt(target.toString().substr(-1)) + length;
    if (startOfShip >= 0 && shipEnd < 10) result = true;
  }

  if (direction === 'down') {
    let endOfShip = parseInt(target) + (length - 1) * 10;
    if (parseInt(target) >= 0 && endOfShip < 100) result = true;
  }

  return result;
}
