//functions to apply on key up event

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';

function keyUp(event, screen) {
    // screen.clicked = true;
    // screen.pos1 = new Vector(
    //     event.clientX - screen.canvas.offsetLeft,
    //     event.clientY - screen.canvas.offsetTop
    // );
}

export function keyUpHandler(screen) {
    function eventHandler(event) {
        keyUp(event, screen)
    }
    return eventHandler
}