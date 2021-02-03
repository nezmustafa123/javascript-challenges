function spinalCase(str) {

const splitStr = str.split(' ');
console.log(splitStr);
const lowerCase = splitStr.map(word => word.toLowerCase());

const joined = lowerCase.join('-');



  return joined;
}

console.log(spinalCase('This Is Spinal Tap'));