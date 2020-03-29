//Rectangle shape class

import{print} from '../print.mjs';
import {Base} from '../base.mjs';
import {constants} from '../constants.mjs';
import {Vector} from '../Maths/vector.mjs';
import {Rotation} from '../Maths/rotation.mjs';
import {BBox} from './bbox.mjs';

export class CompoundShape extends Base {

    constructor(shapes) {
        super();
        this.name = constants.COMPOUND_SHAPE;
        if (shapes.length == 0) {
            throw new Error(
                "compound shape must include at least one shape."
            )
        }
        this.shapes = shapes;
        this._bbox = undefined;
        this._centre = undefined;
    }

    //reset properties after rotation / translation
    reset() {
        this._bbox = undefined;
        this._centre = undefined;
    }

    //compare if this == other compoundShape
    eq(compoundShape) {
        if (compoundShape.shapes.length != this.shapes.length) {
            return false;
        }
        for (var i=0; i<this.shapes.length; i++) {
            if (!this.shapes[i].eq(compoundShape.shapes[i])) {
                return false;
            }
        }
        return true;
    }

    //compare if bounding box of this overlaps bounding box of shape
    bboxCompare(shape) {
        return this.bbox().intersect(shape.bbox());
    }

    //return bounding box
    bbox() {
        if (this._bbox == undefined) {
            var bboxes = this.shapes.map(shape => shape.bbox());
            this._bbox = new BBox(
                Math.min(...bboxes.map(bbox=>bbox.xmin)),
                Math.min(...bboxes.map(bbox=>bbox.ymin)),
                Math.max(...bboxes.map(bbox=>bbox.xmax)),
                Math.max(...bboxes.map(bbox=>bbox.ymax)),
            );
        }
        return this._bbox;
    }

    //return centre of this
    centre() {
        if(this._centre == undefined) {
            this._centre = this.shapes.reduce(
                (result, value) => result.plus(value.centre()),
                new Vector(0,0),
            ).sMult(1/this.shapes.length);
        }
        return this._centre;
    }

    //return this translated by vec
    translate(vec) {
        var shapes = [];
        for (var shape of this.shapes) {
            shapes.push(shape.translate(vec));
        }
        return new CompoundShape(shapes);
    }

    //translate this by vec
    translateEq(vec) {
        for (var shape of this.shapes) {
            shape.translateEq(vec);
        }
        this.reset();
    }

    //return this rotated by angle about pivot (default: (0,0))
    rotate(angle, pivot) {
        var shapes = [];
        for (var shape of this.shapes) {
            shapes.push(shape.rotate(angle, pivot))
        }
        return new CompoundShape(shapes);
    }

    //rotate this by angle about pivot (default: (0,0))
    rotateEq(angle, pivot) {
        var rot = new Rotation(angle);
        for (var shape of this.shapes) {
            shape.rotateEq(angle, pivot);
        }
        this.reset();
    }

    //draw rectangle to ctx
    draw(ctx) {
        for(var shape of this.shapes) {
            shape.draw(ctx);
        }
    }

    //string representation
    string() {
        return (
            `Compound Shape {
                ${(this.shapes.map(shape=>shape.string())).join(", ")}
            }`
        );
    }

}
