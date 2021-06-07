'use strict'


//[5, 2, 4, 1, 15, 8, 3];
//[16, 6, 10, 5, 6, 1, 4];

//create the function inside variable pass in array THEN call the map method returning values in new variable as an array
const calcAverageHumanAge = function(ages) {
    
        const humanAge = ages.map(function(age){
          return age <= 2 ? 2 * age : (age * 4) + 16; 
        });
 
       const dogsEighteen = humanAge.filter(function(age){
           return age => 18; 
       });
    
     
    console.log(humanAge);
    console.log(adults);
    
//    const average = adults.reduce(function(acc, age){
//        (acc + age)/adults.length
//        //divide sum by length of array
//    }0);
    
    //can also do
     const average = adults.reduce(function(acc, age, i, arr){
        acc + (age/arr.length);
        //divide age on each iteration by arr length use arr for chaining 
    }0);
    
    
    
    return average;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);