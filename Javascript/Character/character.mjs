//character class for player character

import {print, newLine} from '../Classes/debugging.mjs';
import {Vector} from '../Classes/vector.mjs';
import {Rotation} from '../Classes/rotation.mjs';

export class Character {

    // construct character with position on screen
    constructor(x, y, vx=0, vy=0, ax=0, ay=0) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(vx, vy);
        this.acc = new Vector(ax, ay);
        
        this.rad = 30;
        this.forces = [];
    }

    rotate(angle, centre) {
        var rot = new Rotation(angle);
        if (centre == undefined) {
            centre = new Vector(0, 0);
        }
        var newPos = this.pos.minus(centre);
        newPos = rot.vMult(newPos);
        var newVel = rot.vMult(this.vel);
        var newAcc = rot.vMult(this.acc);
        newPos.plusEq(centre)

        return new Character(
            newPos.x, newPos.y, 
            newVel.x, newVel.y,
            newAcc.x, newAcc.y
        );
    }

}