//Shape classes

import {print} from './debugging.mjs';
import {Vector} from './vector.mjs';
import {Rotation} from './rotation.mjs';
import {Line} from './line.mjs';

export class BBox {
    constructor(xmin, ymin, xmax, ymax) {
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }
}

export class Shape {
    
    constructor(points) {
        this.points = points
    }

    //return clone of this with points in new position
    clone(points) {
        //needs to be overridden in inherited classes
    }

    translate(vec) {
        var points = this.points;
        for (key in points) {
            points[key].plusEq(vec);
        }
        return this.clone(points);
    }

    rotate(angle, centre) {
        var rot = new Rotation(angle);
        var newShape = this.translate(centre.negative());
        var points = this.points;
        for (key in points) {
            points[key] = rot.vMult(
                points[key].minus(centre)
            ).plus(centre)
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

export class Circle extends Shape {

    constructor(centre, rad) {
        super({centre: centre})
        this.centre = centre;
        this.rad = rad;
    }

    clone(points) {
        return new Circle(points.centre, this.rad);
    }

    //string representation
    string() {
        return `Circle[${centre.string()}, rad ${rad}]`;
    }

}

export class Rectangle extends Shape {

    constructor(centre, width, height, orientation) {
        super({
            v1 : 
        })
    }
}

export class Square extends Rectangle {

}