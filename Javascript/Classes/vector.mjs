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

    //this += vec
    plusEq(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }

    //return this - vec
    minus(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    //this -= vec
    minusEq(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }

    //return -this
    negative() {
        return new Vector(-this.x, -this.y);
    }

    //return scalar * this
    sMult(scalar) {
        return new Vector(scalar * this.x, scalar * this.y);
    }

    //this *= scalar
    sMultEq(scalar) {
        this.x *= scalar; 
        this.y *= scalar;
    }

    //return unit vector in direction of this
    unit() {
        return this.sMult(1/this.magnitude())
    }

    //return dot product of this with vec
    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }

    //set component of this along dir to zero (ie. take the perpendicular component)
    setComponentToZero(direction) {
        var dir = direction.unit();
        var perp = new Vector(dir.y, -dir.x);
        var multiplier = this.dot(perp);
        var result = perp.sMult(multiplier);
        this.x = result.x;
        this.y = result.y;
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