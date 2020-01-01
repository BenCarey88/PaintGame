//functions to apply on mouse move event

import {print, newLine} from '../Utils/debugging.mjs';
import {Vector} from '../Utils/vector.mjs';
import {Line} from '../Utils/line.mjs';

import {isInside} from '../Movement/collisionDetection.mjs';

function mouseMove(event, screen) {
    screen.pos2 = new Vector(
        event.clientX - screen.canvas.offsetLeft,
        event.clientY - screen.canvas.offsetTop
    );
    var line = new Line(screen.pos1, screen.pos2);
    if (screen.clicked && line.length()>screen.minLineLength) {
        if(!isInside(screen.character, line)) {
            screen.lines.push(line);
        }
        screen.pos1 = screen.pos2;
    }
}

//mouseMoveHandler(screen)(event) = mouseMove(event, screen)
export function mouseMoveHandler(screen) {
    function eventHandler(event) {
        mouseMove(event, screen)
    }
    return eventHandler
}