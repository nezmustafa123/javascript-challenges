"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

//xml requests

const request = new XMLHttpRequest(): //create new hhtp request object
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');//open request
request.send();//send request ajax call in background async can't set some result into some variable reult not there yet
//FETCHED IN BACKGROUND
//the rest of the code keeps runniung while the api is contacted need callback function
//callback on request object for load event
request.addEventListener('load', function() {
 console.log(this.responseText);//this is request response is in response text
});

