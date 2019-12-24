// functions for character movement

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';
import {Rotation} from '../Classes/rotation.mjs';

function applyGravity(screen) {
    screen.character.acc.y = 0.1;
}

function charIntersectsLine(screen, character, line) {
    
    var rot = new Rotation(-line.elevation);
    var rotPos = character.pos.minus(line.centre());
    rotPos = rot.vMult(rotPos);
    rotPos.plusEq(line.centre());

    var rotLine = line.rotate(-line.elevation);
    
    // return(
    //     rotPos.x > rotLine.x1 - 10 && rotPos.x < rotLine.x2 + 10 &&
    //     rotPos.y > rotLine.y1 - 10 && rotPos.y < rotLine.y2 + 10
    // )

    return(
        character.pos.x > line.x1 - 10 && character.pos.x < line.x2 + 10 &&
        character.pos.y > line.y1 - 10 && character.pos.y < line.y2 + 10
    )
}


function intersection(screen) {
    var result = false;
    screen.linesTemp = [];
    for(var i=0; i<screen.lines.length; i++) {
        var line = screen.lines[i];
        if(charIntersectsLine(screen, screen.character, line)){
            result = true;
            break;
        }
    }
    return result;
}

export function moveCharacter(screen) {
    applyGravity(screen);
    var character = screen.character;
    character.vel.plusEq(character.acc);
    if(intersection(screen)){
        character.vel = new Vector(0, 0);
    }
    character.pos.plusEq(character.vel);
}