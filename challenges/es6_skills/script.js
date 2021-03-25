'use strict';


//destructuring arrays

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    stargerMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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



//can use to swtich variables say restaruant wanted to switch main and secondary first and second

const [main, , secondary] = restaurant.categories;
console.log(main, secondary);