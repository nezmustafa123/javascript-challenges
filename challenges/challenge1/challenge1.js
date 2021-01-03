//const markMass = 78;
//const markHeight = 1.69;
//const johnMass = 92;
//const johnHeight = 1.95;




const markMass = 85;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / (johnHeight * johnHeight);

const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);

