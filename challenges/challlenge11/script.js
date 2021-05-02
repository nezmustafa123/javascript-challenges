const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'],
]);



const events = [...new Set(gameEvents.values())];
//.values retruns map iterator 
//convert to set to get unique values 
//use spread to unpack into array
console.log(gameEvents.delete(64));

const average = 90 / gameEvents.size;
//const str = `An event happened on average every ${average} minutes`

console.log(`Event happened every ${90/gameEvents.size} minutes`)

//get last value of map


const time = [...gameEvents.keys()].pop();
//get last value using pop method pop method returns deleted elemement
//use the last element (92) to compute average

console.log(`Event happened every ${time/gameEvents.size} minutes`)


for(const [minute, event] of gameEvents.entries()) {
    if(key <= 45) {
        console.log(`[1st HALF] ${minute}: ${event}`);
    } else if(key >= 45) {
       console.log(`[2nd HALF ] ${minute}: ${event}`);
    }
};


//can also do 

for(const [minute, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`${half} HALF ${min}: ${event}`);
};