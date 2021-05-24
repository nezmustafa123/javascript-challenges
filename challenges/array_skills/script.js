'use strict';


//ARRAYS are objects that have methods functions attached to them 





let arr = ['a', 'b', 'c', 'd', 'e'];
//slice method similiar to string slice method

arr.slice(2);
//start at index all the way to end end, returns new array with extracted parts

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
//creates shallow copy of original array



















