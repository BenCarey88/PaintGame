//Circle shape class

import {BBox} from './bbox.mjs';
import {Shape} from './shape.mjs';

export class Circle extends Shape {

    constructor(centre, rad) {
        super({centre: centre})
        this.rad = rad;
    }

    bbox() {
        return new BBox(
            this.centre.x - this.rad,
            this.centre.y - this.rad,
            this.centre.x + this.rad,
            this.centre.y + this.rad
        );
    }

    clone(points) {
        return new Circle(points.centre, this.rad);
    }

    //string representation
    string() {
        return `Circle[${this.centre.string()}, rad ${this.rad}]`;
    }

}
