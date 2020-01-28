//Rectangle shape class

import {Vector} from '../Maths/vector.mjs';
import {BBox} from './bbox.mjs';
import {Shape} from './shape.mjs';

export class Rect extends Shape {

    constructor(centre, width, height, orientation, vertices) {
        if (vertices==undefined) {
            
        }
        super({centre: centre});
        this.width = width;
        this.height = height;
        this.orientation = orientation;
        
        // var theta = Math.atan2(height, width);
        // var diagonal = 0.5*Math.sqrt(height*height + width*width);

        this.displayCoordinates = {
            xmin: centre.x - width/2,
            ymin: centre.y - height/2,
            xmax: centre.x + width/2,
            ymax: centre.y + height/2
        }

        // this.v1 = centre.minus(
        //     new Vector(
        //         diagonal * Math.cos(theta - orientation)
        //     )
        // );
        // this.v2 = 
        // this.v3 =
        // this.v4 =
    }

    bbox() {
        return new BBox(
            Math.min(this.v1.x, this.v2.x, this.v3.x, this.v4.x),
            Math.min(this.v1.y, this.v2.y, this.v3.y, this.v4.y),
            Math.max(this.v1.x, this.v2.x, this.v3.x, this.v4.x),
            Math.max(this.v1.y, this.v2.y, this.v3.y, this.v4.y)
        );
    }

    clone(points) {
        return new Rect(points.v1, points.v2, points.v3, points.v4);
    }

    orientation() {
        return Math.atan2(
            this.v2.y - this.v1.y, this.v2.x - this.v1.x
        );
    }

    centre() {
        return new Vector(
            0.25 * (this.v1.x + this.v2.x + this.v3.x + this.v4.x),
            0.25 * (this.v1.y + this.v2.y + this.v3.y + this.v4.y)
        )
    }

    //draw rectangle to ctx
    draw(ctx) {
        ctx.fillStyle = "red";
		ctx.save();
		ctx.translate(this.centre().x, this.centre().y);
		ctx.rotate(this.orientation());
        ctx.fillRect(
            -this.width * 0.5, -this.height * 0.5, 
            this.width, this.height
        );
		ctx.restore();
    }

    //string representation
    string() {
        return (
            `Rectangle[${this.v1.string()}, ${this.v2.string()},
            ${this.v3.string()}, ${this.v4.string()}]`
        );
    }

}
