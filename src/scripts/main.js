// Imports go first
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { potteryList } from "./PotteryList.js";
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from  "./kiln.js"




// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug',2,5)
console.log(mug);
let plate = makePottery('plate', 7, 6)
console.log(plate)
let fork = makePottery('fork', 3, 2)
console.log(fork)
let pot = makePottery('pot', 9, 5)
console.log(pot)
let turtle = makePottery('turtle', 6, 3)
console.log(turtle)
// Fire each piece of pottery in the kiln
firePottery(mug,4214);
firePottery(plate, 12412);
firePottery(fork, 1809);
firePottery(pot, 1900);
firePottery(turtle, 1252);






// Determine which ones should be sold, and their price
toSellOrNotToSell(mug);
toSellOrNotToSell(plate);
toSellOrNotToSell(fork);
toSellOrNotToSell(pot);
toSellOrNotToSell(turtle);




const potteryToSell = usePottery();
console.log(potteryToSell);



// Invoke the component function that renders the HTML list

const parentHTMLElement = document.querySelector(".potteryList");
parentHTMLElement.innerHTML = potteryList(potteryToSell);