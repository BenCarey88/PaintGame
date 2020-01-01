//functions to apply on key down event

import {print, newLine} from '../Utils/debugging.mjs';
import {Vector} from '../Utils/vector.mjs';

var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

function keyDown(event, screen) {
    var character = screen.character;
    if (event.keyCode == UP && character.canJump) {
        character.upForce = character.jumpStrength;
    }
    // else if (event.keyCode == DOWN) {
    //     character.upForce = -character.jumpStrength;
    // }
    else if (event.keyCode == LEFT) {
        character.leftForce = character.moveStrength;
    }
    else if (event.keyCode == RIGHT) {
        character.rightForce = character.moveStrength;
    }
    // screen.clicked = true;
    // screen.pos1 = new Vector(
    //     event.clientX - screen.canvas.offsetLeft,
    //     event.clientY - screen.canvas.offsetTop
    // );
}

//keyDownHandler(screen)(event) = keyDown(event, screen)
export function keyDownHandler(screen) {
    function eventHandler(event) {
        keyDown(event, screen)
    }
    return eventHandler
}