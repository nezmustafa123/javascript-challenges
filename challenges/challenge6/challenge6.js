const friend1 = "Jim";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Michael', 'Steven', 'Peter'];


const y = new Array(1991, 1984, 2008, 2020);

//console.log(friends[0]);
//console.log(friends[2]);
//
//console.log(friends.length);
//console.log(friends[friends.length-1]);

friends[2] = 'Jay';
//console.log(friends);

const firstName = 'Jonas';

const nez  = ['Nez', 'Mustafa', 2021 - 1990, 'dev', friends];

//replaced with values the expressions produce

//console.log(nez.length);



//exercise 
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

//use calcage function on individual elements
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];


console.log(ages);