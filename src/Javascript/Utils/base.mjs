//Base class for all classes to inherit from, to allow some easy access custom functions

import {print} from './print.mjs';

const TOLERANCE = 0.00000001

export class Base {

    constructor() {
    }

    //compare two floats
    floatEq(x, y) {
        return Math.abs(x - y) < TOLERANCE;
    }

    //return string representation of class (normally should be overridden)
    string() {
        return `${this.constructor.name} instance`;
    }

    //print string representation to screen
    print() {
        print(this.string());
    }
}