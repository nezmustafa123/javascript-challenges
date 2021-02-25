
const pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};

    //propertyname has to be the value 
//return an array with the iterated item and the item(key's) value
function pairElement(str) {
  return str.split('').map(item => (
 [item, pairs[item]]
  ));
}

console.log(pairElement("GCG"));