const poll = {
question: "What is your favourite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++", "4: PHP"],
// This generates [0, 0, 0, 0]. More in the next section!
answers: new Array(4).fill(0),
registerNewAnswer () {
    //put the answer from prompt into variable join options array by new line into one string
    //convert to number
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`));  
    //check type of answer and if it's less than answers length
     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    //short circuit using the and operator and increment by one instead of if statement
    
    this.displayResults();
    this.displayResults('string');
    
},
    
    //use dfault parameters to set the type
 displayResults(type = 'array') {
     if(type === 'array') {
         //if type is array console log the answers
        console.log(this.answers);
         
        } else if (type ==='string') {
            //print string
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
 },
    
};




poll.registerNewAnswer();
//formatting works

//use bind to get the this keyword to point to object
document
    .querySelector('.button')
    .addEventListener('click', poll.registerNewAnswer.
    bind(poll));
//bind method returns new function