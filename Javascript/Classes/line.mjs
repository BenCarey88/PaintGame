//Line class

import {print} from './debugging.mjs';
import {Vector} from './vector.mjs';
import {Rotation} from './rotation.mjs';

export class Line {

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

    //return centre of line
    centre() {
        return new Vector(
            (this.x1 + this.x2) * 0.5,
            (this.y1 + this.y2) * 0.5
        );
    }

    //return angle of elevation of line
    elevation() {
        return Math.atan2(
            this.y2 - this.y1, this.x2 - this.x1
        );
    }

    //return this translated by vec
    translate(vec) {
        return new Line(
            this.pos1.plus(vec), this.pos2.plus(vec)
        );
    }

    //return this rotated by angle about centre (default line centre)
    rotate(angle, centre) {
        var rot = new Rotation(angle);
        if (centre == undefined) {
            centre = this.centre();
        }
        var newLine = this.translate(centre.negative());
        newLine = new Line(
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