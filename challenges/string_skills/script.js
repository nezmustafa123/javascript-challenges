const airline = 'Virgin Atlantic';
const plane = 'B747';

//get charachter string certain position

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
//works with string
console.log('B747'[0]);

console.log(airline.length);
//
console.log('B747'.length);

//strings are also 0 based

console.log(airline.indexOf('n'));
//gives five, the first occurence of n
console.log(airline.lastIndexOf('n'));
//second occurence of n spaces also count as characters
console.log(airline.indexOf('Atlantic'));
//case sensitive //if spelled wrong will return -1

//slice method extract parts of string
//needs arguments

console.log(airline.slice(7));
//position from which is starts to subtract returns a new string
//sub string doesn't change the underlying string
//strigs are primitives so cannot mure them
//have to store it in a variable or data structure

//specify end parameter
//STOPS before the end value
console.log(airline.slice(7, 13));
//gives Atlantic
//length of string is end minus beginning

//don't have to hard code values
//slice up to space get the first word
console.log(airline.slice(0, airline.IndexOf(' ')));
//extract from 0 to space
//virgin 
console.log(airline.slice(airline.lastIndexOf(' ')) + 1);
//extract last word atlantic //if space is included just add + 1

console.log(airline.slice(-2));
//start extracting from the end two from the end

console.log(airline.slice(1, -1));
//begins and the start cuts off last character 

//function that recieves seat and returns whether it's a middle set or not


const checkMiddleSeat = function(seat) {
    //b and e are middle seats
    //get last character of a string enter -1 as begininng character
    //chuck it into a variable
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') {
        console.log(`Sorry you got the middle seat`);
    } else {
        console.log(`You got lucky`);
    }
};

//strings are primitives but have methods anyway
//javsdcript converts string primitive to string object
//called 'boxing'.

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('11B');

console.log(new String('Nez'));

console.log(typeof new String('Nez'));
//object
//javscript converts object back to string primitives
console.log(typeof new String('Nez').slice(1));
//string

const airline = 'British Airways';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


//can use directly on string

console.log('British Airways'.toLowerCase());

//for first letter capitlization in name

const passenger = 'NeZ';
//everything to lowercase first
const passengerLower = passenger.toLowerCase();

//take first letter in string and put parts together

const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
//take from index one to the end of string



//comparing emails

const email = 'hello@nez.io';
const loginEmail = 'Hello@NEz.Io \n';

const lowerEmail = loginEmail.toLowerCase();
//to lowercase
//get rid of whitespace using trim

const trimmedEmail = lowerEmail.trim();


console.log(trimmedEmail);
//will be normal

//because methods return new string so can chain them

const normalizeEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);



//replacing
const priceGB = '288,97£';

const priceUS = priceGB.replace('£', '$').replace(',', '.');
//chain the methods replace comma with dot

const announcement = 'All passengers come to boarding door 23. Boarding door23!';

console.log(announcement.replace('door', 'gate'));
//replaces the first instance only


console.log(announcement.replaceAll('door', 'gate'))

console.log(announcement.replace(/door/g, 'gate'))

//can use regular expression instead 

//booleans 

const plane = 'A320neo';
console.log(plane.includes('A320'));
//true

console.log(plane.includes('Boeing'));
//false

console.log(plane.startsWith('Air'));
//true
console.log(plane.startsWith('Arb'));
//false



if(plane.startsWith('Airbus')&& plane.endsWith('neo')) {
    console.log('Part of new Airbus Family');
    
};

//excercie


const checkBaggage = function(items) {
    //convert to lowercase first
  const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun'));
    {
        console.log('You are NOT allowed on board');
        
    } else {
        console.log('welcome aboard!');
    }
};

checkBaggage('I have a Laptop, some Food and a pocket Knife');

checkBaggage('Camera ');

checkBaggage('Go some snacks and a pistol for protection');



//STRING split




console.log('a+very+nice+string'.split('+'));
//specify divider string split up string by the plus sign and put elements in array

console.log('Nez Mustafa'.split(' '));

//split string by the space put each elementin arrray


//destructure to create variables direcly

const [firstName, lastName] = 'Nez Mustafa'.split(' ');

//creates array with two elements first one in first name second one in lastname
















