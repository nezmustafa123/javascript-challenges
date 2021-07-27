//dom is interface between code and browser

//modify html elements set style classes attribute 
//dom tree structure made out of nodes
//dom tree generated from html
//dom complex api 


//every single node in dom tree is of type node
//represented by an object
//different types of node child node type
//element, text, comment, document types

//text node
//comment nodes
//element type of node has access to properties 
//append remove etc
//element has htmlelement child type 
//one child type for each html element that exists in html
//different html elements have different properties
//special type for buttons links etc
//img has source attribute
//a element has href that no element does

//inheritance of methods and properties
//
//all child types will get access to methods and properties of parent nodetypes
//innerhtml class list etc.
//access to everything from node type
//html button element is an element also a node

//query selector available on document and element types

//node type called event target which is parent of node type and window node type
//allows inheriting of addeventListener and removeEventListener()


//METHODS

//selecting elements
//selecting the document entire document of any webpage document is not enough
//apply css styles to entire page
//entire html
console.log(document.documentElement);
//select the whole document

//select the head and body
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
//first element that matches selector here
//every element
const allSections = document.querySelectorAll('.section');
console.log(allSections);
//returns node list containing all the elements with the class selection

//most used ways of selecting elements
//also available on all the elements to use

document.getElementById('section--1');//don't need selector
const allButtons = document.getElementsByTagName('button'); //get element by tag name all elements with tagname button

console.log(allButtons);  //tag name returns html collection instead of nodelist live collection

//if dom changes the html collection is updated automatically
//eg remove element in inspector

//node list doesn't update itself in the console when deleted

console.log(document.getElementsByClassName('btn'));
//no dot will also return a live html collection 


//creating and inserting elements

//.insertAdjacentHTML
//creating dom element programatically 
const message = document.createElement('div');
//creates dom element stores it into message
//not yet in the dom itself
//add class eg when selecting element
message.classList.add('cookie-message'); //add class
message.textContent = 'We use cookies for improved functionality and analytics';
//
message.innerHTML = 'We use cookies for imporved functionality and analytics. <button class = "btn btn-close-cookie"> Got it!</button>';

header.prepend(message);
//new message element to dom after header
//first child of header element
heder.append(message);
//last child at the bottom

//only inserted once can't be in two places simultaneously moved the element didn't insert it was already inserted by prepend
//dom element is unique

//copy element

header.append(message.cloneNode(true));
//clone element and add it to the bottom

//before as a sibling
//after as a sibling

header.append(message);

header.before(message);

//delete elements 
//remove element when button clicked

document.querySelector('.btn--close-choke').addEventListener('click',function() {
    message.remove();
    //before could only do 
//    message.parentElement.removeChild(message);
});



//CSS STYLES


//styles on element element style and property name using camel case

//select element and style property and property name set it to string with value
message.style.backgroundColor = '#37383d';
message.style.width = '120px'; //have to write the css value in a string the same way you'd write it in normal css

//in style attribute of element inline styles
//can't read properties unless you set them
console.log(message.style.height);
//will work with background color because was set manually

console.log(message.style.backgroundColor);
//will return rgb color because was one that was set manually

console.log(getComputedStyle(message).color); //real style as it appears in page
//get object with all the properties with all values then take certain 
console.log(getComputedStyle(message).height);//can get the computed style even if didn't set it in css


