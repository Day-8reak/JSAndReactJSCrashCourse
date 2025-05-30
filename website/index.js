/* This is a multi-line comment
   the javascript file is in charge of the
    interactivity  of a website
*/

//This is a single-line comment
document.getElementById("main-title").textContent = "Hello, Worldd!"; // This overrides the text of the element with id "main-title" to "Hello, Worldd!"
document.getElementById("actual-main-title").textContent = "Suck my dick";


console.log("Hello, world!"); /* Can use double quotes or single quotes or backticks*/

/* console outputs generally don't appear on the webpage,
 but you can look at the messages by right-clicking the page and clicking
  "Inspect" or "Inspect Element" and then going to the "Console" tab. 
 - Also tells you about what line and file the message is from*/

console.log(`This is another message written in backticks instead of quotes.
This is useful for multi-line messages.`);


/*alert box - every time you write something new or restart the page these will automatically trigger*/
/* That includes comments, also the little chrome icon at the bottom will turn orange, like whenever you have a notification*/
//window.alert(`This is an alert!`)
//window.alert(`I like brocode`)






    // Lesson 2: Variables
/*
let x; // declaring a variable, need unique names
x = 69; // assigning a value to the variable

console.log(x); // outputs 69


let age = 19;
console.log(age);

//can also use decimals
let pi = 3.14;
console.log(`suck my dick, it's ${pi} metres long`); // substituting variable pi
console.log(`suck my dick, it's $${pi}`); // substituting variable pi

//can also display type of variables:
console.log(typeof age); // returns number
console.log(typeof pi); // returns number

    //strings + booleans
let name = "John";
let fact1 = "lebron has 4 rings"; // obv strings can also have spaces and numbers
let fact1Val = true; //strings can be booleans

console.log(typeof name); // returns string
console.log(`Your name is ${name}`);


let orgName = "McMaster Coding";
let age = 69;
let isActive = true;

document.getElementById("p1").textContent = `Organization Name: ${orgName}`;
document.getElementById("p2").textContent = `Age: ${age}`;
document.getElementById("p3").textContent = `Active: ${isActive}`; 
*/


    // Lesson 3: Arithmetic
let classSize = 30;

console.log(`Class Size: ${classSize}`);

classSize++; //Student joins class
classSize--; //Student leaves class
classSize *= 2; //Class size doubles
classSize /= 2; //Class size halves

classSize = classSize ** 2; //Class size squared
classSize  = classSize % 3; //Class size modulo 3, should usually assign new variable for modulo operations
classSize = 10; //Class size is set to 10

