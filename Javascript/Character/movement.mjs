// functions for character movement

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';
import {Rotation} from '../Classes/rotation.mjs';

function applyForces(screen) {
    var character = screen.character;
    character.acc = new Vector(0, 0.1);
    for (var i=0; i<character.forces.length; i++) {
        character.acc.plusEq(character.forces[i]);
    }
    character.forces = [];
}

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
    var perpVel = vel.orthog();
    var pos = character.pos;

    //in case there are multiple intersections, use dotProdCompare to determine
    //which is furthest along direction of travel, and then use that one
    var dotProductCompare = 0;
    //unless there are intersections to the right and left of the velocity,
    //in which case the ball should be stopped
    var intersectionToLeft = false;
    var intersectionToRight = false;
    //perpLine stores the vector perpendicular to the line of intersection
    //if intersection occurs, otherwise it is false
    var perpLine = false;
    
    for(var i=0; i<screen.lines.length; i++) {
        var line = screen.lines[i];
        var intersection = findIntersection(character, line);
        if (intersection) {
            
            var tempPerpLine = intersection.minus(pos);
            var dotProduct = vel.dot(tempPerpLine);

            if(tempPerpLine.dot(perpVel) > 0) {
                intersectionToRight = true;
            }
            else {
                intersectionToLeft = true;
            }

            if (dotProduct > dotProductCompare) {
                dotProductCompare = dotProduct;
                perpLine = tempPerpLine;
            }
        }
    }
    if (intersectionToLeft && intersectionToRight) {
        perpLine = vel;
    }
    if(perpLine) {
        vel.minusEq(vel.getComponent(perpLine).sMult(1 + screen.coe));
        //vel.setComponentToZero(perpLine);
    }
}

export function moveCharacter(screen) {
    applyForces(screen);
    var character = screen.character;
    character.vel.plusEq(character.acc);
    collisonDetection(screen);
    character.pos.plusEq(character.vel);
}