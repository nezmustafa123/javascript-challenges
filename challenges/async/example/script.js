"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
//CALLBACK HELL

const renderCountry = function (data, className = "") {
  //dedault class name
  //once neighbouring country arrives will use this
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}"/>
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} million</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1; //turn container opacity to one
};

const renderError = function (msg) {
  //export rendering error
  //insert adjacent text
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

// //xml requests old scool of doing ajax calls
// const getCountryData = function (country) {
//   //silo code in function
//   const request = new XMLHttpRequest(); //create new hhtp request object put it into variable
//   request.open("GET", `https://restcountries.com/v2/name/${country}`); //open request
//   request.send(); //send request ajax call in background async can't set result into some variable because result not there yet
//   //FETCHED IN BACKGROUND
//   //the rest of the code keeps runniung while the api is contacted need callback function
//   //callback on request object for load event once data arrives callback will be called
//   request.addEventListener("load", function () {
//     //console.log(this.responseText); //this is request response is in response text
//     const [data] = JSON.parse(this.responseText); //convert it back to javascript object, as it's json (big string of text) destructure the big array
//     console.log(data); //array containing one object

//     const html = `<article class="country">
//     <img class="country__img" src="${data.flag}"/>
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} million</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// //can also do
// // console.log(request.responseText);

// getCountryData("GB");
// getCountryData("usa");
// getCountryData("Germany");
// getCountryData("Turkey");
// getCountryData("Brazil");
// getCountryData("France");
// getCountryData("Canada");
// getCountryData("Japan");
// getCountryData("Germany");
// getCountryData("Russia");

// //xml requests old scool of doing ajax calls
// const getCountryAndNeighbour = function (country) {
//   //data of neighbouring country result of first call
//   //silo code in function

//   //AJAX call country (1)
//   const request = new XMLHttpRequest(); //create new hhtp request object put it into variable
//   request.open("GET", `https://restcountries.com/v2/name/${country}`); //open request
//   request.send(); //send request ajax call in background async can't set result into some variable because result not there yet
//   //FETCHED IN BACKGROUND
//   //the rest of the code keeps runniung while the api is contacted need callback function
//   //callback on request object for load event once data arrives callback will be called
//   request.addEventListener("load", function () {
//     //callback
//     //console.log(this.responseText); //this is request response is in response text
//     const [data] = JSON.parse(this.responseText); //convert it back to javascript object, as it's json (big string of text) destructure the big array
//     //console.log(data); //array containing one object
//     //destructure the array recieved remove the brackets
//     //render country 1
//     renderCountry(data);

//     //get neighbour country (2)
//     const [neighbour] = data.borders;
//     //console.log(neighbour);
//     //if neighbour doesn't exist return immedietely
//     if (!neighbour) return;

//     //if it does exist
//     //AJAX call country (2)
//     const request2 = new XMLHttpRequest(); //second ajax call in first one dependant on first one
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     //second ajax call then load listener on the request
//     request2.addEventListener("load", function () {
//       //appears after the UK
//       // console.log(request2.responseText);
//       const data2 = JSON.parse(this.responseText);
//       //console.log(data2); //not an array anymore just one unique result country codes unique just one result
//       //call the rendercountry method at the end of the inner callback function
//       const [neighbour] = data2.borders;
//       renderCountry(data2, "neighbour"); //when it is a neighbour pass in neighbouring country

//       const request3 = new XMLHttpRequest();
//       request3.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//       request3.send();
//       request3.addEventListener("load", function () {
//         const data3 = JSON.parse(this.responseText); //convert it back to javascript object, as it's json (big string of text) destructure the big array
//         //console.log(data3); //array containing one object

//         //destructure the array recieved remove the brackets
//         //get neighbour country (3)
//         const [neighbour] = data3.borders;
//         // console.log(neighbour);
//         if (!neighbour) return;
//         //render country 3

//         renderCountry(data3, "neighbour");
//       });
//     });
//   });
// };

//can also do
// console.log(request.responseText);

// getCountryAndNeighbour("GB");
// getCountryData("usa");
// getCountryData("Germany");
// getCountryData("Turkey");
// getCountryData("Brazil");
// getCountryData("France");
// getCountryData("Canada");
// getCountryData("Japan");
// getCountryData("Germany");
// getCountryData("Russia");

