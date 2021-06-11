'use script'



//[5, 2, 4, 1, 15, 8, 3];
//[16, 6, 10, 5, 6, 1, 4];

//create the function inside variable pass in array THEN call the map method returning values in new variable as an array
const calcAverageHumanAge = (ages) => 
    ages
        .map(age => (age <= 2 ? 2 * age : age * 4 + 16)) //on result of this filter 
        .filter(age => age >= 18) //on result of this reduce
        .reduce((acc, age, i, arr) => acc + age/arr.length,0); //only was of calculating average diving age by length of current array on each iteration
       //didn't store array in variable so need to get the resultant arraay in parameter
    

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2);