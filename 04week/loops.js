'use strict';

// for loop

let carsInReverse = ['honda', 'jeep', 'ford', 'audi', 'chevrolet']

for (let i = 0; i < carsInReverse.length; i++){
    console.log(carsInReverse[i])
}

// for .. in loop

let persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

for (var value in persons) {
    console.log(value)
  }

// Then use a for...in loop and if state to console.log the value associated with the key birthDate
    // need help with using an if for this problem.

// for loop to console log 1-1000
for(let i = 0; i <= 1000; i++){
    console.log(i)
}

// Use a do...while loop to console.log the numbers from 1 to 1000.
let num = 0;
do {
    num++;
    console.log(num);
} while (num < 1000)

// When is a for loop better than a while loop?
/* I feel that a for loop is better when you're trying to keep the scope of variables under control. 
If you're workign with a lot of global variables, a do/while loop may be better. */


// How is the readability of the code affected?
// not sure how to answer this? during what?


// What is the difference between a for loop and a for...in loop?
/*A for loop is better for arrays and a for/in loop is better for objects. It's better to use a for loop with 
a numeric index when iterating over arrays, because the for/in statement iterates over user-defined properties.*/

// What is the difference between a while loop and a do...while loop?
/* A while loop will run as long as it evaluates to true, whereas a do/while loop will run until it evaluates to false!*/
