'use strict';


//ARRAYS are objects that have methods functions attached to them 




//SPLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
//slice method similiar to string slice method

arr.slice(2);
//start at index all the way to end end, returns new array with extracted parts doesn't change original 

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
arr.slice(-1);

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
//all we are interested in it do delete elements using splice

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
    if(movement > 0) {
        console.log(`Movement ${i + 1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
        
    }
};


//foreach passes in current element index of element and array looping through order matters order in which elements passed on to callback function
movements.forEach(function(movement){
    //callback function inside for each and parameter inside function whcih is the current elemet
   //for each loops over array and calls function for each element 
    
    if(movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }






























