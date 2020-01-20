//Virtual base class for shapes

import {print} from '../print.mjs';
import {Rotation} from '../Maths/index.mjs';

export class Shape {
    
    //add points attributes as attributes of this
    constructor(points) {
        this.points = points
        for (var key in points) {
            this[key] = points[key]
        }
    }

    //return clone of this with points in new position
    clone(points) {
        //placeholder: needs to be overridden in inherited classes
    }

    //return bounding box of this
    bbox() {
        //placeholder: needs to be overridden in inherited classes
    }

    //return this translated by vec
    translate(vec) {
        var points = this.points;
        for (var key in points) {
            points[key].plusEq(vec);
        }
        return this.clone(points);
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
        return this.clone(points);
    }

    //string representation
    string() {
        return `Virtual Shape Class (should not be called)`;
    }

    //print string representation
    print() {
        print(this.string());
    }

}
