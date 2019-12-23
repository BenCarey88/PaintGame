//functions to apply on mouse move event

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';
import {Line} from '../Classes/line.mjs';

function mouseMove(event, screen) {
    screen.pos2 = new Vector(
        event.clientX - screen.canvas.offsetLeft,
        event.clientY - screen.canvas.offsetTop
    );
    if (screen.clicked) {

    }
    screen.pos1 = screen.pos2;
    // x2 = event.clientX - canvas.offsetLeft;
    // y2 = event.clientY - canvas.offsetTop; 
    // if (clicked){
    //     drawLine(x1,y1,x2,y2,1,10);
    //     addLine(x1,y1,x2,y2);
    // x1 = x2;
    // y1 = y2;
}

//mouseMoveHandler(screen)(event) = mouseMove(event, screen)
export function mouseMoveHandler(screen) {
    function eventHandler(event) {
        mouseMove(event, screen)
    }
    return eventHandler
}