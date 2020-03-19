import {Vector, Line} from '../../exports.mjs';

//---------------------------------------
//LINE-LINE COLLISIONS
//---------------------------------------
export var line_line = {
    FIXTURE_HEIGHT: 130
};

//standard collision
line_line.collision = {

    line1: new Line(
        new Vector(50, 150), new Vector(180, 80)
    ),
    rLine1: new Line(
        new Vector(50, 150), new Vector(180, 80)
    ),
    line2: new Line(
        new Vector(50, 160), new Vector(180, 90)
    ),
    rLine2: new Line(
        new Vector(50, 160), new Vector(180, 90)
    ),
    line3: new Line(
        new Vector(40, 80), new Vector(170, 100), 5
    ),
    rLine3: new Line(
        new Vector(170, 100), new Vector(40, 80), 5
    ),
    line4: new Line(
        new Vector(140, 50), new Vector(140, 130), 10
    ),
    rLine4: new Line(
        new Vector(140, 130), new Vector(140, 50), 10
    ),
    line5: new Line(
        new Vector(40, 40), new Vector(190, 140), 5
    ),
    rLine5: new Line(
        new Vector(190, 140), new Vector(40, 40), 5
    ),
    line6: new Line(
        new Vector(135, 125), new Vector(120, 98), 10
    ),
    rLine6: new Line(
        new Vector(120, 98), new Vector(135, 125), 10
    ),

    FIXTURE_LENGTH: 160,
    FIXTURE_TRANSFORM: new Vector(-20, -20),
    FIXTURE_SCALE: 0.9,
}

//boundary case
line_line.boundary_case = {
    line1: new Line(
        new Vector(60, 60), new Vector(160, 60), 40
    ),
    rLine1: new Line(
        new Vector(160, 60), new Vector(60, 60), 40
    ),

    line2: new Line(
        new Vector(25, 65), new Vector(55, 25), 10
    ),
    rLine2: new Line(
        new Vector(55, 25), new Vector(25, 65), 10
    ),
    line3: new Line(
        new Vector(90, 30), new Vector(160, 30), 20
    ),
    rLine3: new Line(
        new Vector(160, 30), new Vector(90, 30), 20
    ),
    line4: new Line(
        new Vector(185, 60), new Vector(200, 100), 10
    ),
    rLine4: new Line(
        new Vector(200, 100), new Vector(185, 60), 10
    ),
    line5: new Line(
        new Vector(37.5, 30), new Vector(37.5, 110), 5
    ),
    rLine5: new Line(
        new Vector(37.5, 110), new Vector(37.5, 30), 5
    ),
    line6: new Line(
        new Vector(80, 90), new Vector(150, 110), 20
    ),
    rLine6: new Line(
        new Vector(150, 110), new Vector(80, 90), 20
    ),

    FIXTURE_LENGTH: 200,
    FIXTURE_TRANSFORM: new Vector(0, 10),
    FIXTURE_SCALE: 0.9,
}

//fully_inside
line_line.fully_inside = {
    line1: new Line(
        new Vector(60, 50), new Vector(160, 70), 70
    ),
    rLine1: new Line(
        new Vector(160, 70), new Vector(60, 50), 70
    ),
    line2: new Line(
        new Vector(60, 50), new Vector(160, 70), 50
    ),
    rLine2: new Line(
        new Vector(160, 70), new Vector(60, 50), 50
    ),
    line3: new Line(
        new Vector(50, 60), new Vector(80, 40), 5
    ),
    rLine3: new Line(
        new Vector(80, 40), new Vector(50, 60), 5
    ),

    FIXTURE_LENGTH: 200,
    FIXTURE_TRANSFORM: new Vector(0, 10),
    FIXTURE_SCALE: 0.9,
}

//no collision
line_line.no_collision = {
    line1: new Line(
        new Vector(50, 150), new Vector(180, 130)
    ),
    rLine1: new Line(
        new Vector(180, 130), new Vector(50, 150)
    ),
    line2: new Line(
        new Vector(40, 80), new Vector(60, 130), 5
    ),
    rLine2: new Line(
        new Vector(60, 130), new Vector(40, 80), 5
    ),
    line3: new Line(
        new Vector(140, 50), new Vector(140, 120), 10
    ),
    rLine3: new Line(
        new Vector(140, 120), new Vector(140, 50), 10
    ),
    line4: new Line(
        new Vector(40, 40), new Vector(130, 100), 5
    ),
    rLine4: new Line(
        new Vector(130, 100), new Vector(40, 40), 5
    ),
    line5: new Line(
        new Vector(155, 50), new Vector(155, 110), 10
    ),
    rLine5: new Line(
        new Vector(155, 110), new Vector(155, 50), 10
    ),
    line6: new Line(
        new Vector(65, 100), new Vector(90, 90)
    ),
    rLine6: new Line(
        new Vector(90, 90), new Vector(65, 100)
    ),

    FIXTURE_LENGTH: 160,
    FIXTURE_TRANSFORM: new Vector(-20, -20),
    FIXTURE_SCALE: 0.9,
}