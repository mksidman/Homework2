var animalsArray = ["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"];


//Array with animals that have three letter names executes a conditional in the callback
var threeLetterPattern = /^[A-z]{3}$/i;

var threeLetterAnimals = animalsArray.filter(function(animal) {
  return threeLetterPattern.test(animal);
})

console.log(threeLetterAnimals);


//Array with animals that have two-word names
var twoWordPattern = /[A-z]+ [A-z]+/i;

var twoWordAnimals = animalsArray.filter(function(animal) {
  return twoWordPattern.test(animal);
})

console.log(twoWordAnimals);


// Array with only animals that don't start with K
var letterKPattern = /^k/i;
var notStartingWithK = /^[^k]/i; //how to write not starting with k in regex

var noLetterK = animalsArray.filter(function(animal) {
  return !letterKPattern.test(animal);
})

console.log(noLetterK);


// replace bear with teddy bear
var teddyBear = animalsArray.map(function(animal) {
  return animal.replace(/bear/ig, "Teddy Bear");
})


// var teddyBear = animalsArray.map(function(animal) {
//   if (animal.match(/bear/i)) {
//     return animal = "Teddy Bear";
//   } else {
//     return animal;
//   }
// })

console.log(teddyBear);


// replace cat with kitty cat and dog with puppy
var catDog = animalsArray.map(function(animal) {
  return animal.replace(/cat/i, "Kitty Cat").replace(/dog/i, "Puppy");
})

// var catDog = animalsArray.map(function(animal) {
//   if (animal.match(/cat/i)) {
//     return animal = "Kitty Cat";
//   } else if (animal.match(/dog/i)) {
//     return animal = "Puppy";
//   } else {
//     return animal;
//   }
// })

console.log(catDog);
