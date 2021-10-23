//ASYNC javasdcript

//synchronous example

const p = document.querySelector(".p");
p.textContent = "My name is Nez!";
alert("Text set");
p.style.color = "red";
//have to wait for alert to finish

//asynchronous code example

const p = document.querySelector(".p");
setTimeout(function () {
  p.textContent = "My name is Nez!";
}, 5000);
p.style.color = "red";
// async code executed after task that runs in background finishes
// 'non-blocking'

//callback doesn't make code asynchronous only certain functions like timeout make code asynchronous

const img = document.querySelector(".dog");
img.src = "dog.jpg";
img.addEventListener("load", function () {
  img.classList.add("fadeIn");
});

p.style.width = "300px";
//src attribute set asynchronously
//image will be faded in once the image is completely loaded and load event is emitted
//once image is loaded it's displayed load event is emitted and callback function called
//event listeners to not make code asynchronous
//IMAGE LOADS ASYNCHRONOUSLY IN BACKGROUD
