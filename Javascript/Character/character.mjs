//character class for player character

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';

export class Character {

    // construct character with position on screen
    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0);
    }

}