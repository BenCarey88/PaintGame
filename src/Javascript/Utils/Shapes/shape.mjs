//Virtual base class for shapes

import {print} from '../print.mjs';
import {Base} from '../base.mjs';
import {Rotation} from '../Maths/index.mjs';

export class Shape extends Base {
    
    //add points attributes as attributes of this
    constructor(points, properties={}) {
        super();
        this.points = points;
        for (var key in points) {
            this[key] = points[key];
        }
        this.properties = properties;
        for (var key in properties) {
            this[key] = properties[key];
        }

        this._bbox = undefined;
        this._orientation = undefined;
    }

    //compare if this == other shape
    eq(shape) {
        for (var key in this.points) {
            if (!this[key].eq(shape[key])) {
                return false;
            }
        }
        for (var key in this.properties) {
            if(!this.floatEq(this[key], shape[key])) {
                return false;
            }
        }
        return true;
    }

    //return clone of this with points in new position
    clone(points) {
        //placeholder: needs to be overridden in inherited classes
    }

    //return bounding box of this
    bbox() {
        //placeholder: needs to be overridden in inherited classes
    }

    //return orientation of this
    orientation() {
        //placeholder: needs to be overridden in inherited classes
    }

    //return this translated by vec
    translate(vec) {
        var points = this.points;
        for (var key in points) {
            points[key].plusEq(vec);
        }
        return this.clone(points, this.orientation());
    }

    //return this rotated by angle about pivot (default: (0,0))
    rotate(angle, pivot) {
        var rot = new Rotation(angle);
        var points = this.points;
        if (pivot == undefined) {
            for (var key in points) {
                points[key] = rot.vMult(points[key])
            }
        }
        else {
            for (var key in points) {
                points[key] = rot.vMult(
                    points[key].minus(pivot)
                ).plus(pivot)
            }
        }
        return this.clone(points, this.orientation() + angle);
    }

    //draw the shape to the context
    draw(ctx) {
        //placeholder: needs to be overridden in inherited classes
    }

    //string representation
    string() {
        return `Virtual Shape Class (should not be called)`;
    }

}
