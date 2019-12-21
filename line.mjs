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

    update() {
        this.x1 = this.pos1.x;
        this.x2 = this.pos2.x;
        this.y1 = this.pos1.y;
        this.y2 = this.pos2.y;
    }

    length() {
        var lineVec = this.pos1.minus(this.pos2);
        return lineVec.magnitude();
    }

    translate(vec) {
        return new line(
            this.pos1.plus(vec), this.pos2.plus(vec)
        );
    }

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

    string() {
        return `START: ${this.pos1.string()}; END: ${this.pos2.string()}`;
    }

    print() {
        print(this.string());
    }

}