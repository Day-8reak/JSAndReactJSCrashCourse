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








/*
    // Lesson 3: Arithmetic
let classSize = 30;

console.log(`Class Size: ${classSize}`);


classSize += 1; //Student joins class
classSize -= 1; //Student leaves class
classSize *= 2; //Class size doubles
classSize /= 2; //Class size halves

classSize **= 2; //Class size squared
classSize %= 3; //Class size modulo 3, should usually assign new variable for modulo operations
classSize = 10; //Class size is set to 10

classSize++; //incrementing
classSize--; //decrementing



    // Reminder for pemdas:
    // 1. Parentheses/Brackets
    // 2. Exponents
    // 3. Multiplication and Division
    // 4. Addition and Subtraction

let result = 1 + 2 * 3 - 4 ** 6 / 5 % 7; //arithmetic operations in js follow PEMDAS/BODMAS rules
console.log(`Result: ${result}`); //result returns 6.7999999999999545


let result2 = 12 % 5 + 8 / 2; // 12 % 5 is 2, and 8 / 2 is 4, so result2 is 6
console.log(`Result 2: ${result2}`); //result2 returns 6



    // Lesson 4: User Input

    // 1. Easy way -> window prompt
    // 2. More control -> HTML textbox

    // method 1
//let username = window.prompt("Enter your name:"); // prompts user to enter their name
//console.log(`Hello, ${username}!`);


    //method 2
document.getElementById("Submit").onclick = function() { // Everything inside this function will run when the button with id "submit" is clicked
    username = document.getElementById("textbox1").value; // gets the value of the textbox with id "username"
    document.getElementById("output").textContent = `Hello, ${username}!`; // sets the text content of the element with id "output" to "Hello, username!"
}  
*/







/*
    //Lesson 5: Type Conversions
// Changing datatype of a value to another

// Might do this when accepting user input, since user input is always a string
let age = window.prompt("Enter your age:"); // user input is always a string

age = Number(age); // converts age to a number
age += 1; // increments age by 1

console.log(age, typeof age); // outputs age


    // Conversions
let x  = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // outputs NaN (Not a Number) since "pizza" cannot be converted to a number
console.log(y, typeof y); // outputs "pizza" (string)
console.log(z, typeof z); // outputs true (boolean), converting anything to boolean will always return true except for 0, null, undefined, NaN, and empty string


let a = "0";
let b = "0";
let c = "0";

x = Number(a);
y = String(b);
z = Boolean(c);

console.log(a, typeof a); // outputs 0 (number)
console.log(b, typeof b); // outputs "0" (string)
console.log(c, typeof c); // outputs true (boolean), converting anything to boolean will always return true except for 0, null, undefined, NaN, and empty string



let d  = "";
let e = "";
let f = "";

d = Number(d);
e = String(e);
f = Boolean(f);

console.log(d, typeof d); // outputs 0 (number)
console.log(e, typeof e); // outputs "" (string)
console.log(f, typeof f); // outputs false (boolean), converting nothing to boolean returns false


let g;
let h;
let i;

g = Number(g);
h = String(h);
i = Boolean(i);

console.log(g, typeof g); // outputs NaN (Not a Number) since "pizza" cannot be converted to a number
console.log(h, typeof h); // outputs undefined (string)
console.log(i, typeof i); // outputs  false*/






/*
    // Lesson 6: constants

// old first versionlet pi = 3.14159; // pi is a constant, but we can still change it
const pi = 3.14159; // PI is a constant, we cannot change it
let radius;
let circumference;
    
pi = 69.421 // this will give an error because pi is a constant and we cannot change it

radius = window.prompt("Enter the radius of the circle:"); // user input is always a string
radius = Number(radius); // converts radius to a number

circumference = 2 * pi * radius; // calculates circumference of circle using formula 2 * pi * radius

console.log(`The circumference of the circle is ${circumference}`); // outputs circumference of circle
*/
const pi = 3.14159;


document.getElementById("L6_button").onclick = function(){
    radius = document.getElementById("L6_T").value; // gets the value of the textbox with id "L6_textbox"
    radius = Number(radius); // converts radius to a number
    circumference = 2 * pi * radius; // calculates circumference of circle using formula 2 * pi * radius
    document.getElementById("L6_h3").textContent = circumference + "cm"; // sets the text content of the element with id "circumference" to "The circumference of the circle is circumference"
} // sets the text content of the element with id "circumference" to "The circumference of the circle is circumference"

