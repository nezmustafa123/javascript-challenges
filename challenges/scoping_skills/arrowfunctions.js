'use strict';


var firstName = 'Matilda';


const nez = {
    firstName: 'Nez',
    year: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2037- this.year);
        
    },
    greet: () => console.log(`Hey ${this.firstName}`),
    //will print out hey matilda because this keyword points to window object 
    //firstname property added to window firstName:'Matilda'
    //never use var or arrow function as a method
    //this.first name translates to window.firstName 
};

nez.greet();
//will return undefined because arrow functions don't have their own this keyword
//this is pointing to window on window there's no firstname property so returns undefined'
//this points to the window object becauase arrow functions points to global scope arrow function uses parent scopes this keyword
//not a code block doesn't have its own scope
console.log(this.firstName)


// normal function inside method
const nez = {
    firstName: 'Nez',
    year: 1990,
    calcAge: function() {
        console.log(this);
        //this = nez
        console.log(2037- this.year);
        //function inside method
        
        const self = this;
          //outside function this keyword set to nez
        const isMillenial = function() {
            
            //get around it using self create a variable set it qeual to this
           // through the scope chain javascript goes up the scope chain and gets the this keyword
            console.log(self); //this
            console.log(self.year >= 1981 && self.year <= 1996);
            //true
        };
        
        
        //calling function again
       // regular funciton call not attached to anything this keyword is undefined
        //because its a regular function call
        isMillenial();
        
    },
    greet: () => console.log(`Hey ${this.firstName}`),
    //will print out hey matilda because this keyword points to window object 
    //firstname property added to window firstName:'Matilda'
    //never use var or arrow function as a method
    //this.first name translates to window.firstName 
};

nez.greet();
nez.calcAge();





// normal function inside method es6 method
const nez = {
    firstName: 'Nez',
    year: 1990,
    calcAge: function() {
        console.log(this);
        //this = nez
        console.log(2037- this.year);
        //function inside method
//solution1
//      const self = this;
//       outside function this keyword set to nez
//       const isMeillenial = function() {
//            
//       get around it using self create a variable set it qeual to this
//       through the scope chain javascript goes up the scope chain and gets the this keyword
//            console.log(self);
//            console.log(self.year >= 1981 && self.year <= 1996);
//        };
//        
        
        //Solution 2
        
      const isMillenial = () => {
            //in the arrow function the this keyword points to the object
         
            console.log(this);//this points to object
            console.log(this.year >= 1981 && this.year <= 1996);
          //returns true uses this keyword of parent scope
        
        };
        //calling function again
       // regular funciton call not attached to anything this keyword is undefined
       //because its a regular function call
        isMillenial();
        
    },
    //arrow function will use this keyword of parent scope
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`); 
    },
    //will print out hey matilda because this keyword points to window object 
    //firstname property added to window firstName:'Matilda'
    //never use var or arrow function as a method
    //this.first name translates to window.firstName 
};


nez.greet();
nez.calcAge();



//functions get access to arguments keyword available in regular functions

//arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
    //will return array 2 and 5
};

addExpr(2,5);
//can add more parameters to function than you specify
//can loop over the aarguments array for example
addExpr(2, 5, 6, 12);


var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;

}

addArrow(2,5,8);
//doesn't exist in an arrow function








































