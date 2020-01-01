//Screen class containing game global states

import {print, newLine} from './Utils/debugging.mjs';
import {Vector} from './Utils/vector.mjs';
import {Line} from './Utils/line.mjs';

import {Character} from './GameClasses/character.mjs';
import {moveCharacter} from './Movement/characterMovement.mjs';

import {mouseDownHandler} from './EventHandlers/mouseDownHandler.mjs';
import {mouseMoveHandler} from './EventHandlers/mouseMoveHandler.mjs';
import {mouseUpHandler} from './EventHandlers/mouseUpHandler.mjs';
import {keyDownHandler} from './EventHandlers/keyDownHandler.mjs';
import {keyUpHandler} from './EventHandlers/keyUpHandler.mjs';

import {paintLines} from './Display/paint.mjs';
import {displayCharacter} from './Display/character.mjs';

export class Screen {

    // initialise screen attributes on construction
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.pos1 = new Vector(0, 0);
        this.pos2 = new Vector(0, 0);
        this.clicked = false;
        
        this.character = new Character(50, 50);

        var topLeft = new Vector(0, 0);
        var topRight = new Vector(this.width, 0);
        var bottomLeft = new Vector(0, this.height);
        var bottomRight = new Vector(this.width, this.height);
        this.lines = [
            new Line(bottomLeft, bottomRight)
        ];
        this.minLineLength = 20;
        //for now the screen has a coefficient of elasticity - later I'll make
        //this a property of individual lines
        this.coe = 0.3;
    }

    // add event listeners to screen
    init() {
        this.canvas.addEventListener("mousedown", mouseDownHandler(this), false);
        this.canvas.addEventListener("mouseup", mouseUpHandler(this), false);
        this.canvas.addEventListener("mousemove", mouseMoveHandler(this), false);
        document.addEventListener("keydown", keyDownHandler(this), false);
        document.addEventListener("keyup", keyUpHandler(this), false);
    }

    // game movement
    movement() {
        moveCharacter(this);
    } 

    // display game
    display() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        displayCharacter(this);
        paintLines(this);
    }

    // run game with requestAnimationFrame
    run() {
        this.movement();
        this.display();
	    requestAnimationFrame(()=>this.run());
    }

}