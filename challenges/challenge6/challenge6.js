const friend1 = "Jim";
const friend2 = "Steven";
const friend3 = "Peter";


const friends = ['Michael', 'Steven', 'Peter'];
//zero indexed array 0 1 2

const y = new Array(1991, 1984, 2008, 2020);

//console.log(friends[0]);
//console.log(friends[2]);
//
//console.log(friends.length);
//get the value at the end of the array
//console.log(friends[friends.length-1]);
//replace the element at the second index with jay
friends[2] = 'Jay';
//console.log(friends);

const firstName = 'Jonas';

const nez  = ['Nez', 'Mustafa', 2021 - 1990, 'dev', friends];

//replaced with values the expressions produce

//console.log(nez.length);



//exercise 
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

//use calcage function on individual elements by passing in the index and put into array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[years.length -1])];


console.log(ages);


//array methods

//ADD ELEMENTS

//push is a function

//add to end of array
// also returns length of new array

const friendsNew = ['Michael', 'Steven', 'Peter'];
//call function attached to friends array

//returns length of new array


friendsNew.push('Jay');
console.log(friendsNew);

const arrLength = friends.push('Jay');

console.log(arrLength);

//unshift adds to the front of the array
//returns length of array too
friendsNew.unshift('John');


console.log(friendsNew);


//REMOVE ELEMENTS

//pop doesn't return length just the element itself

friendsNew.pop();
const popped = friendsNew.pop();

//doesn't take in any parameters

console.log(friendsNew);

console.log(popped);

//remove first 
//returns element that was removed
friendsNew.shift(); //first

const shifted = friendsNew.shift(); //Michael

//position of element indexOf

console.log(friendsNew.indexOf('Steven'));

//steven is index one so this should return one

//for a non existent index it will return minus one

console.log(friendsNew.indexOf('Bob'));

//-1


console.log(friendsNew.indexOf('Steven'));
console.log(friendsNew.indexOf('Bob'));


//includes method returns true if element exists faslse if it doesn't
//uses strict equality

//if array includes peter it's executed

if (friends.includes('Peter')) {
    console.log(`You hsve s friend called Peter`);
};



//challenge

const calcTip = (bill) => {//ternary operator
    const tip = bill <= 300 && bill >= 50 ? (bill * 0.2) : (bill * 0.15);
    return tip;
}



const bill1 = calcTip(125);
const bill2 = calcTip(555);
const bill3 = calcTip(44);



const bills = [125, 555, 44];
//call function with different array elements inside bill array
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(tips);

//enter the parameter when calling function

const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];

console.log(total);



const years = newArray(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);



//testing
