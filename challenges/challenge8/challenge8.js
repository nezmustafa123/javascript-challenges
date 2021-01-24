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



//dynamically calulated array length
for (let i = 0; i < nezArray.length; i++) {
    //reading from nez array
    console.log(nezArray[i], typeof nezArray[i]);
    
    //looping two arrays at the same time
    //based on original array
    //inserting type of the index from first array into second array to fill it
    types[i] = typeof nezArray[i];
    
    //can also do
    types.push(typeof jonas[i]);
}

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

