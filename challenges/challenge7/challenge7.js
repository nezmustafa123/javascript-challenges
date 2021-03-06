//objects

//give elements a name as opposed to using an array

//key/property value pairs
const nezObject = {
   firstName: 'Nez',
    surName: 'Mustafa',
    age: 2037- 1991,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven']
};


//many ways of creating objects


//retrieve data from objects and change data using dot and bracket notation

console.log(nezObject);

console.log(nezObject.surname);

//will give the surname the dot is an operator


//can also use bracket notation have to insert an expression into the bracket
//specify string with property key


//can also compute the string though an operation
//store recurring part of key in a variable and create a new expression 


console.log(nezObject.firstName);

const nameKey = 'Name';
//recurring part of key
console.log(nezObject['first' + nameKey]);

console.log(nezObject['sur' + nameKey]);

//execute the plus operation in the brackets then retrieve the property

//use final property name not computed one when using dot notation


//when having to compute something use the braacket notation

//get something from user interface using prompt

const interestedIn = prompt("What do you want to know about Nez? Choose between firstName, lastName, age, job, and friends");

//display input in the console

//nezObject.interestedIn wont work theres no key called interestedIn


//use brackets notation javascript will convert the variable to the valueOf

//expression evaluated inside the bracket


//handle undefined/falsy values

if(nezObject[interestedIn]) {//if true
    console.log(nezObject[interestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
};

//add properties values using dot and bracket notation

nezObject.location = 'London';
nezObject['twitter'] ='@nezmustafa';

//challenge 


console.log(`${nezObject.firstName} has ${nezObject.friends.length} friends and his best friend is ${nezObject.friends[0]}`);




//OBJECT METHODS
//OBJECTS HOLDING ARRAYS AND OBJECTS IN OBJECTS
//functions are just a value
//key value pairs add functions to objects 


const nezObject = {
    firstName: 'Nez',
    surName: 'Mustafa',
    birthYear: 1990,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
//    calcAge: function(birthYear) {
//    return 2021 - birthYear;
//   }
//    no need for parameter
    
    calcAge: function() {
        console.log(this);
        return 2021 - this.birthYear;
    }
};
//property of object
//function expression creates method


//property is equal to function value


console.log(nezObject.calcAge(1990));
//can access using brackets notation enclose it in brackets and string
console.log(nezObject['calcAge'](1991));


//use this keyword to use property value directly dry principle
//birthyear written in oneplace access directly through object by referencing it using 'this'
//this equal to object on which method is called
//left side of the dot 'nezObject'
//this refers to the object calling the method

//console.log(nezObject.calcAge());

//can instead calculate the age one store it in the object then retrieve the age as a property from the object

const nezObject = {
   firstName: 'Nez',
    surName: 'Mustafa',
    birthYear: 1990,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
//    calcAge: function(birthYear) {
//    return 2021 - birthYear;
//   }
    //no need for parameter
    
    calcAge: function() {
    // calculate age create new property on object and set it equal
        this.age = 2021 - this.birthYear;
        return this.age;
        //return the age property
        console.log(this);
    },
    //call calcAge in the string
    getSummary: function() {
       return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? `a ` : `no`} driver's license`;
     }
};


console.log(nezObject.calcAge());
console.log(nezObject.getSummary());



//BMI CHALLENGE using objects



const markObject = {
    firstName: 'Mark',
    surName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = ((this.mass) / (this.height ** 2));
        return this.BMI;
    }
    
};

const johnObject = {
    firstName: 'Jon',
    surName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = ((this.mass) / (this.height ** 2));
        return this.BMI;
    }
    
};


const markBMI = markObject.calcBMI();
const johnBMI = johnObject.calcBMI();
//john calling calc bmi this points to john object
console.log(markBMI);
console.log(johnBMI);


if(markObject.BMI > johnObject.BMI) {
    console.log(`Mark ${markObject.surName}'s BMI (${markObject.BMI}) is higher than John ${johnObject.surName}'s BMI (${johnObject.BMI})`);
} else if (johnObject.BMI > markObject.BMI) {
    console.log(`John ${johnObject.surName}'s BMI ${johnObject.BMI} is higher than Mark ${markObject.surName}'s BMI (${markObject.BMI})`);
}














