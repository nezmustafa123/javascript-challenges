'use strict'

//set timeout eecute some code at some point in the future 
//eg ordering a pizza
//callback function
setTimeout(() => console.log('Here is your pizza'), 3000);

//pass in argument into settimeout function

//settimeout function will call callback function in the future after a specified time in milliseconds 3000 milliseconds 3 seconds

//call set time out function register callback function to be called later execution continues code execution doesn't stop here
//javascript only registers callback then calls after 3 seconds
console.log('Waiting...');
