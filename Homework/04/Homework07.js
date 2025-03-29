class vector {
    constructor(components) {
        this.components = components;
    }
    add (other) {
        if(this.components.length !== other.components.length) {
            throw new Error("Vector must be of the same length");
        }
        const result = this.components.map((value, index) => value + other.components[index]);
        return new vector(result);
    }

    sub(other) {
        if (this.components.length !== other.components.length) {
            throw new Error("Vectors must be of the same length");
        }
        const result = this.components.map((value, index) => value - other.components[index]);
        return new Vector(result);
    }

    dot(other){
        if (this.components.length !== other.components.length) {
            throw new Error("Vector must be of the same length");
        }
        const result = this.components.map((sum, value, index) => sum + value * other.components[index], 0);
    }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);
console.log(a.add(b).sub(b).dot(b));