export default function checkWin(shipInfo) {
  let response = false;
  if (shipInfo.findIndex((thing) => thing.isDead === false)) response = true;
  return response;
}
