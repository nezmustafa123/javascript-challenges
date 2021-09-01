"use strict";
//object oriented programming
//paradigm based on concept of objects
//use objects to model real world or abstract features
//can contain dara (properties) and code (methods)
//pack data and behaviour into one block
//avoid spaghetti code make objects interact with each other
//use classes classes like blueprint create object based off class


//class representation class is a plan doesn't contain real world data just yet
//fictional class has information about user username password email etc
//behaviour that's associated with data login method and method to send messages


User {
    user
    password
    email


    login(password) {
        //login logic
    }

    sendMessage(str) {
        //sending logic
    }
}


//create new instance of class (object) for specific user 

new User('Nez')

{
    user = 'Nez'
    password = 'dk23s'
    email = 'hello@nez.io'

    login(password) {
        //login logic
    }

    sendMessage(str){
        //sending logic
    }
}

new User('mary')

{
    user = 'Mary'
    password = 'y6095'
    email = 'hello@mary.io'
    
   
    login(password){
            //login logic
    }
    sendMessage(str){
          //sending logic
    }
 }

//different data same functionality
//principles of designing classes
//abstraction - hide details that don't matter simplify concepts e.g add eventlistener don't know how it works below scence
//encapsulation  - keep some methods private inside the class interact with objects through API public interace prevents external code from manipulating internal properties/state
//inheritance - two classes closely related can have one class inherit from another one parent class one child, child extends parent all properties and methods to certain class available to child class
//polymorphism - child class can overwire method it inherited from a parent class write own methods in child classes


