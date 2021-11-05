"use strict";
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

// console.log("test start");

// setTimeout(() => console.log("0 sec timer"), 0);
// //will call this timer function after 0 seconds

// //promise that resolves immedietely using promise resolve
// //callback gets called with resolved value returned from promise
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// //promise.resolve resolves immeditely
// //simulate promise taking a long time give callback function a heavy task
// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 10000000000; i++); //large loop
//   console.log(res); //microtask it contains in the queue takes a long time, timeout callback takes more than 0 seconds now
// });
// console.log("Test end");
// // two console logs in the top level code in gloval execution context will run first first two logs will come from synchronous logs

// //timers callback put into callback queue first callback of resolved promise put into microtasks queue
// //microtasks queue has priority and will be executed  first
// //if microtask takes a long time the regular callback in callback queue will be delayed

// //Building promises
// //promise constructor function takes in one executor function promise constructor will execute the function
// //creates new promise that gets stored in variable promise runs immediately

// const lotteryPromise = new Promise(function (resolve, reject) {
//   //function will contain async behaviour trying to handle with promise will return resolved value

//   setTimeout(function () {
//     console.log(`lottery draw taking place`);
//     if (Math.random() >= 0.5) {
//       //mark promise as either resolved or rejected
//       //random number between 0-1
//       //simulate winning lottery 50% of the time
//       //in this situation the lottery is won
//       //mark it as fulfilled/resolved promise call the resolve function
//       resolve(`Congrats you WIN`); //fullfilled value will get consumed with then method whatever passed in is r
//     } else {
//       //mark promise being rejected pass in error message handled in catch method
//       reject(new Error(`You lost better luck next time`)); //message will be available in the catch method
//     } //new error object
//   }, 10000); //promise needs to end up in one of the two states
// });

// //consume promise that built

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// // promise object
// // res will be string passed into resolve
// // err will be strong passed into reject function

// // promisifying setTimeout function
// const wait = function (seconds) {
//   //timer won't fail reject not required
//   //creating a function returning a promise
//   return new Promise(function (resolve) {
//     //no resolved value needed to be returned
//     setTimeout(resolve, seconds * 1000); //function to be called is resolve function
//   });
// };

// wait(6)
//   .then(() => {
//     console.log("I waited 6 seconds");
//     return wait(2); //return new promise inside the then method like before
//   })
//   .then(() => console.log("I waited for 1 second"));

// //promise gets resolved immedietley static method on promise constructor
// //pass in resolve value
// Promise.resolve("testing123").then((x) => console.log(x));
// Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

//Promisifying geolocation api

navigator.geolocation.getCurrentPosition(
  //offloaded in the background
  (position) => console.log(position),
  (err) => console.error(err)
);
//first callback gets access to posiion object
//asynchronous behaviour
console.log("getting position");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      //offloaded in the background
      (position) => resolve(position), //pass in position object get access to position pass it into resolve
      (err) => reject(err)
    );
  });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //current position automaticall calls callbacks and passes in objects
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));

//promise resolved as succesful then handled in the then handler

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const whereAmI = function () {
  getPosition().then((pos) => pos.coords);
  //get coords property

  //reverse geocoding function
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error(`problem with geocoding ${res.status}`);
      return response.json();
    })
    .then((data) => {
      //gets data which is resolved value
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok) throw new error(`Country not (${response.status})`);
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => console.error(`${err.message} X_X`));
};
// .catch((err) => {
//   console.log(err);
// });

// whereAmI(51.507351, 0.007758);
// whereAmI(48.8566, 2.3522);

btn.addEventListener("click", whereAmI);
