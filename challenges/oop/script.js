"use strict";
//object oriented programming
//paradigm based on concept of objects
//use objects to model real world or abstract features
//can contain dara (properties) and code (methods)
//pack data and behaviour into one block
//avoid spaghetti code make objects interact with each other
//use classes classes like blueprint create object based off class

//class representation class is a plan doesn't contain real world data just yet
//fictional class has information about user username password email etc
//behaviour that's associated with data login method and method to send messages

// User {
//     user
//     password
//     email

//     login(password) {
//         //login logic
//     }

//     sendMessage(str) {
//         //sending logic
//     }
// }

// //create new instance of class (object) for specific user

// new User('Nez')

// {
//     user = 'Nez'
//     password = 'dk23s'
//     email = 'hello@nez.io'

//     login(password) {
//         //login logic
//     }

//     sendMessage(str){
//         //sending logic
//     }
// }

// new User('mary')

// {
//     user = 'Mary'
//     password = 'y6095'
//     email = 'hello@mary.io'

//     login(password){
//             //login logic
//     }
//     sendMessage(str){
//           //sending logic
//     }
//  }

//different data same functionality
//principles of designing classes
//abstraction - hide details that don't matter simplify concepts e.g add eventlistener don't know how it works below scence
//encapsulation  - keep some methods private inside the class interact with objects through API public interace prevents external code from manipulating internal properties/state
//inheritance - two classes closely related can have one class inherit from another one parent class one child, child extends parent all properties and methods to certain class available to child class
//polymorphism - child class can overwire method it inherited from a parent class write own methods in child classes

//objects are instances instantiated from a class which functions like a blue print (classical)
//javascript has protoype all objects are linked to certain prototype object
//each object has prototype prototype has objects and methods linked to that prototype all objects can use
//prototypal inheritance objects inherit properties and methods from prototype, different from classical oop
//objects delegate behaviour to linked prorotype object
//can use array methods like map because of prototypal inheritance

const num = [1, 2, 3];
num.map((v) => v * 2);
//can use array method because of prorotypal inheritance

// Array.prototype.map();
//Array.protoype is the prototype of all array objects in javascript
//all arrays have access to the map method
//array inherites map method or delegates the method to its protoype

//ways to create prototypes

//1.constructor functions
//technique to create objects from a function how built in objects like arrays, maps and sets implemented

//2.es6 classes
//modern alernative to constructor function syntax
//syntactic sugar behind the scences work exactly like constructor functions
//do not behave like classess in classical oop

//3.object.create()
//the easiest and most straightoward way of linking an object to a prototype object

//constructor function normal functioin call with new operator
//start with capital letter
//call constructor function with new operator
//arrow function won't work with constructor as it doesn;t have its own this keyword

const Person = function (firstName, birthYear) {
  // console.log(this);
  //Person {}
  //object of the type person
  //take parameters and create properties on the object created with same name and equate them
  this.firstName = firstName; //set value equal to paremeter
  this.birthYear = birthYear;
  //properties are instance properties
  //will be available on instances created through constructor function
  // this.calcAge = function () {
  //   console.log(2021 - this.birthYear);
  // }; //shouldn't create method using constructor function each instance would carry this function otherwise use prototypal inheritance instead
};

//call with NEW KEYWORD at end the end of function this keyword will be returned
//whatever add to function will be returned at the end, the object created will be returned by function
const nez = new Person("Nez", 1990);
//console.log(nez); //person object first name and birthyear passed in
//1. New {} is created
//2. Function is called, this = {} this points to new object
//3. {} linked to prototype
//4. function AUTOMATICALLY returns {} no longer needs to be empty

const sarah = new Person("Sarah", 2011);
const jim = new Person("Jim", 1967);

//function constructor is like blueprint the people (new objects) are instances of person constructor

//js doesn't have classes in the sense that classical oop has

//console.log(nez instanceof Person); //true

//protoypes
// all objects created through this constructor will get access to all properties and methods defined on prototype property on constructor
//prototype is an object itself

Person.prototype.calcAge = function () {
  //add function to prorotype one copy of function this keyword set to object
  console.log(2021 - this.birthYear); //this set to object created through constructor function
};
console.log(Person.prototype);
//eacj object created with person will get access to a;; methods on protoype property
// {calcAge: ƒ, constructor: ƒ}calcAge: ƒ ()constructor: ƒ (firstName, birthYear)[[Prototype]]: Object

nez.calcAge();
sarah.calcAge();
//all other objects created through constructor function can use the method themselves

// any object has access to methods on its prototype
//prorotype of nez and sarah is person.prorotype

console.log(nez.__proto__);
//not prototype property but simply the prototype
//prototype of instance object is prototype property of constructor
console.log(nez.__proto__ === Person.prototype);
//true
// Person.prototype is prototype of every object instance created with person constructor function
