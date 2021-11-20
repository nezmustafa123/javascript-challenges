const budget = [
  { value: 250, description: "Sold old TV 📺", user: "Nez" },
  { value: -45, description: "Groceries 🥑", user: "Nez" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "Nez" },
  { value: 300, description: "Freelancing 👩‍💻", user: "Nez" },
  { value: -1100, description: "New iPhone 📱", user: "Nez" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "Nez" },
];
//budget with expenses and credits
const spendingLimits = {
  Nez: 1500,
  matilda: 100,
};
//spending limits object

const getLimit = (user) => {
  //refactor
  return spendingLimits?.[user] ?? 0;
};
const addExpense = function (value, description, user = "Nez") {
  //if (!user) user = "Nez"; //like setting a default parameter
  user = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // const limit = getLimit(user);
  //optional chaining with nullish coalescing operator
  //if poperty exists then returns that if not returns 0
  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user }); //property name is the same as value name
  }
};
addExpense(10, "Pizza 🍕");
addExpense(150, "Going to movies 🍿", "Matilda");
addExpense(200, "Stuff", "Jim"); //limit of jay will be zero
addExpense(5000, "White powder");

console.log(budget);

const checkExpenses = function () {
  //loop though budget see if entry value exceeds spending limit for each user
  for (const entry of budget) {
    // let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }

    //const limit = spendingLimits?.[entry.user] ?? 0;
    //if spending limit for each use exists then returns the value into the limit variable for each iteration
    if (entry.value < -getLimit(entry.user)) {
      //put it direcly in the if statement entry.user is now the user
      entry.flag = "limit";
    }
  }
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = "";
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-3)} / ` : "";
    // if (entry.value <= -bigLimit) {
    //   output += `${entry.description.slice(-3)} / `; // Emojis are 2 chars
    //   // console.log(output);
    // }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
console.log(budget);
logBigExpenses(100);
