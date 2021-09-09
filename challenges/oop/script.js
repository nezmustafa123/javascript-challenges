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
  this.firstName = firstName; //set value equal to paremeter have to have colon at end of each
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
//not prototype property but simply the prototype of nez object = prototype property of constructor function
//prototype of instance object is prototype property of constructor
console.log(nez.__proto__ === Person.prototype);
//true
// Person.prototype is prototype of every object instance created with person constructor function

console.log(Person.prototype.isPrototypeOf(nez)); //true
//person prototype is protoype of nez
console.log(Person.prototype.isPrototypeOf(sarah)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
//.prototypeOfLinkedObjects

//step 3 linking {} to prototype creates 'proto' property on new object and sets value of it to prorotoype property of constructor function

Person.prototype.species = "Sahelanthropus tchadensis";
//set property on constructor protoype

console.log(nez, sarah);
//species is on __proto__ property

console.log(nez.species, sarah.species);
//both objects will inherit property from prototype
// property not in Object, not "own" but inherited

console.log(nez.hasOwnProperty("firstName"));
console.log(nez.hasOwnProperty("species"));

//prototypal inheritance
//constructor function
//prototype property which is an object with method calcage
//Person.prototype has link back to constructor through .constructor property

//1 new empty object created
//2 this keyword set to new empty object function execution context in function code set name and birth properties to this keyword
//3 new object linked to constructor functions prototype property
//4 new object returned from function unless explicitly return something usually never do it
//__proto__:Person.prototype

const Person2 = function (occupation, dob) {
  this.occupation = occupation;
  this.birthYear = dob;
};

Person2.prototype.calcAge2 = function () {
  const age = 2021 - this.birthYear;
  return age;
};

const nez2 = new Person2("Developer", 1990);

console.log(nez2.calcAge2()); //javascript can't find function in object

//so looks into prototype
//inherited method from prototype
//call calcage method on all objects created through constructor

//prototype chain prototype lookup
//.prototype is also an object its prototype is Object.prototype
//person.prorotype made with built in object constructor function its prototype is Object.protoype
//objcect constructor called behind scenes when using object literat

// {}=== new Object ()
// Object.prototype is root prototype
// __proto__: null

//javascript looks up in the scope chain

//prototype chain similar to scope chain but with prototypes

// method lookup

nez2.hasOwnProperty("occupation");

//can't find has own property on nez looks into prototype person.prototype
//won't find it there, will move up in the chain look into object.prototype which has a bunch of built in methods
//inherits method through prototype chain

console.log(nez.__proto__);
//prorotype of nez = prototype property of person has the calc age function

console.log(nez.__proto__.__proto__); //moving up the prorotype chain
//object.prototype
//prorotype property of object constructor

//can call hasOwnProperty method because of the prototype chain

console.log(nez.__proto__.__proto__.__proto__);
//null
//object.prototype top of the scop chain

console.dir(Person.prototype.constructor);
//points back to person itself
//have to use dir to inspect function

//prorotype of a function function is also an object it also has a prototype

const arr = [4, 5, 6, 7, 3, 2, 5, 3]; //new Array === []
console.log(arr.__proto__);
//prototype of array is Array.prototype
//has all the methods
//map filter etc each array inherits methods from prototype
console.log(arr.__proto__ === Array.prototype); //true
//prototype of all objects created by array constructor

console.log(arr.__proto__.__proto__);
//object prototype root constructor
//prototype istelf is an object
//all methods available

//see arr diretly in console with proto property

//Array.prototype.filter(); //lives in prototype propery of Array constructor

//any array inherits methods from its prototype
Array.prototype.unique = function () {
  //new method to prototye property of array constructor
  //create a new set pass array in there
  return [...new Set(this)];
  //this is array on which method is called
};

//all arrays will inherit this method

console.log(arr.unique());

const h1 = document.querySelector("h1");

console.dir(h1);
//all methods and properties visible
//protoype is a htmlheadingelement
//going up prorotype chain
//htmlheadingelement
//htmlheading
//element
//node

console.dir((x) => x + 1);
//random function
//also an object contains methods used on functions

//ES6 classes
//just syntactic sugar implements prototypal inheritance like usual

//class decleration
class PersonCl {
  //constructor is method for this class works like constructor function
  constructor(firstName, birthYear) {
    //pass in arguments for properties want object to have
    this.firstName = firstName;
    this.birthYear = birthYear;
    //constructor returns new object stores in PersonCl
  }
  //methods written outside constructor no commas between methods
  calcAge() {
    console.log(2021 - this.birthYear);
    //all methods will be on PROtotype of object NOT object itself like prortypal inheritance
  }

  greet() {
    console.log(`He`);
  }
}

//class expression
// const PersonCl = class {
// }
//use the new keyword constructor will automatically be called
//this keyword set to point to object created
const joanne = new PersonCl("Joanne", 1999);

console.log(joanne);
joanne.calcAge();

console.log(joanne.__proto__ === PersonCl.prototype);
//true
//person cl is like constructor function

//add method manually to ptotoype

PersonCl.prorotype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
joanne.greet();

//1. Classes are NOT hoisted
//2. Class are first-class citizens pass them into functions and return them from functions
//3. Always executed in strict mode
