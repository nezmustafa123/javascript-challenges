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
//first class function feature that programming language has or doesn't 
//there are higher order functions in practice






//higher order functions example


const oneWord = function(str) {
    return str.replace(/ /g, ''),toLowerCase();
    //replace space with empty string
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    //destructure using rest to put it it into other variable
    return [first.toUpperCase(), ...others].join(' ');
    //spread
};

const transformer = function(str, fn) {
    //takes in string and function
//    fn = upperFirstWord
    console.log(`Original string: ${str}`);
    //callback function being called
    console.log(`Transformed string: ${fn(str)}`);
    
    //call function inside functiono with passed in string
    
    
    console.log(`Transformed by: ${fn.name}`);
    //name property available on functions name of the function
    //Transformed by: upperFirstWord
};




transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);
//callback functions
//pass in uppefirstword and oneWord functions  to transformer so it calls it

//callback function like addeventlistener

//Javascript callbacks ALL the time
//split up code into modular pieces of functionality create abstraction
//hide details of some code implementation abstract code into other functions
//transformer code delegates transformation to other lower level functions
const high5 = function() {
    console.log('✋');
}

document.body.addEventListener('click', high5);

//will call callback as soon as body clicked on
//addeventlistener higher order function


['Nez', 'Sam', 'Emily'].forEach(high5);
//foreach method on array taking callback
//tell foreach what to do on each iteration





//functions returning functions
//outer function
const greet = function(greeting) {
    //inner function
    return function(name) {
        console.log(`${greeting} ${name}`);
        
    }
};

greet('Hey');
//result of this function call is the inner function that was returned
//can store it in a variable

const greeterHey = greet('Hey');
//value inside the variable is the function that's returned
//can call greeterhey like it was any other function that has been defined

greeterHey('Boy');
greeterHey('Girl');
//greeting still comes from greet function works because of closures

//can immediately call it without storing because it's a function
greet('Hello')('Jonas');
//can use this in functional programming



const greetArr = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
};



//bind call and apply methods





const BritishAirways = {
    airline: 'British Airways',
    iataCode: 'BA',
    bookings: [],
    //book: function() {}
    book: function (flightNum, name) {
       console.log(
           `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`;
       );
        //push the object into the array flight code flight num and passenger array
        
     this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name});
   },
    //will create a new 'name' key with value of name
};

BritishAirways.book(239, 'Nez Mustafa');
BritishAirways.book(635, 'Jim bob');
console.log(BritishAirways);


const bmiFlybe = {
    airline: 'BMI',
    iataCode: 'BMI',
    bookings: [],
}


//copying method and pasting is bad practice can create the method and use it in different objects


const book = BritishAirways.book;
//store function in object in a new variable

book(23, 'Sarah Williams')

// now just a regular function call the this keyword points to undefined under strict mode it's not a method it's a regular function
//set this keyword explicitly to point at different objects


//use call and apply to point this keyword to different objects function is just an object so has methods
//call method
//use call method first argument is the object you want this keyword to point to 
book.call(bmiFlybe, 23, 'Sarah Williams');
console.log(bmiFlybe):
//call method sets this keyword to point to bmiFlybe calls book method
//all other arguments regular functions
console.log(bmiFlybe);


book.call(BritishAirways. 239. 'James Smith')
console.log(BritishAirways);
//this keyword is set to point to British Airways again


const TurkishAirlines = {
    airline: 'Turkish Airlines',
    iataCode: 'TK',
    bookings: [],
};

book.call(TurkishAirlines, 993, 'Mary Cooper');



//Apply method

//doesn't recieve list of arguments after this keyword
//takes array of arguments

const flightData = [583, 'DB Cooper'];
book.apply(TurkishAirlines, flightData);
//pass in array of data
console.log(BritishAirways);
//can instead use call 

book.call(TurkishAirlines, ...flightData);



//bind method 
//bind allows to manuall set the this keyword for any function call
//doesnt; immedietley call function it returns new function to which the this keyword is bound
//will not call book function will return a new one put it into a variable
const bookTK = book.bind(TurkishAirlines);

//bind the function to TurkishAirlines object, this will point to it
//one booking function for each of the airlines
const bookBa = book.bind(BritishAirways);
const bookBMI = book.bind(bmiFlybe);
bookTk(192, 'Nez Mustafa');




