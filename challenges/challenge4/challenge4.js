const bill = 275;

const tip =  bill <= 300 && bill >= 50  ? (bill * 0.15) : (bill * 0.2);

console.log(`bill is ${bill} the tip is ${bill + tip} and the total is ${bill + tip}`);