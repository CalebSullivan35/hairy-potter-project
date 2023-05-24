// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from  "./kiln.js"




// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug',2,5)
console.log(mug);
let plate = makePottery('plate', 4, 1)
console.log(plate)
let fork = makePottery('plate', 4, 1)
console.log(fork)
let pot = makePottery('plate', 4, 1)
console.log(pot)
let turtle = makePottery('plate', 4, 1)
console.log(turtle)
// Fire each piece of pottery in the kiln
firePottery(mug,4214);
firePottery(plate, 12412);
firePottery(fork, 1809);
firePottery(pot, 1900);
firePottery(turtle, 1252);


console.log(mug, plate, fork, pot, turtle)



// Determine which ones should be sold, and their price




// Invoke the component function that renders the HTML list
