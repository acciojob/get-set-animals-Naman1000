//complete this code
class Animal {
	constructor(species){
		this._species =species;
		
	}
	get species(){
		return this._species
	}
	 makeSound: function() {
    console.log(`The ${this.species}makes a sound`);
  }
}

class Dog extends Animal {
	constructor(species) {
    super(species); // Call parent constructor
  }

	bark: function(){
		console.log('woof');
	}	
}

class Cat extends Animal {
	constructor(species) {
    super(species); // Call parent constructor
  }

	purr: function(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
