//Line shape class

import {Vector} from '../Maths/index.mjs';
import {BBox} from './bbox.mjs';
import {Shape} from './shape.mjs';

export class Line extends Shape {

    //construct line from two position vectors
    constructor(pos1, pos2) {
        super({pos1:pos1, pos2:pos2});
        this.update();
        this.width = 20;
    }

    bbox() {
        return new BBox(
            Math.min(this.x1, this.x2) - this.width * 0.5,
            Math.min(this.y1, this.y2) - this.width * 0.5,
            Math.max(this.x1, this.x2) + this.width * 0.5,
            Math.max(this.y1, this.y2) + this.width * 0.5,
        );
    }

    clone(points) {
        return new Line(points.pos1, points.pos2);
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

    //string representation
    string() {
        return `Line[${this.pos1.string()} to ${this.pos2.string()}]`;
    }

}