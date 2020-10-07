// function placePiece(event) {
//   if (placementCheck(selectedPiece, event.target.id, direction) === false) {
//     console.log(typeof event.target.id);
//     return;
//   }
//   let length;
//   shipArr.map((thing) => {
//     if (thing.name === selectedPiece) length = thing.size;
//   });
//   console.log(length);
//   setPlayerBoard((prevState) => {
//     prevState.map((thing) => {
//       if (thing.id === parseInt(event.target.id)) {
//         thing.ship = selectedPiece;
//       }
//       for (let i = 0; i < length; i++) {
//         if (thing.id + i === event.target.id + i) {
//           thing.ship = selectedPiece;
//         }
//       }
//     });
//   });
//   console.log(playerBoard);
// }
