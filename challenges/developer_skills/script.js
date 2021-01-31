'use strict'


//PROBLEM 
//work for a company building smart home thermometer given array of temperatures of one day calculate temperature amplitude sometimes there may be a sensor error

const termperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1 understand the problem 
// what is temp amplutude difference between highest and lowest temp
/// compute max and min temperatures
//what's a sensor error
// break up into sub problems
//how to ignmore errors
//find max and min value in temp array
//find min value in temp array
//take away min from max and return it

//create function 

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    //assume max value of array is first element
    //loop through
    for ( let i = 0; i < temps.length; i++) {
        if(temps[i] > max) {
            //if current position is greater than maximum value it will be maximum
            max = temps[i];
        } 
        console.log(max);
    }
};


calcTempAmplitude([3, 7, 5]);