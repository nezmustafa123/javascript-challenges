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
//   console.log(measureKelvin());
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
console.log(amplitudeBug);







//CHALLENGE

//Given an array of forecasted maximum temperatures, the thermometer displays a
//string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
//days ... 21oC in 2 days ... 23oC in 3 days ..."

//1) Understanding the problem
//-- Break array up into elements and put dots before each one as a sperator
//--transform to string seperated by ..
//days are index plus 1
//2) Break up into sub-problems
//--Transform array into string
//--each element transform to a string with degrees celsius
//-- strings need oto contain day (index + 1)
//-- add ... between elements and start and end of string

const data1 = [17, 21, 23]
const data2 =  [12, 5, -5, 0, 4]

const printForecast = (arr) => {
    
    let str = '';
    //creat initial string
    //add multiple string to main string each iteratoin because string plus number is always string
    for(let i  = 0; i < arr.length; i++) {
        str = str + `${arr[i]}oC in ${i + 1} days ... `;
    }
    
    console.log('...' + str);
    
};

printForecast(data1)

























