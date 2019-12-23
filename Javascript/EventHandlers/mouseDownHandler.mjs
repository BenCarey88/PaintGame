//functions to apply on mouse down event

import {print, newLine} from '../Classes/debugging.mjs';

function mouseDown(event, screen) {

}

export function mouseDownHandler(screen) {
    function eventHandler(event) {
        mouseDown(event, screen)
    }
    return eventHandler
}