//MORE CALLBACK HELL
//with settimeout messy hard to understand

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");

//     setTimeout(() => {
//       console.log("3 second passed");

//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//PROMISES AND FETCH API

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();
//fetch api
// const request4 = fetch("https://restcountries.com/v2/name/GB");
// console.log(request4);
//returns promise

//promise an object that is used as a placeholder for future result of an asynchronous operation

// async delivered value

// container for future value

//response coming from ajax call no value yet but will be in the future promise handles future value
//like a lottery ticket buying a promise that you'll recieve some amount of money on the future if guess correct outcome

// ticket(promise)
// lottery draw (async)
// if correct numbers recieve money

//no need to rely on events and callbacks for async functions
//can chain them insetead of nesting and escaping callback hell

//time sensitive
//1 pending before future value available
//2 async task running in background
//3 settled promise either fulfilled or rejected (error) user offline can't connect to api server

//handle different states in code
//promise either fullfilled or rejected impossible to change that state
//consume a promise when you have one fetch function for example promise must be built/created

//CONSUME A PROMISE
// const request4 = fetch("https://restcountries.com/v2/name/GB");
// console.log(request4);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) //returns promise
//     .then(function (response) {
//       //handle promise using then method
//       console.log(response); //response is an object
//       //have to read response body and call json method available on all responses on fetch method
//       return response.json(); //json is also asynchronous promise have to return it and handle the promise
//     })
//     .then(function (data) {
//       console.log(data); //handle second promise
//       renderCountry(data[2]);
//     });
// };
//will be settled fulfilled or rejected use 'then' method available on all promises if successful
//pass in callback function that you want to use when promise is fulfilled one argument

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) //returns promise
//     .then((response) => response.json()) //implicitly return the promise
//     .then((data) => renderCountry(data[0])); //take data and render country to dom
// };

// getCountryData("CHINA");

//CHAINING PROMISES
//get neighbouring country second ajax call depends on first call have to be done in sequence
//second call has to happen inside then method

const getCountryData = function (country) {
  //main country
  fetch(`https://restcountries.com/v3/name/${country}`) //returns promise
    .then((response) => {
      console.log(response);
      if (!response.ok)
        //if response is not ok throw new error create error with error constructor throw will terminate 'then' function
        throw new Error(`Country not found (${response.status})`); // will propgaate down to catch method create new error pass in error message use throw keyword

      return response.json(); //convert response to json
      // (err) => alert(err) //handling the rejected promise with second callback in then method
    }) //implicitly return the promise
    .then((data) => {
      //data is whatever is returned from previous then method
      //then method also returns promise
      // console.log(data);
      renderCountry(data[0]); //take data and render country to dom using rendercountry function

      ///const neighbour = data[0].borders[0];
      const neighbour = "sdfsdf";
      //get the neightbour country from the data object using the first country in the borders array within the first countrry in the data array

      if (!neighbour) return;
      //second ajax call

      //neighbour country
      //whatever returned will become fulfillment value
      //return new promise whatever returned wil be fulfilled value of the promise
      return fetch(`https://restcountries.com/v3/alpha/${neighbour}`); //'then' method always returns a promise whether fulfilled or not
    })
    .then((response) => response.json())
    // (err) => alert(err); //data recieved in function is fulfilled value of promise that's handled
    .then((data) => renderCountry(data, "neighbour")) //add in extra neighbour class
    .catch((err) => {
      //err.message is same thing that is passed into new Error constructor created errror gets handles down here
      //err is a javascript object
      console.error(`${err} 💣💣💣`);
      renderError(`something went wrong  💣💣💣 ${err.message}, try again!`);
    });
  // .finally(() => {
  //   // handle errors globally callback function will be called inside catch metthod with error object catch all error handler
  //   //catch also returns promise
  //   //finally method
  //   //use method for something that always needs to happen e.g hid loading spinner
  //   //fade in container
  //   countriesContainer.style.opacity = 1; //turn container opacity to one
  // });
};

btn.addEventListener("click", function () {
  getCountryData("fuck you");
});
//flat chain of promises

//handling rejected errors in promises
//fetch promise rejects when use loses internet connection

//when offline promise from fetch function was rejected pass in second callback function to then method

//getCountryData("asgodfihgo"); //pl property set to false in response object
//404 status error message not found because country doesn't exist api cannot find it
