//Rectangle shape class

import {Vector} from '../Maths/vector.mjs';
import {Rotation} from '../Maths/rotation.mjs';
import {BBox} from './bbox.mjs';
import {Shape} from './shape.mjs';

export class Rect extends Shape {

    constructor(centre, width, height, orientation, vertices) {
        
        if (vertices == undefined) {
            var rot = new Rotation(orientation);
            vertices = {
                v1: new Vector(-width/2, -height/2),
                v2: new Vector(width/2, -height/2),
                v3: new Vector(width/2, height/2),
                v4: new Vector(-width/2, height/2)
            }
            for (var key in vertices) {
                vertices[key] = rot.vMult(vertices[key]).plus(centre);
            }
        }
        vertices.centre = centre;
        super(vertices);

        this.width = width;
        this.height = height;
        this._orientation = orientation;
    }

    bbox() {
        if (this._bbox == undefined) {
            this._bbox = new BBox(
                Math.min(this.v1.x, this.v2.x, this.v3.x, this.v4.x),
                Math.min(this.v1.y, this.v2.y, this.v3.y, this.v4.y),
                Math.max(this.v1.x, this.v2.x, this.v3.x, this.v4.x),
                Math.max(this.v1.y, this.v2.y, this.v3.y, this.v4.y)
            );
        }
        return this._bbox;
    }

    clone(points, orientation) {
        return new Rect(
            points.centre, this.width, this.height, orientation,
            {v1: points.v1, v2: points.v2, v3: points.v3, v4: points.v4}
        );
    }

    orientation() {
        if (this._orientation == undefined) {
            this._orientation = Math.atan2(
                this.v2.y - this.v1.y, this.v2.x - this.v1.x
            );
        }
        return this._orientation;
    }

    //draw rectangle to ctx
    draw(ctx) {
        ctx.fillStyle = "red";
		ctx.save();
		ctx.translate(this.centre.x, this.centre.y);
		ctx.rotate(this.orientation());
        ctx.fillRect(
            -this.width * 0.5, -this.height * 0.5, 
            this.width, this.height
        );
		ctx.restore();
    }

    //string representation
    string() {
        return (
            `Rectangle[${this.v1.string()}, ${this.v2.string()},
            ${this.v3.string()}, ${this.v4.string()}]`
        );
    }

}
