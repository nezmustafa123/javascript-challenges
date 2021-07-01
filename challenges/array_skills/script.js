'use strict';


//ARRAYS are objects that have methods functions attached to them 



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



const years = newArray(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);




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


//INCLUDES method returns true if element exists faslse if it doesn't
//uses strict equality

//if array includes peter it's executed

if (friends.includes('Peter')) {
    console.log(`You have a friend called Peter`);
};


//SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
//slice method similiar to string slice method

arr.slice(2);
//start at index 2 all the way to end, returns new array with extracted parts doesn't change original DOES NOT MUTATE ORIGINAL ARRAY

//define end parameter

arr.slice(2, 4);
//end parameter not included in output length is end parameter minus outpus

//can define negative begin parameter

arr.slice(-2);
//last two elements in array
arr.slice(-1);
//last element in array


//extract at position 1 and minus -2
//etracts from index up to but not including the last two 
arr.slice(1, -2);

arr.slice();
//creates SHALLOW copy of original array use slice method
//use it when chaining multiple methods together
//like doing 
[...arr];



//SPLICE
//similar to slice but mutates original array

console.log(arr.splice(2));
//splice deletes from index two in original array and returns the rest
//the original loses the deleted part
//all we are interested in is to delete elements using splice

//remove last element in array

arr.splice(-1);

console.log(arr);
//original element apart from last 

arr.splice(1,2);
//start at index one and delete two elements
//deletes b and c

//second parameter is delete count not end parameter

//REVERSE 

let arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());

console.log(arr);

//CONTACT

const letters = arr.contact(arr2);

console.log(letters);
//arrays concatenated
//doesn't mutate original array


//same as doing
console.log([...arr, ...arr2]);

//JOIN

console.log(letters.join(' - '));
//join by a dash delimiter



const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];

for (const movement of movements) {
    if(movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
        
    }
};

//loop over mornally see if its deposit of withdrawl


//FOREACH
//YOU CANNOT BREAK OUT OF A FOR EACH LOOP

