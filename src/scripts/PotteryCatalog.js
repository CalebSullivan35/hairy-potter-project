let potteryToBeSold = [];


// function responisble if a piece of pottery needs to be sold or not
export const toSellOrNotToSell = (potteryObject) => {
  if (potteryObject.cracked === true) {
    return;
  } else if (potteryObject.weight >= 6) {
    potteryObject.price = 40;
    potteryToBeSold.push(potteryObject);
  }
  else {
    potteryObject.price = 20;
    potteryToBeSold.push(potteryObject);
    }
}

export const usePottery = () => {
  return potteryToBeSold;
}