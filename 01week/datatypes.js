// JavaScript program to display the current day and time.
let today = new Date();
console.log(today);

//JavaScript program to convert a number to a string.
let change = 10;
console.log(change.toString());
//not working, idk why?

//JavaScript program to convert a string to the number.
let num = "1";
console.log(Number(num));

//JavaScript program that takes in different datatypes and prints out what type they are.
console.log(typeof(change)); //number

console.log(typeof(today)); //object

let happy = true;

console.log(typeof(happy)); //boolean

let pennyTheDog;
console.log(pennyTheDog); //undefined

console.log(typeof(num)); //string

let nope = null;
console.log(typeof(nope));
//Null. Not sure why that didnt work.


//JavaScript program that adds 2 numbers together.
console.log(2 + 18);



var a = 3;
var b = 5;
//JavaScript program that runs only when 2 things are true.
console.log(a > 0 && b > 0);

//JavaScript program that runs when 1 of 2 things are true.
console.log(a > 0 || b > 10);

//JavaScript program that runs when both things are not true.
console.log(!(a > 0 && b > 0));