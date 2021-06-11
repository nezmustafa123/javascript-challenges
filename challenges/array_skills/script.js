'use strict';


//ARRAYS are objects that have methods functions attached to them 




//SPLICE
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
//creates shallow copy of original array use slice method
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

//loop over mornally see if its deposit of wirthdrawl


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
for(const mov of movements) {
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
const balanace = movements.reduce(function (acc, cur, i, arr) {
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


using for loop 

let balance2 = 0;
//external variable
for (const mov of movements) {
    balance2 += mov;
};
//using one of the methods you don't need extra variable
//return value right away       






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
                  
                  
                  
                  






















