const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',
],
],
score: '3:0',
scored: ['Lewandowski', 'Gnarby', 'Alaba'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
};

//one big array that contains to arrays in them 
//so put each into two variables

const [players1, players2] = game.players;

//console.log(players1);
//console.log(players2);

const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

const [allPlayers] = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Cutinho', 'Perisic'];

//const {team1, x:draw, team2} = game.odds;
//console.log(draw);

//can also do inside the odds object
const {odds : {team1, x:draw, team2}} = game;



const printGoals = function(...players){
    //players becomes array that you can use in function
    console.log(`${players.length} goals were scored`)
};

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
printGoals(...game.scored);
printGoals(game.scored);
//will only print one goal scored because it is one argument
//so have to unpack


team1 < team2 && console.log('Team 1 is more likely to win');
//if odds if team one less team one is less likeyl to win
//if true evaluation continues
team1 < team2 && console.log('Team 1 is more likely to win');
//if odds of team 2 less team two more likely to win

//destruct the nested arrays inside the larger game.scored.entries array

for(const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}


//get the VALUES of game odds object NOT the keys
const odds = Object.values(game.odds);
let average = 0;
//odds is an array

//for of loop
for (const odd of odds) {
    average += odd;
 //length is three
}

//length is three
average /= odds.length;
//divide by three reassign
console.log(average);

//object entries destructure variable names for object use object.entries
//odds and game object have same property names team 1 team 2
for (const [team, odd] of Object.entries(game.odds)) {
    //entire game object reference team property which is also the same in the odds object
    const teamStr = team === 'x' ? 'draw' : `Victory for ${game[team]}`;
    console.log(`Odd of  ${teamStr} ${odd}`
     //will print out team name and odd
}
























