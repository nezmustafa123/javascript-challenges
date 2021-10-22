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
