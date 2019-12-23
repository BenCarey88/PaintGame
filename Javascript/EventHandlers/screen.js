//eventHandlers

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs'

import {mouseDownHandler} from './mouseDownHandler.mjs';
import {mouseMoveHandler} from './mouseMoveHandler.mjs';
import {mouseUpHandler} from './mouseUpHandler.mjs';

export class Screen {

    constructor() {
        this.oldPos = new Vector(0, 0);
        this.newPos = new Vector(0, 0);
        this.clicked = false;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.lines = [];
    }

    // add event listeners to docElement
    init(docElement) {
        docElement.addEventListener("mousedown", mouseDownHandler(this), false);
        docElement.addEventListener("mouseup", mouseUpHandler(this), false);
        docElement.addEventListener("mousemove", mouseMoveHandler(this), false);
    }

}