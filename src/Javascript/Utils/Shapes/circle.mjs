//Circle shape class

import {BBox} from './bbox.mjs';
import {Shape} from './shape.mjs';

export class Circle extends Shape {

    constructor(centre, rad) {
        super(
            {centre: centre},
            {rad: rad}
        );
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

    //draw circle to ctx
    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(
            this.centre.x, this.centre.y,
            this.rad, 0, 2 * Math.PI
        );
        ctx.fill();
        ctx.closePath();
    }

    //string representation
    string() {
        return `Circle[${this.centre.string()}, rad ${this.rad}]`;
    }

}
