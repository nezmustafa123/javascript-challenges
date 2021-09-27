"use strict";
//object oriented programming
//paradigm based on concept of objects
//use objects to model real world or abstract features
//can contain data (properties) and code (methods)
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
  //will be available on INSTANCES created through constructor function
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
//set property on constructor protoype property

console.log(nez, sarah);
//species is on __proto__ property

console.log(nez.species, sarah.species);
//both objects will inherit property from prototype
// property not in Object, not "own" but inherited

console.log(nez.hasOwnProperty("firstName"));
console.log(nez.hasOwnProperty("species"));

//prototypal inheritance
//constructor function
//prototype property which is an object with method calcage attached
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
//object.prototype top of the scope chain

console.dir(Person.prototype.constructor);
//points back to person itself
//have to use dir to inspect function

//prorotype of a function function is also an object it also has a prototype

const arr = [4, 5, 6, 7, 3, 2, 5, 3]; //new Array === []
console.log(arr.__proto__);
//prototype of array is Array.prototype
//has all the methods
//map filter etc each array inherits methods from prototype property
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
  //create a new set pass array in there to get the unique values in an array
  return [...new Set(this)];
  //this is array on which method is called
};

//all arrays will inherit this method

console.log(arr.unique()); //this keyword is whatever the function is being called on

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
// class PersonCl {
//   //constructor is method for this class works like constructor function
//   constructor(fullName, birthYear) {
//     //pass in arguments for properties want object to have
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//     //constructor returns new object stores in PersonCl
//   }
//   //methods written outside constructor no commas between methods
//   calcAge() {
//     console.log(2021 - this.birthYear);
//     //all methods will be on PROtotype of object NOT object itself like prortypal inheritance
//   }

//   greet() {
//     console.log(`Hey`);
//     console.log(this);
//   }

//   get age() {
//     //add getter for class too
//     //same as method inside object
//     return 2021 - this.birthYear;
//   }

//   //set a property that already exists of the same name
//   set fullName(name) {
//     //setter to check for the fullname whether it contains space
//     //whenever fullName is set to fullname property the setter method is executed
//     if (name.includes(" ")) {
//       //setter will run whenever the property fullname is set because of this.fullName (use setter with dot notation) and FullName becomes name this.fullName = fullName so fullname becomes name argument
//       this._fullName = name; //set fullname to name that was received add underscore before property to avoid errors (new property)
//     } else {
//       alert(`${name} is not a full name`);
//     }
//   }
//   get fullName() {
//     return this._fullName; //create getter to get new property created
//     //oerson.getFullname
//   }
// }

//class expression
// const PersonCl = class {}
//use the new keyword constructor will automatically be called
//this keyword set to point to object created
// const joanne = new PersonCl("Joanne Smith", 1999);

// console.log(joanne);
// joanne.calcAge();
// console.log(joanne.age);
//like a method on the prototype
// console.log(joanne.__proto__ === PersonCl.prototype);
//true
//person cl is like constructor function

//add method manually to ptotoype property

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// joanne.greet();

//1. Classes are NOT hoisted
//2. Class are first-class citizens pass them into functions and return them from functions
//3. Always executed in strict mode

//GETTERS AND SETTERS
//every object setter and getter properties 'assessor' properties
//get and set a value

const account = {
  //normal properties are called data properties
  owner: "Nez",
  movements: [200, 530, 120, 200],

  get latest() {
    //create function as getter
    return this.movements.slice(-1).pop();
    //returns new array with last element take it out with pop method
  },
  set latest(mov) {
    //add new movement to array setter needs at least one parameter
    this.movements.push(mov); //just getter or setter is enough
  },
};

//use getter as if it is a property don't call the method
// console.log(account.latest);

//use setter like this
account.latest = 100; //100 gets passed in as an argument
//instead of like this
//account.latest(100);
//setter is like a property
//use it like a property

// console.log(account.movements);

// const david = new PersonCl("David Cameron", 1966);
//access full name with getter
//david.fullName;

//Static methods

