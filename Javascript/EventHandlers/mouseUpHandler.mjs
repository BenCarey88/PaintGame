//functions to apply on mouse up event

import {print, newLine} from '../Classes/debugging.mjs';

function mouseUp(event, screen) {
    screen.clicked = false;
}

export function mouseUpHandler(screen) {
    function eventHandler(event) {
        mouseUp(event, screen)
    }
    return eventHandler
}