movements.forEach(function(movement){
    //callback function inside for each and parameter inside function whcih is the current elemet
   //for each loops over array and calls function for each element 
    
    if(movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});


//on each iteration should log one of the two strings 
//for each element foreach given instructions



//can also access index variable with entries method 

for (const [i, movement] of movements.entries()) {
    //first element index second value current array element
    if(movement > 0) {
        console.log(`Movement ${i + 1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
        
    }
};


//foreach passes in current element index of element and array looping through order matters order in which elements passed on to callback function
movements.forEach(function(mov, i, arr){
    //callback function inside for each and parameter inside function whcih is the current elemet
   //for each loops over array and calls function for each element 
    
    if(mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i+ 1}: You withdrew ${Math.abs(mov)}`);
    }
    
};
                  




//FOREACH available on maps and sets
                  
   

const currencies = new Map([
    ['USD','United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
                  
]);
//call for each on map takes three parameters first current value in iteration
//second is the key third one entire map being looped over
currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

                                 
//set 

const currienciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function(value,key, map){
    console.log(`${key}: ${value}`);
    //for each for sets as same three parameters but sets don't have keys
});




//use _ as throwaway variable
currenciesUnique.forEach(function(value, _ , map){
    console.log(`${value}: ${value}`);
    //for each for sets as same three parameters but sets don't have keys
});




//array methods
//data transformation tools
//new arrays from old arrays

//map 
//filter 
//reduce

//map creates new array based off original array on each iteration applies callback function to current array element eg each element should be multiplied by two

//maps values of original array to new array


//filter for elements in original array which satisfy a certain condition e.g elements greater than two

//elements for which condition is true will be included in array filter method returns

//reduce boil down all elements of original array into single value

//add all elements of an array together 
//specify operation have accumulator then as loop over array add current element onto accumulator like a snowmball
                  
                  
   
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//map method create new array based off function


//convert from pound to dollars

const poundToUsd = 1.4;
//map through array and call callback function on each element
//multiply each element in movements by one point one call back takes current array element
//store new array in new variable
//create new array based off original
const movementsUSD = movments.map(function(mov){
    //return value new array should have current position
    return mov * poundToUsd;
    //mov * 1.4 each element
    
    //could also have returned 23 at same position for each element
});




//for of loop 
const movementsUSDfor = [];
//define new array
for(const move of movements) {
    movementsUSDfor.push(move * poundToUsd);
};

console.log(movementsUSDfor);

//arrow function

const movementsUSD = movments.map(mov =>
    mov * poundToUsd;
    //one line can take the return function and curly braaces
);



//map method has access to current element index and whole array
const movementsDescription = movements.map((mov, i) => {
    //pass callback function in map method that gets called by map for each element
    //each time map calls function passes in current element and index
    //return string gets put into new array results from map method instead of console.log
    //ternary operator  to build string nothing to do with map method don't need if statement
    //access to parameters from map 
    `Movement ${i + 1}: You ${mov > 0 ? 'desposited': 'withdrew'} ${Math.abs(mov)}`
    
//    if(mov > 0) {
//        
//        //have to return values
//        return (`Movement ${i = 1}: You deposited ${mov}`);
//    } else {
//        //have to return values
//        return (`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//    }
});

console.log(movementDescriptions);
//can have two return statements ore more in function as long as only one is executed



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const currencies = new Map([
//  ['USD', 'United States dollar'],
//  ['EUR', 'Euro'],
//  ['GBP', 'Pound sterling'],
//]);
//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



//FILTER METHOD

const deposits = movements.filter(function (mov) {
    //create array of deposits above zero.
    return mov > 0;
    //return boolean all elements for which this condition is true get filtered out

});
////can chain these methods together
//for one final result


//using a regular for loop 

const depositsFor = [];

for(const mov of movements) {
    if (mov > 0) {
        depositsFor.push(mov);
    }
};
const withdrawals = movements.filter(function(mov){
    return mov < 0;
});

//REDUCE METHOD

//
//reduce method boil doing all elements in to one single value
//parameters available to callback in reduce method is accumulator current element index and array
//accumulator is like snowbball callback called on each iteration
const balanace = movements.reduce(function (acc, cur, i, arr) { //acc is accumulator
    console.log(`Iteration ${i}: ${acc}`);

    //acc sum of all previous
    return acc + cur;

    // on each loop iteration update the value of accumulator plus new current value
}, 0);
//initial value of acc start adding at 0
console.log(balance);
//3840
//

//using for loop 

let balance2 = 0;
//external variable
for (const mov of movements) {
    balance2 += mov;
};
//using one of the methods you don't need extra variable
//return value right away



//const username = user
//.toLowerCase()
//.split(' ') //split string into words by space
//.map(function(name){
//    return name[0];
//    //iterate through take first latter in each iteration
//    //letter at position 0 array with three names
//    //name at first character
//})
//.join(''); //turn into string again
////chain map method on to the end of split
////array containing three names 
//
////loop over array take first letter on each iteration
//return username;
//    //return username
//};
////each function should recievet array it wants to work with instead of using global variable

//compute one username for each account holder in users array


//filter method 

const deposits = movements.filter(function (mov) {
    //create array of deposits above zero.
    return mov > 0;
    //return boolean all elements for which this condition is true get filtered out

});
//can chain these methods together
//for one final result


//using a regular for loop 

const depositsFor = [];

for(const mov of movements) {
    if (mov > 0) {
        depositsFor.push(mov);
    }
};
const withdrawals = movements.filter(function(mov){
    return mov < 0;
});




//reduce method boil doing all elements in to one single value
//parameters available to callback in reduce method is accumulator current element index and array
//accumulator is like snowbball callback called on each iteration
const balanace = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc}`);

    //acc sum of all previous
    return acc + cur;

    // on each loop iteration update the value of accumulator plus new current value
}, 0);
//initial value of acc start adding at 0
console.log(balance);
3840


//using for loop 

let balance2 = 0;
//external variable
for (const mov of movements) {
    balance2 += mov;
};
//using one of the methods you don't need extra variable
//return value right away       



//reduce for maximum value sum multiplication or string object
// find max value of movments
const max = movements.reduce((acc, mov) => {
   //usee acc to keep track of current maximum
    //acc in this case starts as the first value in array
    if (acc > mov) {
        return acc; //have to return acc on next iteration don't change
    } else {
        //return movement as next iteration
        return mov
    }
},movements[0]); //put first value of array



const euroToGBP = 1.3;
//chain all the array methods into one
movements.filter(function(mov){
    //filter for movements positive
    return mov > 0;
}).map(function(mov, i, arr){
    console.log(arr); //console.log arr to debug checkout current array in next array method call map method on result of filter this callback is called 5 times 
    //chain map
    //convert Euros into pounds
   return  mov => mov * euroToGBP; 
}).reduce(function(acc, mov){
    //chain reduce add all values together accumulator mov
    //add all values together
    return acc + mov;
},0);
//could chain other methods oo as long as they return arrays can't chain map or filter after reduce
//data pipline processing
console.log(eurToGBP);




//FIND METHOD
//find element of array based off condition
//doesn't return new array returns first element in array that satisfies this condition
//returns first withdrawal
const firstWithdrawal = movements.find((mov => mov < 0));

console.log(movements);
console.log(first);

//similar to filter find method only returns first element matching condition 
//find only returns element itself and not new array

console.log(accounts);



//find object in array based off a property on that object

const account = accounts.find((acc => acc.owner ==='Sarah Smith'));
//get account whose owner is Sarah smith use find on array of multiple oebjects search array using find to get object with property that matches condition find method only used for one element
//if owner names unique condition will match one account name property


const accounts = [account1, account2, account3, account4];


  const account1 = {
    owner: 'Nez Mustafa',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 4563,
};

const account2 = {
    owner: 'Sarah Smith',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 7309,
};

const account3 = {
    owner: 'Axel Landin',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 5177,
};

const account4 = {
    owner: 'Olivia Jones',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 8692,
};                
                  
    

//some and every some takes callback function tests for condition not jsut //equality 

//check for equality using includes
console.log(movements.includes(-130));

const anyDesposits = movements.some(mov => mov > 0);
//rewrite includes method using some
console.log(movements.some(mov => mov === -130));

console.log(anyDeposits);
//true more than just one anyDesposit

//SOME method
//check if there is movements above 1500
//if there's any value for which this condition is true then this method is true.
const anyDesposits = movements.some(mov => mov > 1500); 
        
                  
                  
//EVERY method

//returns true if ALL elements in array passes test in callback function 

console.log(movements.every(mov => mov > 0));
//false
console.log(account4.movements.every(mov => mov > 0));
//true



//can write function seperately 

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//can reuse same function on methods that require callbacks



//flat and flatmap

const arr = [[1,2,3], [4,5,6], 7, 8];

console.log(arr.flat());

//flatten array 

//nested arrays inside nested arrays

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(arrDeep.flat(2));
//will only go one level deep can add parameter to specify number of nested  levels
//two levels deep

const accountMovements = accounts.map(acc => {
    //create new array with same length that contains the arrays of movements
   return acc.movements;
});

//nested array of arrays
const allMovements = accountMovements.flat();
//return flat array

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

//aggreagate all the elements in the flattened array with reduce 

//use chaining 

const overallBalance = account
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);


//can use flatmap to combine map and flat

const overallBalance = account
.flatMap(acc => acc.movements) //map method that flattens result one level deep
.reduce((acc, mov) => acc + mov, 0);




//SORTING ARRAYS

//strings
const owners = ['Nez', 'Jim', 'Axel', 'George'];
owners.sort();
//sorts in alphabetical order but MUTATES original array



//Numbers 
console.log(movements);
movements.sort();
//will convert to string then orders them


//pass in compare callback function
//current value and next value two consecutive numbers in array



//return < 0 A, B (keep order)
//return > 0, B, A (switch order put b before a)


movements.sort((a, b) => {
    //if return less than 0 value a will be sorted before value b 
    //if return positive b will be before a 
    if (a > b) {
        return 1; //switch order
    }
    else if (a < b) {
        return -1; //keep order
    }

//sort in ascending order sory will loop through array and sory it in ascending order
});

console.log(movements);

movements.sort((a, b) => {
    //if return less than 0 value a will be sorted before value b 
    //if return positive b will be before a 
    if (a > b) {
        return 1; //switch order if a bigger than b a -b will be positive
    }
    else if (a < b) {
        return -1; //keep order
    }

//sort in ascending order sort will loop through array and sory it in ascending order
});


movements.sort((a, b) => {
    //if return less than 0 value a will be sorted before value b 
    //if return positive b will be before a 
    if (a > b) {
        return -1; //if a greater than b keep order
    }
    else if (a < b) {
        return 1; //if a less than b swith order 
    }

//sort in descending order sort will loop through array and sory it in ascending order
});

console.log(movements);



//can write shorthand 
//ascending order
movements.sort((a, b) => a - b);
//if a greater than b then will return any positive number and siwtch the order if b greater than a will keep the order
console.log(movements);
//descending order

movements.sort((a, b) => b - a); //return value
//descending order
console.log(movements);
//if 0 returned position remains unchanged


//new ways of writing arrays


const arr = [1,2,3,4,5,6,7,8];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));


//empty arrays + fill method
const x = new Array(8);
//creates new array 7 empty elements in there 

console.log(x);
//when passing in one argument creates array of that length 
//console.log(x.map(() => 5));

//can't use map method to fill it up 


//can use fill method to fill up entire array with specific value

x.fill(1);
console.log(x);
//can also specifiy where you want it to start to fill
//fill will MUTATE original array
x.fill(1, 3); //will fill up till end unless specify end paramter
console.log(x);

//like splice

x.fill(1, 3, 5); //fills from 3rd index up to but not including 5th index 

console.log([1,2,3,4,5,6,7]);

//can use on full array 

arr.fill(23, 2, 6);

//put number 23 in positions 2 to 6


//array.from 
//use Array constructor same as new Array()
//first argument object with length second argument mapping function 
//no arguments array of length 8 of all 1s
const y = Array.from({length: 8}, () => 1);
//create array 1 - 8 
//acess to current element and index
const z = Array.from({length: 8}, (el, i) => i + 1);

//length 8 returns index plus one so pronts 1 - 8 index varies from 0-7 like calling map method on emply array
//can use throwaay prameter to denore not using el parameter

const z = Array.from({length: 8}, (_, i) => i + 1);


const diceRolls = Array.from({length: 100}, (_, i) => Math.floor(Math.random() * 6) + 1);

console.log(diceRolls);


//create arrays from other things like query selector all

//EG select all the elements that have this class
const movementsUI = Array.from(document.querySelectorAll('.movementsvalue'));





//ARRAY EXCERCISES
//total deposits
//const bankDepositSum = accounts.map(acc => acc.movements).flat();
const bankDepositSum = accounts
.flatMap(acc => acc.movements) //get movements out of accounts array of arrays
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);



//how many deposits with at least 1000 pounds
//advanced reduce
const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov >= 1000).length; //length at the end



//using reduce
//accumulator will be the number of movements greater than thousand

const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
.reduce((count, cur) cur >= 1000 ? count + 1 : count, 0);
//initial accumulator like haveing external variavle outside loop
//if current value over 1000 then reutrn count plus one if not return count

//on each iteration if over 1000 add one to count


//cant use ++ in reduce use the prefixed operator instead
const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
.reduce((count, cur) cur >= 1000 ? ++count : count, 0);
//initial accumulator like haveing external variavle outside loop
//if current value over 1000 then reutrn count plus one if not return count

//on each iteration if over 1000 add one to count
//0 is returned by plus plus on next iteration

let a = 10;

console.log(a++);
//will give 10 is actually 11 but returns previous value

console.log(++a);
//use prefixed ++ operator to return straight away



//use reduce to return new object contains sum of deposits and withdrawals
//destructure the object straight away
const {deposits, withdrawals} = accounts
.flatMap(acc => acc.movements)
.reduce((sums, cur) => { //sums is the object object is the initial value of sums explicitly return from function
    
//   cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'depsits' : 'withdrawals'] += cur;
        //conditionally select deposits or withdrawals using bracket notation expression
    return sums //have toexplicitly return accumulator
}, {deposits: 0, withdrawals: 0}
);


console.log(deposits, withdrawals);



//convert to title case 

const convertTitleCase = function(title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
    //stand alone function
    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
    //convert array work on each word
    const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : capitalize(word).join(' ')); //can't use filter use includes if current word is included in exceptions array then capitalize it if not  just return word 
    console.log(titleCase);
    //capitalize each word
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("£", ""))
  );
  // console.log(movementsUI.map((el) => Number(el.textContent.replace("£", ""))));
  //CAN also use map method now that it is converted into an array
  //create array from movements values dynamically added on screen using array from then use callback functoin to get rid of poiund sign
  console.log(movementsUI);

  ///can also do this

  movementsUI2 = [...documents.querySelectorAll(".movements__value")];
});



























