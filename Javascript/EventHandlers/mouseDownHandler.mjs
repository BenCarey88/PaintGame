//functions to apply on mouse down event

import {print, newLine} from '../Utils/debugging.mjs';
import {Vector} from '../Utils/vector.mjs';

function mouseDown(event, screen) {
    screen.clicked = true;
    screen.pos1 = new Vector(
        event.clientX - screen.canvas.offsetLeft,
        event.clientY - screen.canvas.offsetTop
    );
}

//mouseDownHandler(screen)(event) = mouseDown(event, screen)
export function mouseDownHandler(screen) {
    function eventHandler(event) {
        mouseDown(event, screen)
    }
    return eventHandler
}