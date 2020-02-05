//Base class for all classes to inherit from, to allow some easy access custom functions

import {print} from './print.mjs';
import {constants} from './constants.mjs';
import {utils} from './functionUtils.mjs';

export class Base {

    constructor() {
    }

    //compare two floats
    floatEq(x, y) {
        return utils.floatEq(x, y);
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