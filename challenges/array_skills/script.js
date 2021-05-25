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

//second parameter is delete count not end parameter

