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
        screen.lines.push(
            new Line(screen.pos1, screen.pos2)
        );
    }
    screen.pos1 = screen.pos2;
}

//mouseMoveHandler(screen)(event) = mouseMove(event, screen)
export function mouseMoveHandler(screen) {
    function eventHandler(event) {
        mouseMove(event, screen)
    }
    return eventHandler
}