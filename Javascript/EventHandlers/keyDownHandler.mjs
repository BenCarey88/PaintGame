//functions to apply on key down event

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';

var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

function keyDown(event, screen) {
    if (event.keyCode == UP) {
        screen.character.forces.push(new Vector(0, -1));
    }
    if (event.keyCode == DOWN) {
        screen.character.forces.push(new Vector(0, 1));
    }
    if (event.keyCode == LEFT) {
        screen.character.forces.push(new Vector(-1, 0));
    }
    if (event.keyCode == RIGHT) {
        screen.character.forces.push(new Vector(1,0));
    }
    // screen.clicked = true;
    // screen.pos1 = new Vector(
    //     event.clientX - screen.canvas.offsetLeft,
    //     event.clientY - screen.canvas.offsetTop
    // );
}

export function keyDownHandler(screen) {
    function eventHandler(event) {
        keyDown(event, screen)
    }
    return eventHandler
}