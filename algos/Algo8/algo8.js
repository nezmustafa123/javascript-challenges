function fearNotLetter(str) {
  //return ascii value of all letters
  const arr = str.split('').map(letter =>
  //just one letter so enter 0 as argument
   letter.charCodeAt(0));

   for(let i = 0; i < arr.length-1; i++) {
     console.log(arr[i]);

     if(arr[i] + 1 !== arr[i+1]) {
       return String.fromCharCode(arr[i] +1);
     }
   }
  return undefined;
}

fearNotLetter("abce");