Array.from(document.querySelectorAll("h1"));
//from method attached to array constructor

//can't use it on an array like this
//[1,2.3].from()
//attached to  array constructor directly not prototype property of array constructor
//arrays don't inherit it
//in array name space
//name space Number.parseFloat(12)
//12

//create static method that's NOT inherited

Person2.hey = function () {
  console.log("Hey there");
  console.log(this);
  //this keyword is the constructor function
  //the object calling the method
};

Person2.hey();

// //create static method in class

// //class decleration
// class PersonCl {
//   //constructor is method for this class works like constructor function
//   constructor(fullName, birthYear) {
//     //pass in arguments for properties want object to have
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//     //constructor returns new object stores in PersonCl
//   }
//   //INSTANCE all instances with have access methods written outside constructor no commas between methods
//   calcAge() {
//     console.log(2021 - this.birthYear);
//     //all methods will be on PROtotype of object NOT object itself like prortypal inheritance
//   }

//   greet() {
//     console.log(`Hey`);
//   }

//   get age() {
//     //add getter for class too
//     //same as method inside object
//     return 2021 - this.birthYear;
//   }

//   //set a property that already exists of the same name
//   set fullName(name) {
//     //setter to check for the fullname whether it contains space
//     //whenever fullName is set to fullname property the setter method is executed
//     if (name.includes(" ")) {
//       //setter will run whenever the property fullname is set because of this.fullName (use setter with dot notation) and FullName becomes name
//       this._fullName = name; //set fullname to name that was received add underscore before property to avoid errors (new property)
//     } else {
//       alert(`${name} is not a full name`);
//     }
//   }
//   get fullName() {
//     return this._fullName; //create getter to get new property created
//     //oerson.getFullname
//   }
//   //static methods
//   static hey() {
//     console.log("Hey there");
//     console;
//   }
// }
// PersonCl.hey();
// //this keyword points to whole class

// OBJECT CREATE
//manually set prototype to any object required

