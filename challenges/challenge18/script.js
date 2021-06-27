'use strict'

//1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
//the recommended food portion and add it to the object as a new property. Do
//not create a new array, simply loop over the array. Forumla:
//recommendedFood = weight ** 0.75 * 28. (The result is in grams of
//food, and the weight needs to be in kg)
//2. Find Sarah's dog and log to the console whether it's eating too much or too
//little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
//the owners array, and so this one is a bit tricky (on purpose) 🤓
//3. Create an array containing all owners of dogs who eat too much
//('ownersEatTooMuch') and an array with all owners of dogs who eat too little
//('ownersEatTooLittle').
//4. Log a string to the console for each array created in 3., like this: "Matilda and
//Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
//too little!"
//5. Log to the console whether there is any dog eating exactly the amount of food
//that is recommended (just true or false)
//6. Log to the console whether there is any dog eating an okay amount of food
//(just true or false)
//7. Create an array containing the dogs that are eating an okay amount of food (try
//to reuse the condition used in 6.)
//8. Create a shallow copy of the 'dogs' array and sort it by recommended food
//portion in an ascending



const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];



//1.
dogs.forEach(dog => (dog.recPortion = Math.trunc(dog.weight ** 0.75 * 28)));
//each element add new property
console.log(dogs);


//2.
//each object is a dog find method have to return true or false find method will return first element for which condition is true
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

console.log(sarahDog);
console.log( //if curfood greater than recfood much if not little
    `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
}`
);

//3.  first returns array of two object
const dogOwnersTooMuch = dogs.filter(dog => dog.curFood > dog.recPortion).flatMap(dog => dog.owners);

console.log(dogOwnersTooMuch);

const dogOwnersTooLittle = dogs.filter(dog => dog.curFood < dog.recPortion).flatMap(dog => dog.owners);

console.log(dogOwnersTooLittle);





//4. take arrays and join them with seperator string 'and'
console.log(`${dogOwnersTooMuch.join(' and ')}'s  dogs eat too much!`);
console.log(`${dogOwnersTooLittle.join ('and')}'s dogs eat too little!`);

//5. see if any dog is eating exactly rec food

console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6. 

const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));


//7 use filter method create new array

console.log(dogs.filter(checkEatingOkay));

//8

//sort by ascending order

const dogsSorted = dogs.slice().sort((a,b) => {
    a.recFood - b.recFood
    //have numbers in objects get them out of there
});

console.log(dogsSorted);

