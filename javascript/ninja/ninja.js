class Ninja {
    // Constructor to initialize the attributes
    constructor(name) {
        this.name = name;        // Name of the Ninja
        this.health = 90;        // Default health
        this.speed = 3;          // Default speed
        this.strength = 3;       // Default strength
    }

    // Method to log the Ninja's name
    sayName() {
        console.log(`My name is ${this.name}`);
    }

    // Method to show the Ninja's stats
    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    }

    // Method to increase health by 10
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drinks sake and gains 10 health!`);
    }
}

// Example usage:
const ninja1 = new Ninja("Naruto");
ninja1.sayName();        // Output: My name is Naruto
ninja1.showStats();      // Output: Name: Naruto, Health: 90, Speed: 3, Strength: 3
ninja1.drinkSake();      // Output: Naruto drinks sake and gains 10 health!
ninja1.showStats();      // Output: Name: Naruto, Health: 100, Speed: 3, Strength: 3