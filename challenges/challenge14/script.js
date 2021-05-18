const poll = {
question: "What is your favourite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// This generates [0, 0, 0, 0]. More in the next section!
answers: new Array(4).fill(0),
registerNewAnswer () {
    //put the answer from prompt into variable join options array by new line into one string
    //convert to number
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`));  
     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    //short circuit using the and operator and increment by one
  },
    
};




poll.registerNewAnswer();
//formatting works