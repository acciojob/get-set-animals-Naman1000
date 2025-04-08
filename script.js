//complete this code
class Animal {
	constructor(species){
		this._species =species;
		
	}
	get species(){
		return this._species
	}
	 makeSound: function() {
    console.log(`The ${this._species}makes a sound`);
  }
}

class Dog extends Animal {

	bark: function(){
		console.log('woof');
	}	
}

class Cat extends Animal {

	purr: function(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
