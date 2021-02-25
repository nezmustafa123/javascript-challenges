function translatePigLatin(str) {
//   const firstChar = str.charAt(0);
// console.log(firstChar);
//  let stringSplit;
//  let stringShift;
//  let piggedString;
//   if(firstChar !== 'a' && firstChar !== 'e' && firstChar !== 'i' && firstChar !== 'o' && firstChar !== 'u') {
//   stringSplit =  str.split('');
//   stringShift = stringSplit.shift();
//   }
//   return stringSplit;
const regex = /^([^aeiou]+)(.*)/;
if(regex.test(str)) {
 str = str.replace(/^([^aeiou]+)(.*)/, '$2$1ay');
} else {
  str += 'way';
}
  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("blackpill"));