// functions for character movement

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';

function applyGravity(character) {
    character.acc.y = 1;
}

export function moveCharacter(character) {
    applyGravity(character);
    character.vel.plusEq(character.acc);
    character.pos.plusEq(character.vel);
}