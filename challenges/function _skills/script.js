'use strict';

const bookings = [];
//functions defualt parameters
//don't have to pass them in manually
//es6 defafults can contain any expresstion can also use value of other parameters set before it
const createBooking = function (
 flightNum, 
 numPassengers = 1, 
 price = 199 * numPassengers
){
    //old way short cuirting 
    //ES5
//        numPassengers = numPassengers || 1;
//        price = price || 199;
    //price and num passengers would be falsey 
    
    
    
    const booking = {
      //use advanced template literals to set property value from arguments
     
        flightNum,
        numPassengers,
        price,
    };
    bookings.push(booking);
}

console.log(bookings);

createBooking('MH370');
//passengers and price not specified in calling of function
createBooking('LH123', 2, 800);
//can ovveride default values

createBooking('LH123', 2);
createBooking('LH123', 5);
//use the values of parameters to set price based off passengers dynamically
//only worlds for parameters defined before

//cannot skip arguments when calling the function
//arguments 
//if want to skip use undefined 

createBooking('MH370', undefined, 1000);