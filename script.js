//complete this code
class Animal {
	constructor(species) {
		this.species = species;
	}

	get species() {
		return this.species;
	}

	makeSound() { // Corrected method definition
		console.log(`The ${this.species} makes a sound`); // Added space
	}
}

class Dog extends Animal {
	constructor(species) {
		super(species); // Call parent constructor
	}

	bark() { // Corrected method definition
		console.log('woof');
	}	
}

class Cat extends Animal {
	constructor(species) {
		super(species); // Call parent constructor
	}

	purr() { // Corrected method definition
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;