import {Vector, Line} from '../../exports.mjs';

//---------------------------------------
//LINE-LINE COLLISIONS
//---------------------------------------
export var line_line = {
    FIXTURE_HEIGHT: 130
};

line_line.collision = {

    line1: new Line(
        new Vector(50, 150), new Vector(180, 80)
    ),
    rLine1: new Line(
        new Vector(50, 150), new Vector(180, 80)
    ),
    line2: new Line(
        new Vector(40, 80), new Vector(180, 100), 5
    ),
    rLine2: new Line(
        new Vector(180, 100), new Vector(40, 80), 5
    ),
    line3: new Line(
        new Vector(140, 50), new Vector(140, 130), 10
    ),
    rLine3: new Line(
        new Vector(140, 130), new Vector(140, 50), 10
    ),
    line4: new Line(
        new Vector(40, 40), new Vector(190, 140), 5
    ),
    rLine4: new Line(
        new Vector(190, 140), new Vector(40, 40), 5
    ),

    FIXTURE_LENGTH: 160,
    FIXTURE_TRANSFORM: new Vector(-20, -20),
    FIXTURE_SCALE: 0.9,
}