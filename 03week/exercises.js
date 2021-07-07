// length
let cars = ["Ford", "Chevrolet", "Jeep", "Subaru"]
console.log(cars.length);

// concat
let moreCars = ["Audi", "Toyota", "Buick", "Honda"]
let totalCars = cars.concat(moreCars);
console.log(totalCars);

// indexOf and lastIndexOf
console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

// join
let stringOfCars = totalCars.join(" & ");
console.log(stringOfCars);

// split
totalCars = stringOfCars.split(" & ");
console.log(totalCars);

// reverse
let carsInReverse = totalCars.slice(0, totalCars.length).reverse();
console.log(carsInReverse);

// sort
let sortedCars = carsInReverse.slice(0, carsInReverse.length).sort();
alert(carsInReverse.indexOf('Audi'));
console.log(sortedCars);

// slice
let removedCars = carsInReverse.slice(1, -1);
console.log(removedCars);

// splice
let newCarArray = carsInReverse.splice(1, 0, "Ford", "Honda");
console.log(carsInReverse);

// push
console.log(carsInReverse.push("Ford", "Honda"));
console.log(carsInReverse);

// pop
console.log(carsInReverse.pop());
console.log(carsInReverse);

// shift
console.log(carsInReverse.shift());
console.log(carsInReverse);

// unshift
console.log(carsInReverse.unshift("Volkswagen"));
console.log(carsInReverse);

// forEach
let numbers = [23, 45, 0, 2];
numbers.forEach((numbers) =>{
  console.log(numbers+2);
});
