//functions to apply on mouse down event

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';

function mouseDown(event, screen) {
    screen.clicked = true;
    screen.pos1 = new Vector(
        event.clientX - screen.canvas.offsetLeft,
        event.clientY - screen.canvas.offsetTop
    );
}

export function mouseDownHandler(screen) {
    function eventHandler(event) {
        mouseDown(event, screen)
    }
    return eventHandler
}