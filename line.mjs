//Line class

import {print} from './debugging.mjs';
import {vector} from './vector.mjs';
import {rotation} from './rotation.mjs';

export class line {

    //construct line from two position vectors
    constructor(pos1, pos2) {
        this.pos1 = pos1;
        this.pos2 = pos2;
        this.update();
    }

    //get x and y coordinates from the two pos vectors
    update() {
        this.x1 = this.pos1.x;
        this.x2 = this.pos2.x;
        this.y1 = this.pos1.y;
        this.y2 = this.pos2.y;
    }

    //return length of this
    length() {
        var lineVec = this.pos1.minus(this.pos2);
        return lineVec.magnitude();
    }

    //return this translated by vec
    translate(vec) {
        return new line(
            this.pos1.plus(vec), this.pos2.plus(vec)
        );
    }

    //return this rotated by angle about centre (default (0,0))
    rotate(angle, centre) {
        var rot = new rotation(angle);
        if (centre == undefined) {
            centre = new vector(0, 0);
        }
        var newLine = this.translate(centre.negative());
        newLine = new line(
            rot.vMult(newLine.pos1), rot.vMult(newLine.pos2)
        );
        return newLine.translate(centre);
    }

    //string representation
    string() {
        return `START: ${this.pos1.string()}; END: ${this.pos2.string()}`;
    }

    //print string representation
    print() {
        print(this.string());
    }

}