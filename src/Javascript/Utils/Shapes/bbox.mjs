//bbox class

import {print} from '../print.mjs';

export class BBox {
    
    constructor(xmin, ymin, xmax, ymax) {
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }

    //check if this intersects other bbox
    intersect(bbox) {
        return (
            (
                (this.xmin > bbox.xmin && this.xmin < bbox.xmax) ||
                (this.xmax > bbox.xmin && this.xmax < bbox.xmax)
            ) &&
            (
                (this.ymin > bbox.ymin && this.ymin < bbox.ymax) ||
                (this.ymax > bbox.ymin && this.ymax < bbox.ymax)
            )
        )
    }

    //string representation
    string() {
        return `BBox[(${this.xmin},${this.ymin}) to (${this.xmax},${this.ymax})]`;
    }

    //print string representation
    print() {
        print(this.string());
    }

}