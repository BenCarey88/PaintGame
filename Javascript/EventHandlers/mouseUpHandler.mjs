//functions to apply on mouse up event

import {print, newLine} from '../Classes/debugging.mjs';

function mouseUp(event, screen) {

}

export function mouseUpHandler(screen) {
    function eventHandler(event) {
        mouseUp(event, screen)
    }
    return eventHandler
}