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

createBooking('BA225');
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
//setting parameter to undefined is same as undefined
createBooking('BA225', undefined,1000);




//passing arguments value vs reference

const flight = 'LH234';
const nez = {
    name: 'Nez Mustafa',
    passport: 435389739487
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    //flightNum is different variable
    passenger.name = 'Mr. ' + passenger.name;
    
    if(passenger.passport ===  435389739487) {
        alert('Check in ')
    } else {
        alert('Wrong passport!');
    }
};

checkIn(flight, nez);
console.log(flight);
//flight still LH234
console.log(nez);
//says mr nez mustafa
//flight is primitve just a string copy of original value so flight num is a copy and not original value of flight variable
//would be same as flightNum = flight;

//object is reference type so when passing it into function reference to memory is copied

//same as writing when passing it into the function

const passenger = nez;
//copying refernce to object in memory heap

//when passing primitive into function its same as creating a copty outside the function
//when passing object to a function it's same as copying object

//new passport function 
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};


newPassport(nez);
//manipulates the same object reference so number gets changed
checkIn(flight, nez);
//will give wrong passport
//two functions acting on same object
//newPassport manipulates object then checkin function sees the number isn't samme as original one



//pass by reference value
//in javascript pass reference to memory object
//pass reference to function but not BY reference like other languages





//first class and higher order functions

//functions are first-class citizens/values

//another type of object objects are values functions are values too


//store them in variables and object properties
//pass functions as arguments into other functions
//can return function from another function
//functions are objects so there are functions/methods on functions

//function that recieves another function as an agument returns a new function or both is higer order function



