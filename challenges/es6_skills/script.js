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
            open: 0,
            close: 24,
        },
    },
    order: function(starterIndex, mainIndex) {
        //starter menu at position starter index main menu at position mainindex
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

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
const [starter, maincourse] = restaurant.order(2,0);
console.log(starter, mainCourse);
//nested arrays
const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;
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












