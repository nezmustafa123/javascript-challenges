//for loop 
//control structure
//repeat the sme thing over and over again

console.log('Lifting weights rep 1');
console.log('Lifting weights rep 2');
console.log('Lifting weights rep 3');
console.log('Lifting weights rep 4');
console.log('Lifting weights rep 5');
console.log('Lifting weights rep 6');
console.log('Lifting weights rep 7');
console.log('Lifting weights rep 8');

//three parts of for statement
//for loop has a counter
//initialise counter with let
//initialisation, condition, incrementation
//counter will be incremented before each iteration of loop

//for loop keeps running while condition is true
//each iteration rep counter will increase
//when condition is false loop will stop
//use rep variable
for(let rep = 1; rep <= 10; rep ++) {
     console.log(`Lifting weights rep ${rep}`);
}




//
//const nezArray = [
//  'Nez',
//   'Mustafa',
//    2037-1990,
//    'developer',
//    ['Micahel', 'Peter', 'Steven'],
//    true,
//];

const types = [];



////dynamically calulated array length
//for (let i = 0; i < nezArray.length; i++) {
//    //reading from nez array
//    console.log(nezArray[i], typeof nezArray[i]);
//    
//    //looping two arrays at the same time
//    //based on original array
//    //inserting type of the index from first array into second array to fill it
//    types[i] = typeof nezArray[i];
//    
//    //can also do
//    types.push(typeof jonas[i]);
//}

//create new arrays with certain variable types based on values of original array
console.log(types);



const years = [1991, 2007, 1969, 2020];
const ages = [];
//ca;culate age and populate using new loop
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
    //can also do
//    2037-years[i] = ages[i];
}
console.log(ages);

//continue and break

//continue exit current iteration
console.log('----ONLY STRINGS----')
for (let i = 0; i < nezArray.length; i++) {
    //reading from nez array
    if(typeof nezArray[i] !== 'string') continue;
//    current iteration skips if not string
    console.log(nezArray[i], typeof nezArray[i]);
  
}
//print elements to array that are strings


//break terminates loop

console.log('----BREAK OUT IF NUMBER----')
for (let i = 0; i < nezArray.length; i++) {
    //reading from nez array
    if(typeof nezArray[i] === 'number') break;
//    current iteration skips if not string
    console.log(nezArray[i], typeof nezArray[i]);
  //once first number is found nothing else if printed
}


const nezArray = [
    'Nez',
    'Mustafa',
    2037- 1990,
    'Developer',
    ['Michael', 'Peter', 'Steven']
];


//loop backwards

// 0, 1, ... 4
// 4, 3, ... 0

//start at the last index
for(let i = jonas.length - 1; i >= 0; i -- ) {
    console.log(i, nezArray[i]);
}



//nested loops 
//loop inside loop

//three gym excercises repeat each of them 5 times
//15 reps 5 for each excercise

for (let excercise = 1; exercise < 4; excercise++ ) {
    console.log(`----------- Starting excercise ${excercise}`);
    
    
    
    //5 repetitions for each excercise loop within a loop
    //new loop created and executed
    
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${exercise} Lifting weight reptition ${rep}`);
    }
    
    
    
}




//while loop

for(let rep = 1; rep <= 10; rep ++) {
     console.log(`Lifting weights rep ${rep}`);
}

//will run while condition is true

let rep = 1;

while (rep <= 10) {
    console.log(`WHITE: Lifting weights repititon ${rep}`);
    //end of iteration increment
    
    rep++;
    
}

//while loop without condition or counter
//use when you don't know how many iterations you'll have

//roll a dice then keep rolling a dice till land on a six


let dice = Math.trunc(Math.random() * 6) +1;

console.log(dice);



//keep running loop till roll a six
//start with random dice number then create new one and check again
//inside the while loop
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    //reassign dice at end of each iteration
   dice = Math.trunc(Math.random() * 6) + 1;
    
    if(dice === 6) console.log('Loop is about to end..');

}






//CHALLENGE



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];




const calcTip = (bill) => {
    const tip = bill <= 300 && bill >= 50 ? (bill * 0.2) : (bill * 0.15);
    tips.push(tip);
}
const calcTotal = (bill, tip) => {
    totals.push(bill + tip);
}




for (let i = 0; i < bills.length; i++) {
calcTip(bills[i]);
};


for (let i = 0; i < bills.length; i++) {
calcTotal(bills[i], tips[i]);
};




console.log(tips);

console.log(totals);





const calcAverage = (arr) => {
    let sum = 0;
    for ( let i = 0; i< arr.length; i++) {
        sum += arr[i];
    }; 
    return sum/ (arr.length);
}

calcAverage(totals);

//can also do this for calcTips

for(let i =  0; i< bills.length; i++) {
    const tip = calcTip(bills[i]);
    //each iteration creates new tip variable
    
    tips.push(tip);
    totals.push(tip + bills[i]);
}

































