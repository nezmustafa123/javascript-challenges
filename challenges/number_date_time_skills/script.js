//NUMBERS all numbers represented as floating point always


console.log(23 === 23.0);
//true
//64 base 2 format 0 and 1

//base 10 - 0 to 9  1/10 = 0.1 3/10 = -.3333333333
//binary base 2 - 0 1

console.log(0.1 + 0.2);
//0.3000000000000004
//hard to represent 0.1 in binary will cause errors
console.log(0.1 + 0.2 === 0.3);
//false

console.log(Number('23'));
console.log(+'23');
//type coercion addition