//Screen class containing game global states

import {print, newLine} from './Classes/debugging.mjs';
import {Vector} from './Classes/vector.mjs';
import {Character} from './Character/character.mjs';

import {mouseDownHandler} from './EventHandlers/mouseDownHandler.mjs';
import {mouseMoveHandler} from './EventHandlers/mouseMoveHandler.mjs';
import {mouseUpHandler} from './EventHandlers/mouseUpHandler.mjs';

import {paintLines} from './Display/paint.mjs';
import {displayCharacter} from './Display/character.mjs';

export class Screen {

    // initialise screen attributes on construction
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.oldPos = new Vector(0, 0);
        this.newPos = new Vector(0, 0);
        this.clicked = false;
        
        this.character = new Character(50, 50);

        this.lines = [];
        this.lineWidth = 20;
    }

    // add event listeners to screen
    init() {
        this.canvas.addEventListener("mousedown", mouseDownHandler(this), false);
        this.canvas.addEventListener("mouseup", mouseUpHandler(this), false);
        this.canvas.addEventListener("mousemove", mouseMoveHandler(this), false);
    }

    // display game
    display() {
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.height);
        displayCharacter(this);
        paintLines(this);
    }

    // run game with requestAnimationFrame
    run() {
        this.character.move();
        this.display();
	    requestAnimationFrame(()=>this.run());
    }

}