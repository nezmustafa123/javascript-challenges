//NUMBERS all numbers represented as floating point always


console.log(23 === 23.0);
//true
//64 base 2 format 0 and 1

//base 10 - 0 to 9  1/10 = 0.1 3/10 = -.3333333333
//binary base 2 - 0 1
//binary can't represent 0,1

console.log(0.1 + 0.2);
//0.3000000000000004
//hard to represent 0.1 in binary will cause errors
console.log(0.1 + 0.2 === 0.3);
//false

console.log(Number('23'));
console.log(+'23');
//type coercion addition trick make look cleaner


//parse number from string

console.log(Number.parseInt('30px', 10));
//number is function/object has method on it
//remove the px at the end has to start with a number
//have to pass in the base aswell
console.log(Number.parseInt('e23', 10));
//wont work

//parseFloat for floating points

console.log(Number.parseInt('  2.5rem  ')); //only integer 2
console.log(Number.parseFloat(' 2.5rem '));// parse the decimal/floating number
//will give the decimal number from the string
//white space doesn't affect it

console.log(parseInt(' 2.5rem '));//call it on the number object
//also a global function

console.log(Number.isNaN(20));
//is not a number? false
//name space function
console.log(Number.isNaN('20'));
//false

console.log(Number.isNaN(+'20X'));
//true this isn't a number

console.log(Number.isNaN(23/0));
//infinity still a number 

//use isFinite to condifer infinity
//check if value is a number not a string
console.log(Number.isFinite(20));//true
console.log(Number.isFinite('20'));//false
console.log(Number.isFinite(+'20X'))
console.log(Number.isFinite(23/ 0)); //false

//is integer check
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23/6)); //false




//MATHS and rounding

console.log(Math.sqrt(25));
//5 square

console.log(25 ** (1/2));
//25 to the power of 1/2

console.log(8 ** (1/3));

console.log(Math.max(5,,18,23,11,2)); //23
console.log(Math.max(5,18,'23',11,2)); //23
console.log(Math.max(5,18,'23px', 11, 2)); //NAN


console.log(Math.min(5,18,23,11,2));


console.log(Math.PI * Number.parseFloat('10px') ** 2);

//random dice roll calculation math.random 0-1 * 6 remove decimal part
console.log(Math.trunc(Math.random() * 6) + 1);
//add one at the end 1 to 6

//generalise the formula to generate random integers between two values

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
//x math.random * (max - min) then add min to both sides
//math.random 0....1 -> 0...(max-min) -> min...(max-min + min)
//cancel (-min + min)
//min...
console.log(randomInt(10, 20));



//Rounding integers

console.log(Math.trunc(23.3));//23

console.log(Math.round(25.4));//25
console.log(Math.round(56.3));//56

console.log(Math.ceil(12.2));//12
console.log(Math.ceil(95.3));//96

console.log(Math.floor(23.4)); //23
console.log(Math.floor('34.5'))// 34 DOES TYPE COOERCION

//with negative numbers rounding works otherway around
console.log(Math.trunc(-23.3));//-23
console.log(Math.floor(-23.3));//-24
//floor works with negative too


//rounding decimials 

console.log((2.7).toFixed(0));//3 to fixed RETURNS STRING round it to 3
console.log(2.7).toFixed(3); //2.700 3 decimal places
console.log(2.345).toFixed(2)); //2.35 2 decimal places
console.log(+(2.345).toFixed(2)); //convert the to fixed string to a number

//primitaves don't have methods javascript does boxing covert into object then perform method



//REMAINDER of an operator 

console.log(5 % 2); //1  remainder
console.log(5 / 2); //2 * 2 is 4 plus remainder 1

console.log(8 % 3); //remainder 2
console.log(8 / 3); // 2 * 3 is 6 8-6 is 2




//can check whether a number is even or odd#
//even is divisible by 2 and the remainder is 0


























const account1 = {
  owner: 'Jim Bob',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'David Cameron',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];