//prototype object prorotype of all person objects
//create object that acts as prototype to all instances
const PersonProto = {
  //simple object literal
  //methods written outside constructor no commas between methods
  init(firstName, birthYear) {
    //method inside prorotype object
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  calcAge() {
    //like adding calcage method to prototype property person
    console.log(2021 - this.birthYear);
    //all methods will be on PROtotype of object NOT object itself like prortypal inheritance
  },
};

//create person object with personproto as prototype of james
//prototype of object is object passed in
const james = Object.create(PersonProto); //links james to PersonProto which will be its prototype
// console.log(james);
james.name = "James";
james.birthYear = 2002;
james.calcAge();
//method added to prototype

//set the prototype of oebject manually to any object you want

//proto: PersonProto in object.create
//using constructor function

//_proto__: Person.prototype

console.log(james.__proto__ === PersonProto); //true
//prorotype is PersonProto

const anya = Object.create(PersonProto);
//create object programatically

//call inherited function that's in the personproto object
anya.init("Anya", 1991);
anya.calcAge();
//30
//this keyword points to anya object that method

//INHERITANCE BETWEEN CLASSES
//real inheritance between classes not just with the prototype property
//real classes do not exist in javascrit
//create new student class and make it inherit from person class

//student is substype of person
//sutdent is more specific person
//inherit between classes using constructor functions
//inherit between prototype proerties of two differenct constructor functions

const Person3 = function (name, dob) {
  this.name = name;
  this.birthYear = dob;
  //maual changed won't be duplicated in student
};

Person3.prototype.calcAge = function () {
  const age = 2021 - this.birthYear;
  return age;
};

const Student = function (name, dob, course) {
  //instead of duplicating code by writing this.name etc call person constructor
  Person3.call(this, name, dob); //regular function call this keyword is set to undefined have to manually set this keyword
  this.course = course; //not using the 'new' operator to call Person3 constructor
  //call method sets this keyword inside Person3 to be this keyword in student
  //same features with added functionality
  //set this keyword in first argument
};
//setting prototype of student.protype to be person.prototype
Student.prototype = Object.create(Person.prototype); //link two proprotype objects
//inherits from person.protoype object create returns empty object has to be in this point of code
Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const robert = new Student("Robert", 1990, "Computer Science");
robert.introduce();
console.log(robert);
robert.calcAge();
//works because of prorotype chain method lookup

//calcage not on robert object or roberts prototype javascript looks up even further in prototype chain

//Object.prorotype is on top of the prototype chain
//can call has own property on robert too

console.log(robert.__proto__); //says person instead of student
console.log(robert.__proto__.__proto__); //prototype which contains calc age funciton (person)

console.log(robert instanceof Student); //true
console.log(robert instanceof Person); //true
console.log(robert instanceof Object); //true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //person because manually set student.prototype to person.prorotype

//INHERITANCE BETWEEN ES6 CLASSES

class PersonCl {
  //constructor is method for this class works like constructor function
  constructor(fullName, birthYear) {
    //pass in arguments for properties want object to have
    this.fullName = fullName;
    this.birthYear = birthYear;
    //constructor returns new object stores in PersonCl
  }
  //INSTANCE all instances with have access methods written outside constructor no commas between methods
  calcAge() {
    console.log(2021 - this.birthYear);
    //all methods will be on PROtotype of object NOT object itself like prortypal inheritance
  }

  greet() {
    console.log(`Hey`);
  }

  get age() {
    //add getter for class too
    //same as method inside object
    return 2021 - this.birthYear;
  }

  //set a property that already exists of the same name
  set fullName(name) {
    //setter to check for the fullname whether it contains space
    //whenever fullName is set to fullname property the setter method is executed
    if (name.includes(" ")) {
      //setter will run whenever the property fullname is set because of this.fullName (use setter with dot notation) and FullName becomes name
      this._fullName = name; //set fullname to name that was received add underscore before property to avoid errors (new property)
    } else {
      alert(`${name} is not a full name`);
    }
  }
  get fullName() {
    return this._fullName; //create getter to get new property created
    //oerson.getFullname
  }
  //static methods
  static hey() {
    console.log("Hey there");
    console;
  }
}
//the extends keyword links prototypes behind the scenes with the super function
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //pass in additional parameter to constructor
    //call super the constructor function of parent class
    //needs to happen first responsible for creating this keyword in subclass
    super(fullName, birthYear); //pass in parameters in parent constructor responsible for creating this keyword in subclass
    this.course = course; //if didn't want to add extra properties super function will be automatically called
  } //if don't need properties don't have to write constructor in child class

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  showThis() {
    console.log(this);
  }

  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old but as a student I feel more like I'm 65`
    );
  }
}

const sebby = new StudentCl("Sebby Blake", 1991, "Computer Science");

sebby.introduce();
sebby.calcAge();
sebby.showThis();
// const sebby = new StudentCl("Sebby Blake", 1991);
//still end up with _fullName and birthyear will hinerit from parent class

//ovveride method of parents

//OBJECT CREATE inheritance between classes

