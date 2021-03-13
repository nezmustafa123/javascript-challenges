//function spinalCase(str) {
//
//const splitStr = str.split(' ');
//console.log(splitStr);
//const lowerCase = splitStr.map(word => word.toLowerCase());
//
//const joined = lowerCase.join('-');
//
//
//
//  return joined;
//}
//
//console.log(spinalCase('This Is Spinal Tap'));


function spinalCase(str) {
//find uppercase and put space in between uppercase words
const replacedStr = str.replace(/([A-Z])/g, ' $1')
.trim()
.split(/[\W_]/)
.filter(item => item !== '')
.map(item => item.toLowerCase())
.join('-');
console.log(replacedStr);
// const lowerCase = splitStr.map(word => word.toLowerCase());

// const joined = lowerCase.join('-');



  return replacedStr;
}

console.log(spinalCase('This Is Spinal Tap'));