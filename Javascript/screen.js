//Screen class containing states

import {print, newLine} from './Classes/debugging.mjs';
import {Vector} from './Classes/vector.mjs'

import {mouseDownHandler} from './EventHandlers/mouseDownHandler.mjs';
import {mouseMoveHandler} from './EventHandlers/mouseMoveHandler.mjs';
import {mouseUpHandler} from './EventHandlers/mouseUpHandler.mjs';

export class Screen {

    constructor() {
        this.oldPos = new Vector(0, 0);
        this.newPos = new Vector(0, 0);
        this.clicked = false;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        
        this.lines = [];
    }

    // add event listeners to screen
    init() {
        document.addEventListener("mousedown", mouseDownHandler(this), false);
        document.addEventListener("mouseup", mouseUpHandler(this), false);
        document.addEventListener("mousemove", mouseMoveHandler(this), false);
    }

    draw(spacing, width) {
        for(var i=0; i<this.lines.length; i++) {
            line = this.lines[i];
            var length = line.length();
            for (j=0; j<length/spacing; j++){
                var increment = (spacing*i)/length;
                this.ctx.beginPath();
                this.ctx.arc(
                    line.x1 + increment * (line.x2 - line.x1),
                    line.y1 + increment * (line.y2 - line.y1),
                    width/2, 0, 2 * Math.PI
                );
                this.ctx.fill();
                this.ctx.closePath();
            }
            print("GBHJKLKJHVHJK");
        }
    }
    
    run() {
        this.draw(5, 5);
	    requestAnimationFrame(this.run);
    }

}