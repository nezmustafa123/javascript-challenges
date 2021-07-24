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

//select the head and body
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
//first element that matches selector here
//every element
const allSections = document.querySelectorAll('.section');
console.log(allSections);
//returns node list containing all the elements with the class selection

//most used ways of selecting elements
//also available on all the elements

document.getElementById('section--1');//don't need selector
const allButtons = document.getElementsByTagName('button'); //get element by tag name all elements with tagname button

console.log(allButtons);  //html collection live collection

//if dom changes the html collection is updated automatically
//eg remove in inspector

