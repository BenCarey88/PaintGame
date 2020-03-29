//Rectangle shape class

import {constants} from '../constants.mjs';
import {BBox} from './bbox.mjs';
import {Line} from './line.mjs';
import {CompoundShape} from './compoundShape.mjs';

export class Polygon extends CompoundShape {

    constructor(vertices, linewidth=10) {
        var shapes = vertices.reduce(
            function(result, value, index, array) {
                result.push(
                    new Line (
                        array[index % array.length],
                        array[(index + 1) % array.length],
                        linewidth,
                    )
                );
                return result;
            },
            [],
        );
        super(shapes);

        this.name = constants.POLYGON;

        this.vertices = vertices;
        this.linewidth = linewidth;
    }

    //return bbox of this (overrides compoundShape method because this way is faster)
    bbox() {
        if (this._bbox == undefined) {
            this._bbox =  new BBox(
                Math.min(...this.vertices.map(v => v.x)) - this.linewidth * 0.5,
                Math.min(...this.vertices.map(v => v.y)) - this.linewidth * 0.5,
                Math.max(...this.vertices.map(v => v.x)) + this.linewidth * 0.5,
                Math.max(...this.vertices.map(v => v.y)) + this.linewidth * 0.5,
            );
        }
        return this._bbox;
    }

    //return centre of this (overrides compoundShape method because this way is faster)
    centre() {
        if(this._centre == undefined) {
            this._centre = this.vertices.reduce(
                (result, value) => result.plus(value),
            ).sMult(1/this.vertices.length);
        }
        return this._centre;
    }

    //string representation
    string() {
        return (
            `Polygon [
                ${(this.vertices.map(vertex=>vertex.string())).join(", ")}
            ]`
        );
    }

}
