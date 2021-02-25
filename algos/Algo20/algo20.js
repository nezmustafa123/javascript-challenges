var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
 let [first,last] = firstAndLast.split(' ');

console.log(first, '----', last)


  this.getFullName = function() {
    return first + ' ' + last;
  };
  this.getFirstName = function() {
   return first;
  }


this.getLastName = function() {
    return last;
}

this.setFirstName = function(_first) {
   first = _first;
}
this.setLastName = function(_last) {
   last = _last;
}
this.setFullName = function(_firstAndLast) {
  [first, last ] = _firstAndLast.split(' ');
}
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());