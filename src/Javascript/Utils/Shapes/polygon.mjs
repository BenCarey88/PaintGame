//Rectangle shape class

import {constants} from '../constants.mjs';
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

    //string representation
    string() {
        return (
            `Polygon [
                ${", ".join(this.vertices.map(vertex=>vertex.string()))}
            ]`
        );
    }

}
