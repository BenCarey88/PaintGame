//Matrix class

import {print} from './debugging.mjs';
import {matrix} from './matrix.mjs'

export class rotation extends matrix {

    //construct matrix from rotation angle
    constructor(angle) {
        super(
            Math.cos(angle),
            -Math.sin(angle),
            Math.sin(angle),
            Math.cos(angle)
        );
        this.angle = angle;
    }

}