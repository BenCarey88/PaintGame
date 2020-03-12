import {Vector, Circle, Line} from '../../exports.mjs';

//---------------------------------------
//CIRCLE-LINE COLLISIONS
//---------------------------------------
export var circ_line = {
    FIXTURE_HEIGHT: 110
};

//collision, line passing through sphere body
circ_line.centre_collision = {
    circ: new Circle(
        new Vector(70, 70), 20   
    ),
    line: new Line(
        new Vector(50, 20),
        new Vector(120, 90)
    ),
    rLine: new Line(
        new Vector(120, 90),
        new Vector(50, 20)
    ),
}

//line fully inside circle
circ_line.line_in_circle = {
    circ: new Circle(
        new Vector(50, 50), 40   
    ),
    line: new Line(
        new Vector(40, 30),
        new Vector(40, 70)
    ),
    rLine: new Line(
        new Vector(40, 70),
        new Vector(40, 30)
    ),

    FIXTURE_LENGTH: 100,
}

//circle fully inside line
circ_line.circle_in_line = {
    line: new Line(
        new Vector(20, 20),
        new Vector(80, 80)
    ),
    rLine: new Line(
        new Vector(80, 80),
        new Vector(20, 20)
    ),
    circ: new Circle(
        new Vector(50, 50), 5
    ),

    FIXTURE_LENGTH: 100,
}

//ends of lines intersects sphere
circ_line.end_collision = {
    circ: new Circle(
        new Vector(30, 70), 20   
    ),
    line: new Line(
        new Vector(30, 50),
        new Vector(50, 20)
    ),
    rLine: new Line(
        new Vector(50, 20),
        new Vector(30, 50)
    ),

    FIXTURE_LENGTH: 70,
}

//sphere boundary touches edge boundary of line
circ_line.boundary_case = {
    circ: new Circle(
        new Vector(40, 70), 30   
    ),
    line: new Line(
        new Vector(20, 30),
        new Vector(80, 30)
    ),
    rLine: new Line(
        new Vector(80, 30),
        new Vector(20, 30)
    ),

    FIXTURE_LENGTH: 100,
}

//sphere boundary touches end boundary of line
circ_line.boundary_case_line_ends = {
    circ: new Circle(
        new Vector(30, 40), 25   
    ),
    line: new Line(
        new Vector(
            30 + 35 * Math.sqrt(2) * 0.5,
            40 + 35 * Math.sqrt(2) * 0.5
        ),
        new Vector(90, 90)
    ),
    rLine: new Line(
        new Vector(90, 90),
        new Vector(
            30 + 35 * Math.sqrt(2) * 0.5,
            40 + 35 * Math.sqrt(2) * 0.5
        )
    ),

    FIXTURE_LENGTH: 110
}

//no intersection
circ_line.no_intersection = {
    //bbox overlap
    circ_1: new Circle(
        new Vector(30, 40), 25   
    ),
    line_1: new Line(
        new Vector(30, 90),
        new Vector(70, 70)
    ),
    rLine_1: new Line(
        new Vector(70, 70),
        new Vector(30, 90)
    ),
    //bboxes disconnected
    circ_2: new Circle(
        new Vector(180, 40), 30   
    ),
    line_2: new Line(
        new Vector(110, 20),
        new Vector(130, 90)
    ),
    rLine_2: new Line(
        new Vector(130, 90),
        new Vector(110, 20)
    ),

    FIXTURE_LENGTH: 220,
}
