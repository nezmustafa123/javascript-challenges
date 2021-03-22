'use strict';


//this keyword speacial variable created for every execution context (function )
//teakes value of the owner of the function in which the this keyword is used

//not static depends on how the function is called and its value is assigned when function is actually called
//ways function can be called
//method inside object; this = object that is calling the method method within object


//const nez = {
//    name: 'Jonas',
//    year: 1990,
//    calcAge: function() {
//        return 2037 - this.year;
//    }
//};
//
//nez.calcAge();
//this points to nez object

//calling functions as normal functions not attacked to functions
//function call; this = undefined if not instrict mode this will point wo window object


//arrow functions; this = this of surrounding function lexical (this) do NOT get their own this keyword

//event listener; this = dom element that the handler is attached to (left side of the dot)

//this keyword doesn't point to function using it and will not point to variavle environment

console.log(this);
//this keyword in global scope window object


//regular function call
const calcAge = function(birthYear) {
    console.log(2037- birthYear);
    console.log(this);
    //undefined
};
calcAge(1991);
//this  keyword inside function undefined because it's in strict mode
//if was in sloppy mode would be global object

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
    //lexical this keyword in arrow function uses this keywork of parent scope
    
}
calcAgeArrow(1980);

//this keyword inside method

const nez = {
    year: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2037- this.year);
        //use birth year already in the object itself
        //instead of passing data in again use this keyword to reference object istelf
    }
}

nez.calcAge();

//this points to object itself
//when have a method this keyword inside method will be object calling the method



//this keyword points to object calling method not to oebject function is contained in

const sarah = {
    year: 2017,
    
};
//function is value so can do this
sarah.calcAge = nez.calcAge;
//copy method from one object to another
//add new property in sarah
sarah.calcAge();
//this keyword now points to sarah, points to object calling method
//even though method written inside nez object this keyword will point to matlida if it calls the method

const f = nez.calcAge;
//copy method without calling
//function expression function is a value

f();
//code of nez.calcAge;
//undefined this keyword is undefined because f function is regular function call no owneer so this keyword is undefined




