const PersonProto = {
  //object to serve as prototype to create object using object.create
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const axel = Object.create(PersonProto);

//add another prototype in the middle of the chain betweeen person proto and the object
//create object that will be prorotype of students
//make student inherit direclty from person
const SudentProto = Object.create(PersonProto); //personproto is protoypue of studentproto
StudentProto.init = function (firstName, birthYear, course) {
  //add method
  //use same trick as constructor function so child prototpye can use init method
  PersonProto.init.call(this, firstName, birthYear); //won't have to manually specify properties on any new student object
  this.course = course; //course propery unique want to pass in extra method to this so have to link this method with the other
  //set the this keyword equal to this keywork in the method
};
const joel = Object.create(StudentProto); //studentptoro is prototype of joel
// personproto is also protoype of joel
//person proto will also become prototype of student proto

//1.person proto used to be prototype of all person objects

//2.person proto becomes prototype of student proto student inherits from person

//3. use object create to create new student inherit from student proto

//create prototype chain

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

joel.init("Joel", 1991, "Computer Science");
joel.introduce();
joel.calcAge();
//linking objects together where some objects inherit from other objects

//new class example

//account from bankist app

// class Account {
//   //each account should have pin owner currency
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     //automatically create property on any instance object that doesn't rely on input
//     this.locale = navigator.language;
//     //set to web browser navigator api will appear in acc1
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   //public interface
//   deposit(val) {
//     this.movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val); //abstracts withdrawal being negative just write regular number
//   }
//   approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       //approvement comes from another function
//       this.deposit(val);
//       console.log("Loan approved");
//     }
//   }
// }

// const acc1 = new Account("Nez", "GBP", 3388);
console.log(acc1);

acc1.movements.push(-140);
acc1.movements.push(250);

//create methods that interact with these properties
acc1.deposit(250);
acc1.withdraw(140);
//use the methoods as interfacve to projects public, API

console.log(acc1.pin); //can access the pin outside the classs

acc1.requestLoan(1000);
//in public interface only want requestloan method available
//can also do

acc1.approveLoan(1000); //shouldn't have access to this

//ENCAPSULATION
//keep some properties and methods outside the class hidden and some usable (api)
//prevent code from outside of a class from maniuplating data inside of a class
//expose small api first then expose private methods with more with confidence

//protect movements array fake movements array

//account from bankist app

class Account {
  //each account should have pin owner currency
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; //add underscore as a convension to 'make it private or protected'
    //automatically create property on any instance object that doesn't rely on input
    this.locale = navigator.language;
    //set to web browser navigator api will appear in acc1
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //public interface

  getMovements() {
    //have a method called getmovments
    return this._movements;
  }
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val); //abstracts withdrawal being negative just write regular number
  }
  _approveLoan(val) {
    //this method should not be part of eht public api
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      //if true
      //approvement comes from another function
      this.deposit(val);
      console.log("Loan approved");
    }
  }
}

const acc2 = new Account("Nez", "GBP", 3388);

acc2._movements.push(250);
acc2._movements.push(-140);
//still accessable but because of the underscore know it's wrong
console.log(acc2.getMovements());
//publically get movements rather than sense

//PRIVATE CLASS FIELDS AND METHODS part of a bigger proposal hasn't been fully inplemented yet
//properties are called fields trying to move away from classes being just syntactic sugar

//1.public fields
//2.private fileds
//3.public methods
//4.private methods

//public and private version of fields and methods

class Account {
  //public field property that will be on ALL instances created with class NOT on prototype
  //each account should have pin, owner, currency
  //public fields (referenceable with this keyword)
  locale = navigator.language; //add the public fields like a variable no commas or semi colons
  // _movements = [];
  //add underscore as a convension to 'signify it private or protected'
  //automatically create property on any instance object that doesn't rely on input
  //set to web browser navigator api will appear in acc1

  //private fields use hash symbol makes property private
  #movements = [];
  #pin;
  //field has to be outside method create private field with has

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected proptery
    //reference it with this keyword set it to value passed in in constructor not on the prototype
    this.#pin = pin; //can't define field inside constructor fields like any other property
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //public interface

  //public methods by default
  getMovements() {
    //have a method called getmovments
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val); //abstracts withdrawal being negative just write regular number
    return this;
  }
  // _approveLoan(val) {
  //   //this method should not be part of eht public api
  //   return true;
  // }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      //if true
      //approvement comes from another function
      this.deposit(val);
      console.log("Loan approved");
      return this; //return this (the objecy)
    }
  }

  //private methods same as private fields with the has no browser supports this
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(`Helper`);
  }
}

const acc3 = new Account("Nez", "GBP", 5566);
console.log(acc3.#movements);
//syntax error cannot access variable outside
console.log(acc3.#approveLoan(100));

//private class 'field' and not a 'method'

//chaining methods in methods of class

//return object itself and method chainable

acc3.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
//normally first chain will work but seocond will return nothing because deposit returns nothing
//the result of deposit should be account so return THIS because this is current object
//return THIS on methods that set a property
console.log(acc3.getMovements());
Account.helper();