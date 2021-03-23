const bill = 275;
//is bill equal to or below 300 and bill greater than or equal to 5- then tip is 15% if not tip is 20%
//have to put operator comparing bill value to larger number first
const tip =  bill <= 300 && bill >= 50  ? (bill * 0.15) : (bill * 0.2);

console.log(`bill is ${bill} the tip is ${bill + tip} and the total is ${bill + tip}`);