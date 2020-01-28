//bbox class

import {print} from '../print.mjs';
import {Base} from '../base.mjs';

export class BBox extends Base {
    
    constructor(xmin, ymin, xmax, ymax) {
        super();
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }

    //compare if this == other bbox
    eq(bbox) {
        return (
            this.floatEq(this.xmin, bbox.xmin) &&
            this.floatEq(this.ymin, bbox.ymin) &&
            this.floatEq(this.xmax, bbox.xmax) &&
            this.floatEq(this.ymax, bbox.ymax)
        );
    }

    //check if this intersects other bbox
    intersect(bbox) {
        return (
            Math.max(this.xmin, bbox.xmin) < Math.min(this.xmax, bbox.xmax) &&
            Math.max(this.ymin, bbox.ymin) < Math.min(this.ymax, bbox.ymax)
        );
    }

    //string representation
    string() {
        return `BBox[(${this.xmin},${this.ymin}) to (${this.xmax},${this.ymax})]`;
    }

}