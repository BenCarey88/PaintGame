// functions for character movement

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';
import {Rotation} from '../Classes/rotation.mjs';

function applyGravity(screen) {
    screen.character.acc.y = 0.1;
}

// function charIntersectsLine(screen, character, line) {
    
//     var rotChar = character.rotate(-line.elevation(), line.centre());
//     var rotLine = line.rotate(-line.elevation(), line.centre());

//     return(
//          rotChar.pos.x + 30 > rotLine.x1 - 10 &&
//          rotChar.pos.x - 30 < rotLine.x2 + 10 &&
//          rotChar.pos.y + 30 > rotLine.y1 - 10 &&
//          rotChar.pos.y - 30 < rotLine.y2 + 10
//     )

//     return(
//         character.pos.x > line.x1 - 10 && character.pos.x < line.x2 + 10 &&
//         character.pos.y > line.y1 - 10 && character.pos.y < line.y2 + 10
//     )
// }


// function intersection(screen) {
//     var result = false;
//     screen.linesTemp = [];
//     for(var i=0; i<screen.lines.length; i++) {
//         var line = screen.lines[i];
//         if(charIntersectsLine(screen, screen.character, line)){
//             result = true;
//             break;
//         }
//     }
//     return result;
// }

function findIntersection(character, line) {
    var intersection = false;
    var angle = line.elevation();
    var pivot = line.centre();
    character = character.rotate(-angle, pivot);
    line = line.rotate(-angle, pivot);
    var vel = character.vel;
    var pos = character.pos;
    var rad = character.rad;
    var width = line.width/2;

    var intersectTop = (
        vel.y > 0 &&
        pos.x > line.x1 &&
        pos.x < line.x2 &&
        pos.y + rad > line.y1 - width &&
        pos.y + rad < line.y1 + width
    );
    var intersectBottom = (
        vel.y < 0 &&
        pos.x > line.x1 &&
        pos.x < line.x2 &&
        pos.y - rad > line.y1 - width &&
        pos.y - rad < line.y1 + width
    );
    var leftVec = line.pos1.minus(pos);
    var intersectLeft = (
        leftVec.magnitude() < rad + width &&
        vel.dot(leftVec) > 0
    );
    var rightVec = line.pos2.minus(pos);
    var intersectRight = (
        rightVec.magnitude() < rad + width &&
        vel.dot(rightVec) > 0
    );

    if(intersectTop) {
        intersection = pos.plus(new Vector(0, rad));
    }
    else if(intersectBottom) {
        intersection = pos.minus(new Vector(0, rad));
    }
    else if(intersectLeft) {
        intersection = pos.plus(leftVec.unit().sMult(rad));
    }
    else if(intersectRight) {
        intersection = pos.plus(rightVec.unit().sMult(rad));
    }

    if(intersection) {
        var rot = new Rotation(angle);
        intersection.minusEq(pivot);
        intersection = rot.vMult(intersection);
        intersection.plusEq(pivot);
    }
    return intersection;
}

function collisonDetection(screen) {
    var character = screen.character;
    var vel = character.vel;
    var pos = character.pos;
    //in case there are multiple intersections, use dotProdCompare to determine
    //which is furthest along direction of travel, and then use that one
    var dotProductCompare = 0;
    var perpLine = false;
    var perpLineList = [];
    for(var i=0; i<screen.lines.length; i++) {
        var line = screen.lines[i];
        var intersection = findIntersection(character, line);
        if (intersection) {
            //var perpLine = intersection.minus(pos);
            //vel.setComponentToZero(perpLine);
            var dotProduct = vel.dot(intersection.minus(pos));
            perpLineList.push(intersection.minus(pos));
            if (dotProduct > dotProductCompare) {
                dotProductCompare = dotProduct;
                //vector perpendicular to line:
                perpLine = intersection.minus(pos);
            }
        }
    }
    var stopMoving = false;
    for(var i=0; i<perpLineList.length; i++) {
        var v = perpLineList[i];
        for(var j=0; j<i; j++) {
            var u = perpLineList[j];
            if(u.dot(v) < 0) {
                stopMoving = true;
                break;
            }
        }
    }
    if(stopMoving) {
        vel.x = 0;
        vel.y = 0;
        print("stop moving");
    }
    else if(perpLine) {
        vel.setComponentToZero(perpLine);
    }
}

export function moveCharacter(screen) {
    applyGravity(screen);
    var character = screen.character;
    character.vel.plusEq(character.acc);
    collisonDetection(screen);
    // if(intersection(screen)){
    //     character.vel = new Vector(0, 0);
    // }
    character.pos.plusEq(character.vel);
}