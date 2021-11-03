// //ASYNC javasdcript

// //synchronous example

// const p = document.querySelector(".p");
// p.textContent = "My name is Nez!";
// alert("Text set");
// p.style.color = "red";
// //have to wait for alert to finish

// //asynchronous code example

// const p = document.querySelector(".p");
// setTimeout(function () {
//   p.textContent = "My name is Nez!";
// }, 5000);
// p.style.color = "red";
// // async code executed after task that runs in background finishes
// // 'non-blocking'

// //callback doesn't make code asynchronous only certain functions like timeout make code asynchronous

// const img = document.querySelector(".dog");
// img.src = "dog.jpg";
// img.addEventListener("load", function () {
//   img.classList.add("fadeIn");
// });

// p.style.width = "300px";
//src attribute set asynchronously
//image will be faded in once the image is completely loaded and load event is emitted
//once image is loaded it's displayed load event is emitted and callback function called
//event listeners to not make code asynchronous
//IMAGE LOADS ASYNCHRONOUSLY IN BACKGROUD

//AJAX allows communication with web servers to get data asynchronously without blocking
//happens asynchronously get requests and posts reguests etc
//server has web api with data we're asking for
//api piece of software used by another piece of software to allow apps to exchange information and data
//eg dom api geolocation api self contained pieces of software allowing other software to interact class api also
//online api recieves requests for data and sends it back to client as response

console.log("test start");

setTimeout(() => console.log("0 sec timer"), 0);
//will call this timer function after 0 seconds

//promise that resolves immedietely using promise resolve
//callback gets called with resolved value returned from promise
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
//promise.resolve resolves immeditely
//simulate promise taking a long time give callback function a heavy task
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 10000000000; i++); //large loop
  console.log(res); //microtask it contains in the queue takes a long time, timeout callback takes more than 0 seconds now
});
console.log("Test end");
//two console logs in the top level code in gloval execution context will run first first two logs will come from synchronous logs

//timers callback put into callback queue first callback of resolved promise put into microtasks queue
//microtasks queue has priority and will be executed  first
//if microtask takes a long time the regular callback in callback queue will be delayed

//Building promises
//promise constructor function takes in one executor function promise constructor will execute the function

const lotteryPromise = new Promise(function (resolve, reject) {
  //function will contain async behaviour trying to handle with promise will return resolved value
  if (Math.random() >= 0.5) {
    //random number between 0-1
    //simulate winning lottery 50% of the time
    //in this situation the lottery is won
    //fulfilled promise call the resolve method
    resolve(`Congrats you WIN`); //fullfilled value will get consumed with then method whatever passed in is r
  } else {
    //mark promise being rejected pass in error message handled in catch method
    reject(`You lost better luck next time`); //message will be available in the catch method
  }
}); //promise needs to end up in one of the two states

//consume promise that built

lotteryPromise.then((res) => console.log(res)).catch((err) => console.err(err));
//promise object
