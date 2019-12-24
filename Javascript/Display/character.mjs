//functions for displaying character class

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';

export function displayCharacter(screen) {
    screen.ctx.fillStyle = "blue";
    screen.ctx.beginPath();
    screen.ctx.arc(
        screen.character.pos.x,
        screen.character.pos.y,
        30, 0, 2 * Math.PI
    );
    screen.ctx.fill();
    screen.ctx.closePath();
}