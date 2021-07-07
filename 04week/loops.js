'use strict';
// updating homework as some questions have changed since my previous class

let persons = [
    {
        firstName: "Heather",
        lastName: "Barr",
        birthDate: "Aug 09, 1994",
        gender: "female"
    },
    {
        firstName: "Chris",
        lastName: "Smith",
        birthDate: "Sep 26, 1989",
        gender: "male"
    },
    {
        firstName: "Taylor",
        lastName: "Wills",
        birthDate: "Feb 23, 1993",
        gender: "female"
    }
]

//use a for...in loop and if state to console.log the value associated with the key birthDate, for odd years
for (var obj in persons) {
    if((persons[obj].birthDate.charAt(persons[obj].birthDate.length - 1) %2 != 0)){
        console.log(persons[obj].birthDate, persons[obj].firstName)
    }
  }

//use a do...while loop to console.log the numbers from 1 to 1000.
let num = 0;
do {
    num++;
    console.log(num);
} while (num < 10) //change 10 to 1000 to run full. (I got tired of seeing 1000 numbers.)


let arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 05, 1925",
        gender: "female"
    },
    {
        firstName: "Heather",
        lastName: "Barr",
        birthDate: "Aug 09, 1994",
        gender: "female"
    },
    {
        firstName: "Chris",
        lastName: "Smith",
        birthDate: "Sep 26, 1989",
        gender: "male"
    },
    {
        firstName: "Taylor",
        lastName: "Wills",
        birthDate: "Feb 23, 1993",
        gender: "female"
    }
]

//Use .map() to map over the arrayOfPersons and console.log() their information.
console.log("this is to see each object in the arrayOfPersons")
arrayOfPersons.map(obj=> console.log(obj))


//Use .filter() to filter the persons array and console.log only males in the array.
let boysOnly = arrayOfPersons.filter((obj) => {
    return obj.gender === 'male'
})
console.log("this is to see whos gender is male")
console.log(boysOnly)

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
let elderly = arrayOfPersons.filter((obj) => {
    if(obj.birthDate.charAt(obj.birthDate.length - 2) < 9){
        return obj.firstName
    }
})
console.log("this is to see who's born before 1990")
console.log(elderly)


//hi Dimh! 🍰