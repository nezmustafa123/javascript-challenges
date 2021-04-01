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
    console.log(`Order receieved! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
},
    //instead of defining parameters manuall pass object into function function can destructure object
    
    
    //function accepting multiple arguments then use spread operator to pass in those arguments
    //method to order pasta with three ingredients
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your flaming pasta with ${ing1}, ${ing2}, ${ing3}`);
    } 
    
    
    
    
    
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

//three brand new variables NAMES HAVE TO MATCH PROPERTY NAMES
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
//can set default values
//destructure menu set default menu
//get starter menu property set it to starters
const {menu = [], starterMenu: starters = []} = restaurant; 
//default value will apply to menu and not starter menu because menu doesn't exist

console.log(menu, starters);

//mutate variables while destructuring object
//let a = 111;
//let b = 999;

const obj = {a : 23, b: 7, c: 14};

//can't do 
//const {a, b} = obj;
//or 
//let {a, b} = obj;

//because javascript expects a code block
//can't assign anything to a code block
//have to wrap everything in a parenthesis

({a, b} = obj);
//set a to 23 and b to 7

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


//SPREAD OPERATOR

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); 
//get new array with three elements from the original array

const newArr = [1,2, ...arr];
//zpread operator expand array into all original elements
console.log(newArr);
//writes the elements individually
//take all elements out of arr array
//use spread operator when writing multiple values sperated by commas
const newArr = [1,2, arr];
//includes array in array


//can use spread operator on newArr log individual elemets out

console.log(...newArr);
//same as writing
console.log(1,2,7,8,9);
//get aray of elements indivisualy

//pass values as arguments into functions
//pass multiple elements into funciton


//create new array using restaurant main menu expans it and add element to it

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);
//spread operator doesn't create new variables
//can only use it in places where you'd write values sperated by commas

//copy array 

const mainMenuCopy = [...restaurant.mainMenu];

//shallow copy of array

//join array 

const menu = [...restaurant.mainMenu , ...restaurant.starterMenu];

console.log(menu);

//spread operator works on all ITERABLES

//strings mpas sets NOT objects

//use on a string
const str = 'Nez';
const letters = [...str, ' ', 'S.'];
//expand the string empty string and an s

console.log(letters);
//will list out letter in indivudual string each one is seperate element
//only use spread when building array or passing arguments into function
//can also do 
console.log(...str);


//can't do this
//console.log(`${...str} Mustafa`);


//function accepting multiple arguments then use spread operator to pass in those arguments
//get ingredients from promt window
// call prompt three times put result prompts into an array
const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
                     prompt('Ingredient 2?'),
                     prompt('Ingredient 3?'),
                    ];


console.log(ingredients);
//see the array

//call method
//old way
restaruant.orderPasta(ingredients[0],ingredients[1], ingredients[2]);
//new way
restaurant.orderPasta(...ingredients);


//spread operator also works on objects even though they're not iterables



//create new restaurant object
//spread old restaurant into new
const newRestaurant = {foundedIn: 1997, ...restaurant, founder: 'Mario'};

console.log(newRestaurant);

//crate shallow copies of objects instead of using object assign

const restaurantCopy = {...restaurant};
restaurantCopy.name 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);

//names are different so it created a seperate copy




//REST OPERATOR

//same syntax as spread collect multiple elements condense them into an array
//opposite of spread



const arr = [1,2, ...[3,4]];
//SPREAD because on right and side of assignment operator

const [a,b, ...others] = [1,2,3,4,5];
//REST because on left hand side of operator
console.log(a,b, ...others);

//rest and descturturing collects elements unused by destructuring
//corrals all the rest of the elements into one array 
//must be the last in the destructuring assignment other wise javascript won't know when to stop.

//skip variable 'pasta'
//can only be one rest in any destructuring assignment
 const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
 ];


//objects

//remaining elements will be collected into new object
//select only saturday opening hours the rest should go into weekdays

const {sat, ...weekdays} = resataurant.openingHours;
console.log(weekdays);
//collects the rest of the properties inside object 
//apart from saturday



//functions

//spread operator second use case pass multiple arguments into function at the same time

//add arbitary amount of arguments into function

const add = function(...numbers) {
//use rest parameters    
    console.log(numbers);
    //they are arrays
    //take multiple values packs them all into one array 
    //condensed
    //spread operator expands
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log(sum);
    }
};

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);







































