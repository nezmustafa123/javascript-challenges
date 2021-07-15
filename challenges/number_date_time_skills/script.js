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


console.log(6 % 2); // 0
console.log(6 / 2); // 3 no remainder


console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
//function to check if even if remainder n mod 2 is zero will return true if not then false 

console.log(isEven(8));
console.log(isEven(23));//odd
console.log((isEven(545)));//odd
console.log((isEven(940)));//true


//check if any number is disible by another number if remainder is 0 

//select movements row 


//BIG INT is a primative
//numbers represented in 64 bits 
//only 53 used to store digit themselves rest used for sign and decimal point

console.log(2 ** 53 -1);
//2 power of 53 - 1 because number starts at 0 
//biggest number javascript can represent 

console.log(Number.MAX_SAFE_INTEGER); //same number 

//may get a number from api larger than this

//use big int to get around it 
//put n at the end of number
console.log(93945873498572304986987123495873453n);

//can write BigInt in front of number constructor function

console.log(BigInt(93545924759238572398572395823));

//Operations with big int

console.log(1000n + 1000n);
//add two big int numbers
console.log(3459837459238479871032487543958n + 1000000000n);
//can't do square root on bug int number
console.log(Math.sqrt(16n));
//can't mix big int with regular numbers
const huge = 234298798753948739n;
const num = 23;

//have to convert it using bigint function first 
console.log(huge + BigInt(num));


//can use type coercion using comparison operator and plus operator 
//to convert into number or string
console.log(20n > 15);// true
console.log(20n === 20);// false
//different primative types

console.log(typeof 20n); //bigInt
console.log(20n == 20); //true, coerces into regular number 

console.log(huge + 'is REALLY big!!!');
//will convert number to string even though has big int

//Divisions 
console.log(10 / 3); //will give floating point
console.log(11n/ 3n); //will give 3n




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


//DATES AND TIMES


const now = new Date(); // create a new date object can take parameter
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));

//can pass in new string to parse the time based off the string

console.log(new Date('December 24, 2021'));
//will give the dat of the week too

console.log(new Date(account1.movementsDate[0]));
//reference value inside array inside object to parse it
//drill into object get array movementsDate and first element
// z is cordinated universal time
console.log(new Date(2015, 10, 18, 15, 22, 6));

console.log(new Date(2037, 10, 31));
//will will auto correct to december the first

console.log(new Date(0));
//Unix time jan 1st 1970

console.log(new Date(3 * 24 * 60 * 60 * 1000));

//days to milliseconds 3 days after the unix start time

//will give time stamp of day number three
//dates are special type of object
//have methods on them set components of date



//working with dates

const future = new Date(2035, 10, 18, 15, 22);
console.log(future);

console.log(future.getFullYear());
//2015 never use get gear
console.log(future.getMonth()); //zero based 10 = November
console.log(future.getDate()); //day of the month = 18
console.log(future.getDay()); //gets day of the week 
console.log(future.getHours()); // gets hours
console.log(future.getMinutes()); //gets minute
console.log(future.seconds()); //gets seconds
console.log(future.toISOString()); //converts date into string
console.log(future.getTime()); //time passed since since jan 1st 1970 to the date passed in mili seconds


console.log(new Date(2142500000));

console.log(Date.now()); //curent timestamp for this date, milli seconds since 1970

future.setFullYear(2040); //set versions of all of these methods
//sets year and ccan also set month etc

//CALCULATING DATES 
console.log(Number(future)); //timestamp milliseconds
console.log(+future); //convert to number
//gives millisecond timestamp can convert back

//takes two days returns number of days passed between two days
const calcDaysPassed = (date1, date2) => (date2 - date1) /(1000 * 60 * 60 * 24);
//convert to days hours minutes seconds milliseconds
const daysPassed1 = calcDaysPassed(new Date(2035, 3, 14), new Date(3037, 3, 25));
//gives milli-seconds have to convert them

console.log(DaysPassed1);


const daysPassed2 = calcDaysPassed(new Date(2035, 3, 4), new Date(3037, 3, 14));

//will return -10 can alter the function to get absolute value


const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1)) /(1000 * 60 * 60 * 24);
//convert to days hours minutes seconds milliseconds


const daysPassed3 = calcDaysPassed(new Date(2035, 3, 4), new Date(3037, 3, 14));
//if add time and minute can use math round

//reformat and display dates


//internationalising numbers
//call numberformar argument put localse and then call format method with number
const num = 388474.23;

//create options object to add as second arugment
const options = {
    style: 'unit', //unit
    unit: 'mile-per-hour', //options for this unit
};
console.log('US:     ',new Intl.NumberFormat('en-US').format(num));
//pass in what to format 
console.log('Germany:     ',new Intl.NumberFormat('de-DE').format(num));
console.log('Syria:     ',new Intl.NumberFormat('ar-SY').format(num));
console.log('UK:     ',new Intl.NumberFormat('en-UK').format(num));
console.log(
    navigator.language,   
    new Intl.NumberFormat(navigator.language, options).format(num));
//getlocale from browser using navigator.language








