'use strict';

function calcAge(birthYear) {
    const age = 2037- birthYear;
    //parameter is local variable
    console.log(firstName);
    //scope reaches out and prints variable
    
    function printAge() {
        //finds name from global scope
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
//        console.log(output);
        //scope reaches out and finds parameter or outer function just like variable
        
        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            //different variable
            //can have different functions with same parameter they're only in that scope
            //javascript engine will find variable and not have look up in scope chain
            //outside block firstName is Nez
            const str = `You're a millenial, ${firstName}`;
            console.log(str);
            
            function add(a, b) {
                return a + b;
                //this function is block scoped
            }
            //redefine variable inside child scope (inner)
            
            output = 'New output'
            //manipulateing variable from inner scope
            //if created a new one with same name name it would print original output
        }
//        console.log(str);
        //block scoped so cannot access string outside
//        console.log(millenial);
        //millenial variable function scoped so can access it within entire function even if it's declated in block
//        add(2,3);
        //function block scoped in strict mode  can't use it always use strict mode
        console.log(output)
    }
    //own execution context and variable environment
    printAge();
    return age;
}
const firstName = 'Nez';
//variable lookup found variable in thhe parent scope
calcAge(1990);
//code in function executed once it's called
//scope is one way street scope can have access to outer scope



//hoisting 
//code is scanned for variable declerations before it is executed 
//function declarations added to variable environment object
//use function declerations before declared in code
//finctions are block scoped in strict mode
//var variables are undefined when accessed before defining
//let and const variables uninitialised when accessed before dlecared TDZ can't access between beginning of scope and place where it's declared
//function expressions and arrow functions depends on whether they were created using var const and let
//functions used with var hoisted to undefined ones with const and let hoisted to uninitialised because of temporal dead zone


const myName = 'Nez';

if(myName === 'Nez') {
    console.log('Nez is a ${job}');
    const age = = 2037 - 1990;
    console.log(age);
    
    //temporal dead zone reigion  of scope where variable is defined buy can't be used
    const job = 'professional prick';
    console.log(x);
}



//hoisting with variables


console.log(me); //undefined
consoel.log(job);//tdz starts here
console.log(year); //uninitialised


var me = 'Nez';
let job = 'teacher';
const year = 1991;



//hoisting with functions

console.log(addDecl(2,3));//5
console.log(addExpr(2,3));//(reference error with const or let) tdz 
console.log(addExpr(2,3));//reference error
//if using var will write uncaught typeError undefine not a function

//declaration
function addDecl(a,b) {
    return a + b;
};
//expression
const addExpr = function (a,b) {
    return a + b;
};

//arrow
const addArrow = (a, b) => a + b;



//pitfall example
//use const most of the time to declare variable and let if you need to change later
//declare variables at top of scope and declare functions first
if(!numProducts) deleteShoppingCart();
//if no product delete shopping card
//at this point product number is undefined
//falsy value variable var gets hoisted
var numProducts = 10;

function deleteCartItems() {
    console.log('All products deleted!');
    
}

var x = 1;
let y = 2;
const z = 3;
//var variable created property in window object
consoele.log(x === window.x);
consoele.log(y === window.y);
consoele.log(z === window.z);