// if you or someone else tries to change the value of pi, it won't give the right value
// or in some cases it will give an error, so we can set it as a constant to prevent that








    // Lesson 7: Counter program
const decrementButton = document.getElementById("decrementButton"); // gets the element with id "decrementButton"
const incrementButton = document.getElementById("incrementButton"); // gets the element with id "incrementButton"
const resetButton = document.getElementById("resetButton"); // gets the element with id "resetButton"
const currentCount = document.getElementById("currentCount"); // gets the element with id "countDisplay"
let count = 0; // initializing count variable to 0

incrementButton.onclick = function(){
    count++; // increments count by 1
    currentCount.textContent = count; // sets the text content of the element with id "countDisplay" to the value of count
} 
decrementButton.onclick = function(){
    count--; // decrements count by 1
    currentCount.textContent = count; // sets the text content of the element with id "countDisplay" to the value of count
} 
resetButton.onclick = function(){
    count = 0; // resets count to 0
    currentCount.textContent = count; // sets the text content of the element with id "countDisplay" to the value of count
}  







    // Lesson 8: Math Object
// Math = a built-in javascript object that provides a 
//  collection of math-related properties and methods

console.log(Math.PI); // outputs 3.141592653589793

let x  = 3.21;
let y = 2;
let z;

// z = Math.round(x); // rounds x to the nearest integer
// z = Math.floor(x); // rounds x down to the nearest integer
// z = Math.ceil(x); // rounds x up to the nearest integer
// z = Math.trunc(x); // removes the decimal part of x, returns 3
// z = Math.pow(x, y); // raises x to the power of y, returns 3.21^2 = 10.3041
// z = Math.sqrt(x); // returns the square root of x, returns 1.7888543819998317
// z = Math.log(x); // returns the natural logarithm of x, returns 1.1631508098056809
// z = Math.sin(x); // returns the sine of x, returns 0.1580013959733503
// z = Math.cos(x); // returns the cosine of x, returns 0.1580013959733503
// z = Math.tan(x); // returns the tangent of x, returns 0.1580013959733503
// z = Math.abs(x); // returns the absolute value of x, returns 3.21
// z = Math.sign(x); // returns the sign of x, returns 1
// Finally, min returns the smallest value from a list of numbers, and max does the opposite
console.log(z); // outputs 1







    // Lesson 9: Random Numbers
// Utility to get number input values
function getMinMax() {
  const min = Number(document.getElementById("lowEndInput").value);
  const max = Number(document.getElementById("highEndInput").value);
  return { min, max };
}

// Utility to generate a random number in range [min, max)
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Single random number generation
function generateOneRandom() {
  const { min, max } = getMinMax();
  const display = document.getElementById("randomNumbersDisplay");
  if (min >= max) {
    display.textContent = "Error: Minimum must be less than Maximum";
    return;
  }
  display.textContent = `Random Number: ${generateRandom(min, max)}`;
}

// Generate and display 10 random numbers
function generateTenRandom() {
  const { min, max } = getMinMax();
  for (let i = 1; i <= 10; i++) {
    const rand = generateRandom(min, max);
    const display = document.getElementById(`random${i}NumbersDisplay`);
    if (display) display.textContent = rand;
  }
}

// Event listeners
window.onload = () => {
  document.getElementById("randomButton").onclick = generateOneRandom;
  document.getElementById("random10Button").onclick = generateTenRandom;
};






    // Lesson 10: If statements
let age = 17; // initializing age variable to 19
if (age >= 18)  { // if age is greater than or equal to 19
    console.log("You are an adult"); // outputs "You are an adult"
} else { // if age is less than 18
    console.log("You aren't an adult"); // outputs "You aren't an adult"
}

// if statements can also be used on booleans
let isStudent = true;

if (isStudent) { // if isStudent is true
    console.log("You are a student"); // outputs "You are a student"    
}
else { // if isStudent is false
    console.log("You aren't a student"); // outputs "You are not a student"
}