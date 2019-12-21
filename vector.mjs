///Vector class

import {print} from './debugging.mjs';

export class vector {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    plus(vec) {
        return new vector(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new vector(this.x - vec.x, this.y - vec.y);
    }

    negative() {
        return new vector(-this.x, -this.y);
    }

    sMult(scalar) {
        return new vector(scalar * this.x, scalar * this.y);
    }

    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }

    string() {
        return `(${this.x}, ${this.y})`;
    }

    print() {
        print(this.string());
    }

}