'use strict'


const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];






dogs.forEach(dog => (dog.recPortion = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);