//!   //debugging skills
    
    //IDENTIFY
    //be aware there is a bug
    //during development
    //testing software
    //user reports during production
    //idendify the contect i.e broswers
    
    
    //FIND
    //isolate where the bug is happening
    //developer console for small bugs
    //debugger for larger ones
    
    //FIX
    //replace wrong solution with correct solution
    
    //PREVENT 
    //using testing software
    //search for same bug in similar code
    
    
    
    //debugging in practice
    
    //fix bug using console
    
    
    
    //measurement using kelvin
//    
//    const measureKelvin = function() {
//        //object inside function
//        const measurement = {
//            type: 'temp',
//            unit: 'celsius',
//            value: Number(prompt('Degrees celsius:')),
//            //prompt returns string
//        };
//        
//        console.log(measurement.value);
//        //B) FIND returns table of object
//        console.table(measurement);
//        //can also do 
////     console.warn(measurement.value);
////     console.error(measurement.value);
//        
//     //convert to kelvin
//        const kelvin = measurement.value + 273
//        return kelvin;
//    };
//
////   A) IDENTIFY
//    
//    
//    
//    console.log(measureKelvin());
//


//USING A DEBUGGER

const calcTempAmplitudeBug = function (temps1, temps2) {
    
//    const array1 = ['a', 'b', 'c'];
//    const array2 = ['d', 'e', 'f'];
//    const array3 = array1.concat(array2);
    //create new array name of cpmplete array in function
    const temps = temps1.concat(temps2);
    
    //say you made a mistake here
    //will give error 
    let max = 0;
    let min = 0;
    //assume max value of array is first element
    //loop through
    for ( let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        
        //ignore the error with continue don't include strings
        
        if(typeof curTemp !== 'number') continue;
        //skip current iteration
        debugger;
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

const amplitudeBug = calcTempAmplitudeBug([3,4,5,2], [10, 3, 9]);
//A) IDENTIFY
console.log(amplitudeNew);





































