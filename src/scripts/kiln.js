//act as a kiln
// paramaters:
// An object representing a piece of pottery that was made at the wheel in the makePottery function.
// A number specifying the firing temperature of the kiln.


export const firePottery = (potteryPiece, temperatureofKiln,) => {
  if (temperatureofKiln > 2200) {
    potteryPiece.cracked = true;
  } else {
    potteryPiece.cracked = false;
  }
  return potteryPiece;
}
