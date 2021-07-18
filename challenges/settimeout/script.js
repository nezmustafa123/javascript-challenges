'use strict'

//set timeout eecute some code at some point in the future 
//eg ordering a pizza
//callback function
setTimeout(() => console.log('Here is your pizza'), 3000, 'olives', 'spinach');

//pass in argument into settimeout function

//settimeout function will call callback function in the future after a specified time in milliseconds 3000 milliseconds 3 seconds

//call set time out function register callback function to be called later execution continues code execution doesn't stop here
//javascript only registers callback then calls after 3 seconds
console.log('Waiting...');


//pass arguments into function 
//after the delay
//will be arguments into the function

setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza ${ing1} and ${ing2}`),
    3000, 
    'olives', 
    'spinach'
);

//olives becomes first parameter of first function passed in ing1
//spinach becomes second parameter ing2