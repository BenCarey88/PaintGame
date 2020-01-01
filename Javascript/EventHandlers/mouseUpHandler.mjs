//functions to apply on mouse up event

import {print, newLine} from '../Utils/debugging.mjs';

function mouseUp(event, screen) {
    screen.clicked = false;
}

//mouseUpHandler(screen)(event) = mouseUp(event, screen)
export function mouseUpHandler(screen) {
    function eventHandler(event) {
        mouseUp(event, screen)
    }
    return eventHandler
}