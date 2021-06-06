'use strict'


//[5, 2, 4, 1, 15, 8, 3];
//[16, 6, 10, 5, 6, 1, 4];


const calcAverageHumanAge = function(ages) {
    
        const humanAge = ages.map(function(age){
          return age <= 2 ? 2 * age : (age * 4) + 16; 
        });
 
    
    console.log(humanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);