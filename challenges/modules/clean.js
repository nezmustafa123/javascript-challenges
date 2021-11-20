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

const addExpense = function (value, description, user = "Nez") {
  //if (!user) user = "Nez"; //like setting a default parameter
  user = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  if (value <= limit) {
    budget.push({ value: -value, description: description, user: user });
  }
};
addExpense(10, "Pizza 🍕");
addExpense(100, "Going to movies 🍿", "Matilda");
addExpense(200, "Stuff", "Jim"); //limit of jay will be zero
console.log(budget);

const check = function () {
  for (const el of budget) {
    let lim;
    if (spendingLimits[el.user]) {
      lim = spendingLimits[el.user];
    } else {
      lim = 0;
    }

    if (el.value < -lim) {
      el.flag = "limit";
    }
  }
};
check();

console.log(budget);

const bigExpenses = function (limit) {
  let output = "";
  for (const el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-3) + " / "; // Emojis are 2 chars
      console.log(output);
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

bigExpenses(1000);
