var animalsArray = ["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"];

//Array with animals that have three letter names
var threeLetters = animalsArray.filter(function(animal) {
  return animal == animal.match(/[A-z]{3}/i);
});
// console.log(threeLetters);

//Array with animals that have two-word names
var twoWords = animalsArray.filter(function(animal) {
  return animal == animal.match(/[A-z]+ [A-z]+/);
})
// console.log(twoWords);

// Array with only animals that don't start with K
var letterK = animalsArray.filter(function(animal) {
  return animal != animal.match(/^K/);
})
// console.log(letterK);

var teddyBear = animalsArray.map(function(animal) {
  if (animal.match(/bear/i)) {
    return animal = "Teddy Bear";
  } else {
    return animal;
  }
})
// console.log(teddyBear);

var catDog = animalsArray.map(function(animal) {
  if (animal.match(/cat/i)) {
    return animal = "Kitty Cat";
  } else if (animal.match(/dog/i)) {
    return animal = "Puppy";
  } else {
    return animal;
  }
})
console.log(catDog);
