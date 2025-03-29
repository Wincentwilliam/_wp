class Animal {
    constructor(name) {
        this.name =name;
    }
}

class dog extends Animal {
    speak() {
        return `woof! I am ${this.name}`;
    }
}
const dog = new Dog("Buddy");
console.log(dog.speak());