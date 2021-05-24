'use strict';

const bookings = [];
//functions defualt parameters
//don't have to pass them in manually
//es6 defafults can contain any expresstion can also use value of other parameters set before it
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers){
    //old way short cuirting 
    //ES5
//        numPassengers = numPassengers || 1;
//        price = price || 199;
    //price and num passengers would be falsey 
    const booking = {
        //create object in the function
      //use advanced template literals to set property value from arguments
       flightNum,
        numPassengers,
        price,
    };
    bookings.push(booking);
};

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
//flight
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





const britishAirways = {
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

britishAirways.book(239, 'Nez Mustafa');
britishAirways.book(635, 'Jim bob');
console.log(BritishAirways);


const bmiFlybe = {
    airline: 'BMI',
    iataCode: 'BMI',
    bookings: [],
}


//copying method and pasting is bad practice can create the method and use it in different objects


const book = britishAirways.book;
//store function in object in a new variable

book(23, 'Sarah Williams')

// now just a regular function call the this keyword points to undefined under strict mode it's not a method it's a regular function
//set this keyword explicitly to point at different objects


//use call and apply to point this keyword to different objects function is just an object so has methods
//call method
//use call method first argument is the object you want this keyword to point to 
book.call(bmiFlybe, 23, 'Sarah Williams');
console.log(bmiFlybe):
//call method sets this keyword to point to bmiFlybe calls book method this keyword inside method points to bmiFlybe
//all other arguments regular like function
console.log(bmiFlybe);


book.call(britishAirways. 239. 'James Smith')
console.log(britishAirways);
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
console.log(britishAirways);
//can instead use call 

book.call(TurkishAirlines, ...flightData);



//bind method 
//bind allows to manuall set the this keyword for any function call
//doesnt; immedietley call function it returns new function to which the this keyword is bound
//will not call book function will return a new one put it into a variable
const bookTK = book.bind(TurkishAirlines);

//bind the function to TurkishAirlines object, this will point to it
//one booking function for each of the airlines/objects
//define the this keyword once
const bookBA = book.bind(britishAirways);
const bookBMI = book.bind(bmiFlybe);
//this keyeword already set in stone
bookTk(192, 'Nez Mustafa');

//pass multiple arguments that are 'set' in stone
//function especially for TK%%
const bookTK55 = book.bind(TurkishAirlines, 55);
//flight number already preset function just needs the name
//called partial application
bookTK55('Nez Mustafa');
bookTK55('DB Cooper');


//With Event Listeners 
britishAirways.planes = 300;
//add new method
britishAirways.buyPLane = function() {
    (this);
    this.planes++
    console.log(this.planes);
    //this.planes is not a number because this points to the button element
};


document.querySelector('.buy').addEventListener('click', britishAirways.buyPlane);

//this keyword will point to the button element inside the handler function the this keyword points to the button element or element event handler is attached to


//if called outside the this keyword would be britishAirways
//bind will return new function specify the objecy


document
    .querySelector('.buy')
    .addEventListener('click', britishAirways.buyPlane.bind(britishAirways));

//bind this keyword to british airways

//partial application

const addTax = (rate, value) => {
    value + value * rate;
};

console.log(addTax(0.1, 200));
//use partial application with bind no this keyword
//preset the rate to 23%
//this keyword isn't in function so use null preset the rate
//create a brand new specific function using more generatl function
const addVAT = addTax.bind(null, 0.23);
//0.23 is set in stone


console.log(addVAT(100));
console.log(addVAT(23));
console.log(addVAT())





//can do it using inner funtions
//functions returning functions
//outer function
const calcVat = function(rate) {
    //inner function
    return function(value) {
        return value + value * rate;
        
    }
};

const calcTax = calcVAT(0.17);

calcTax(50);




//IFFE immedietely invoked function

const runOnce = function() {
    console.log('This is will never run again');
};

runOnce();


//turn statement into expression
(function() {
    console.log('This will never run again');
    //global scope doesn't have access to private scope
    const isPrivate = 23;
    //encapsulated;
    //data privacy
})();
//immediately call function

//works with arrow function too
(() => console.log('This will ALSO never run again'))();

//variables created with let of const also create own scope in block



{
    const isPrivate = 23;
    //cant access isPrivate outside block
    var notPrivate = 46;
    //can access notPrivate outside the block
};



//CLOSURES

//happens automatically in certain situations need to recognise those situations



//don't create closures manually
const secureBooking = function() {
    let passengerCount = 0;
    
    return function() {
        //update passenger count variable defined in parent function
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    };
    
    
};

//call the function store it in variable function will be returned
const booker = secureBooking();


booker();
booker();
booker();

//call three times

//1 passengers 
//2 passengers 
//3 passengers
//booker function (inner) has access to outer functions environment after it's been called


//code running in global execution context

//glocal scope has secure booking function

//secure booking has own scope (variable environment)


//when secure booking is executed new execution context is put on top of execution/call stack

//secure booking function scope has access to global scope
//after securebooking is called it pops off the execution stack and diappears

//closure makes function remember all variables being created at functions birth place

//execution context of secureBooking no longer in call stack

//booker is funciton located in global scope variable environment is empty
//booker is in global context child scope of global scopes
//still has access to variable environment in the execution context in which it was createds
//booker was created in execution context of secure booking which was popped off the call stack still has access to variable

//booker function closed over parent scope/VE will stay with it forever

//closure has prority looks at closure before scope chain even if there is a vairable in global scope



//closure closed over variable environment of execution context in which function was created

//closure internal property of function

//can look at a closure in the console

console.dir(booker);



//gives information on closure (internal property)




//closure examples 
//don't need to return function from another function'

//example 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
        //f variable defined outside
    };
};

g();
f();

//f function closed over variable environment in g function gives a result of 46 
//even though the f variable was defined outside the g function
//f variable closes over the outer functions variable environment

//a variable inside the backpack of the function


const h = function() {
    const b = 777;
    //reassugn b has access to outer scope
    f = function () {
        console.log( b * 2);
    }
};


h();

//assign f variable a second funciton
//see what f does 
f(); //f was reassigned

//f function that was reassigned also closed over variable environment of h

console.dir(f);

//f function has new closure 


//example 2 
//timer 

const boardPassengers = function(n, wait) {
    //boarding happens in groups divide passengers by three first class business economy
    const perGroup = n / 3;
    //callback function called after 1 second created in variable environment on outer function
    setTimeout(function() {
        //use n parameter
        //callback executred independantly from the boardPassengers
        console.log(`We are now boarding all ${n} passengers`);
        
        console.log(`There are 3 group, each with ${perGroup} passengers`);
        
    }, wait * 1000);
    
    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
//if it wasn't for the clure t will use pergroup variable that's outside
//closure has proprity over scope chain
//closure has access to parameters and variables in outer function
boardPassengers(180, 3);

//180 passengers
//per group variable will be created

//set timeout will be called and reguster the callback which will be called after three seconds


//console.log will be called immediately


(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue';
    })
})();

//function runs immedietely 
//data is private global scope or any other scope doesn't have access to the variables inside the funciton
//the iffee executes but the callback still has access to the iffes variables
//when the function is executed the environment in which it was crerated is gone









