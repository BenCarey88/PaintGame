//Rectangle shape class

import {BBox} from './bbox.mjs';
import {Shape} from './shape.mjs';

export class Rect extends Shape {

    constructor(v1, v2, v3, v4) {
        super({v1:v1, v2:v2, v3:v3, v4:v4});

        this.width = Math.min(
            this.v2.minus(v1).magnitude(),
            this.v3.minus(v2).magnitude()
        );
        this.height = Math.max(
            this.v2.minus(v1).magnitude(),
            this.v3.minus(v2).magnitude()
        );
    }

    bbox() {
        return new BBox(
            Math.min(this.v1.x, this.v2.x, this.v3.x, this.v4.x),
            Math.min(this.v1.y, this.v2.y, this.v3.y, this.v4.y),
            Math.max(this.v1.x, this.v2.x, this.v3.x, this.v4.x),
            Math.max(this.v1.y, this.v2.y, this.v3.y, this.v4.y)
        );
    }

    clone(points) {
        return new Rect(points.v1, points.v2, points.v3, points.v4);
    }

    orientation() {
        return Math.atan2(
            this.v2.y - this.v1.y, this.v2.x - this.v1.x
        );
    }

    //string representation
    string() {
        return (
            `Rectangle[${this.v1.string()}, ${this.v2.string()},
            ${this.v3.string()}, ${this.v4.string()}]`
        );
    }

}
