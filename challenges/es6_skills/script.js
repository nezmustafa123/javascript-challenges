'use strict';


//DESTRUCTURING ARRAYS

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //two parameters one index for starter menu one index for main menu person will order giving index for each menu
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 12,
            close: 24,
        },
    },
    order: function(starterIndex, mainIndex) {
        //starter menu at position starter index main menu at position mainindex
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    //destructure straight away
    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time ='20.00', address ='Mutrix Road' }) {
        //set default values if object can't be destructured fully
        //4 property names in the object
        //4 variable names available in the functoin now
    console.log(`Order receieved! ${this.starterMenu[starterMenu]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
},
    //instead of defining parameters manuall pass object into function function can destructure object
};
//pass in object of options
//one argument one object
//destructured in function//doesnt have to match the order but has to match the name
restaurant.orderDelivery({
    time: '22.30',
    address: 'Abbey Road',
    mainIndex: 2,
    starterIndex: 2,
});
//call with default values

restaurant.orderDelivery({
    starterIndex: 1
    //will use default values passed into the function
});




//unpacking values from an array or object into seperate variables 
//break down large data structures into smaller data structures like variable

//without destructiring retrieve
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//destructure array es6
//declatre 3 variables at the same time
//unpack first variable x is first element second y is second element third z is third element
//destructuring assignment
const [x, y, z] = arr;
console.log(x, y, z);

console.log(arr);

//same array unaffected

//take some elements out of categories
//the order of elements matters
//put them into variables at the same time
//destructure will follow same order out of categories array
const [first, second] = restaurant.categories;

console.log(first, second);
//if want to skip leave a whole

const [firstagain, ,secondagain] = restaurant.categories;
//second element skipped second becomes third
console.log(firstagain, secondagain);



//can use to swtich variables say restaruant wanted to switch main and secondary categories

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//without destructuring 
//would do something like this 
//create temporary variable
const temp = main;
//italian
main = secondary;
//italian becomes vegetarian
secondary = temp;
//vegetarian becomes italian

console.log(main, secondary);


//use destructuring new array two variables inverted
//don't need let or const
[main, secondary] = [secondary,main];

//function returning array then immdietely destruct array into variables
//recieve array and destructure

console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);
//nested arrays
const nested = [2, 4, [5, 6]];
//const [i, ,j] = nested;
console.log(i, j);

//get all values destructuring within destructuring

const [i, ,[j, k]] = nested;

console.log(i, j, k);


//default values
//const [p, q, r] = [8,9];
//will get undefined as third one array shorter than you think
//set default values instead


const [p = 1, q = 1, r = 1] = [8,9];
console.log(p, q, r);
//r will become one


//DESTRUCTURING OBJECTS
//order of object doesn't matter so don't need to manually skip elements like in array use curly braces because that's how you create objects

//three brand new variables 
const {name, openingHours, categories} = restaurant;

console.log(name, openingHours, categories)
//unpack the properties
//useful for apis


//change variable names make them different from property names reference them like before
//set variable names to something else using colon
const {
       name: restaurantName,
       openingHours: hours, 
       categories: tag,
      } = restaurant;
console.log(restaurantName, hours, tags);


//trying to aaccess property that doesn't exist
//set default values
//destructure menu set default menu
//get starter menu property set it to starters
const {menu = [], starterMenu: starters = []} = restaurant; 
//default value will apply to menu and not starter menu because it doesn't exist

console.log(menu, starters);

//mutate variables while destructuring object
let a = 111;
let b = 999;

const obj = {a : 23, b: 7, c: 14};

//can't do 
const {a, b} = obj;
//or 
let {a, b} = obj;

//because javascript expects a code block
//can't assign anything to a code block
//have to wrap everything in a parenthesis

({a, b} = obj);


//nested objects destructuring

const {sat} = openingHours;
console.log(sat);
//get opening and closing
//sat is opject
const {sat: 
       {open, close}
      } = openingHours;

//colon property names of ojbect 
//can also give new names to property like this
const {
    sat: { open: o, close: c },
    } = openingHours;

console.log(o, c);


//instead of defining parameters manuall pass object into function function can destructure object