class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    speak() {
        return `woof! I am ${this.name}`;
    }
}
const dog = new Dog("Buddy");
console.log(dog.speak());