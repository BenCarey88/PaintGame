//Line class

import {vector} from './vector.mjs'

export class line {
    
    //construct line from two position vectors
    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
        this.x1 = v1.x;
        this.x2 = v2.x;
        this.y1 = v1.y;
        this.y2 = v2.y;
    }

    length() {
        var lineAsVec = new vector(this.x2-this.x1, this.y2-this.y1)
        return lineAsVec.modulus();
    }

}