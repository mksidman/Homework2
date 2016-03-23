function AnimalArray(arr) {
  this.array = arr;
}

AnimalArray.prototype.three = function() {
  var filteredArray = this.array.filter(function(animal) {
    return animal == animal.match(/[A-z]{3}/i);
  })
  return filteredArray;
}

AnimalArray.prototype.twoWords = function() {
  var filteredArray = this.array.filter(function(animal) {
    return animal == animal.match(/[A-z]+ [A-z]+/);
  })
  return filteredArray;
}

AnimalArray.prototype.letterK = function() {
  var filteredArray = this.array.filter(function(animal) {
    return animal != animal.match(/^K/);
  })
  return filteredArray;
}

AnimalArray.prototype.teddyBear = function() {
  var mappedArray = this.array.map(function(animal) {
    if (animal.match(/bear/i)) {
      return animal = "Teddy Bear";
    } else {
      return animal;
    }
  })
  return mappedArray;
}

AnimalArray.prototype.catDog = function() {
  var mappedArray = this.array.map(function(animal) {
    if (animal.match(/cat/i)) {
      return animal = "Kitty Cat";
    } else if (animal.match(/dog/i)) {
      return animal = "Puppy";
    } else {
      return animal;
    }
  })
  return mappedArray;
}

var myAnimals = new AnimalArray(["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"]);

console.log(myAnimals.three());
console.log(myAnimals.twoWords());
console.log(myAnimals.letterK());
console.log(myAnimals.teddyBear());
console.log(myAnimals.catDog());
