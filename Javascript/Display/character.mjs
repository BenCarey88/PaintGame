//functions for displaying character class

import {print, newLine} from '../Utils/debugging.mjs';
import {Vector} from '../Utils/vector.mjs';

export function displayCharacter(screen) {
    screen.ctx.fillStyle = "blue";
    screen.ctx.beginPath();
    screen.ctx.arc(
        screen.character.pos.x,
        screen.character.pos.y,
        screen.character.rad,
        0, 2 * Math.PI
    );
    screen.ctx.fill();
    screen.ctx.closePath();
}