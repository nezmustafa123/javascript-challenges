'use strict'


//PROBLEM 1
//work for a company building smart home thermometer given array of temperatures of one day calculate temperature amplitude sometimes there may be a sensor error

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

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
    let min = temps[0];
    //assume max value of array is first element
    //loop through
    for ( let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        
        //ignore the error with continue don't include strings
        
        if(typeof curTemp !== 'number') continue;
        //skip current iteration
        if(curTemp > max) {
            //if current position is greater than maximum value it will be new maximum
            max = curTemp;
        } 
        if(curTemp < min) {
//            if current element less than mimumim should become new min
            min = curTemp;
        }
    }
        console.log(max, min);
    return max - min;
};

//call it with array variable name

const amplitude = calcTempAmplitude(temperatures);

//console.log(amplitude);

//PROBLEM 2
//function should recieve two arrays of temps not one
//just merge two arrays at beginning








const calcTempAmplitudeNew = function (temps1, temps2) {
    
//    const array1 = ['a', 'b', 'c'];
//    const array2 = ['d', 'e', 'f'];
//    const array3 = array1.concat(array2);
    //create new array name of cpmplete array in function
    const temps = temps1.concat(temps2);
    
    
    let max = temps[0];
    let min = temps[0];
    //assume max value of array is first element
    //loop through
    for ( let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        
        //ignore the error with continue don't include strings
        
        if(typeof curTemp !== 'number') continue;
        //skip current iteration
        if(curTemp > max) {
            //if current position is greater than maximum value it will be maximum
            max = curTemp;
        } 
        if(curTemp < min) {
//            if current element less than mimumim should become new min
            min = curTemp;
        }
    }
        console.log(max, min);
    return max - min;
};

//call it with array variable name

const amplitudeNew = calcTempAmplitudeNew([3,4,5,2], [10, 3, 9]);

console.log(amplitudeNew);
