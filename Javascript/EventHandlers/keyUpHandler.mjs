//functions to apply on key up event

import {print, newLine} from '../Utils/debugging.mjs';
import {Vector} from '../Utils/vector.mjs';

var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

function keyUp(event, screen) {
    var character = screen.character;
    if (event.keyCode == UP) {
        character.upForce = 0;
    }
    else if (event.keyCode == LEFT) {
        character.leftForce = 0;
    }
    else if (event.keyCode == RIGHT) {
        character.rightForce = 0;
    }
}

//keyUpHandler(screen)(event) = keyUp(event, screen)
export function keyUpHandler(screen) {
    function eventHandler(event) {
        keyUp(event, screen)
    }
    return eventHandler
}