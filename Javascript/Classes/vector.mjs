///Vector class

import {print} from './debugging.mjs';

export class Vector {
    
    //construct vector from x, y components
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //return size of this
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    //return this + vec
    plus(vec) {
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    //return this - vec
    minus(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    //return -this
    negative() {
        return new Vector(-this.x, -this.y);
    }

    //return scalar * this
    sMult(scalar) {
        return new Vector(scalar * this.x, scalar * this.y);
    }

    //return dot product of this with vec
    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }

    //string representation
    string() {
        return `(${this.x}, ${this.y})`;
    }

    //print string representation
    print() {
        print(this.string());
    }

}