import {Vector, BBox, Circle, Line, Rect} from '../../exports.mjs';

//---------------------------------------
//CIRCLE-CIRCLE COLLISIONS
//---------------------------------------
var circ_circ = {
    FIXTURE_HEIGHT: 150
};

//standard collision
circ_circ.collision = {
    circ_1: new Circle (
        new Vector(60, 60), 30    
    ),
    circ_2: new Circle (
        new Vector(100, 80), 40
    ),
};
//full overlap
circ_circ.full_overlap = {
    circ_1: new Circle (
        new Vector(80, 80), 50
    ),
    circ_2: new Circle (
        new Vector(80, 80), 50
    ),
};
//boundaries touching
circ_circ.boundary_case = {
    //bboxes touching
    circ_1: new Circle (
        new Vector(60, 50), 40
    ),
    circ_2: new Circle (
        new Vector(60, 110), 20
    ),
    //bboxes overlapping
    circ_3: new Circle (
        new Vector(140, 40), 30    
    ),
    circ_4: new Circle (
        new Vector(
            140 + 70 * Math.sqrt(2) * 0.5, 
            40 + 70 * Math.sqrt(2) * 0.5
        ),
        40
    ),

    FIXTURE_LENGTH: 240
}
//no intersection
circ_circ.no_intersection = {
    //bboxes overlapping
    circ_1: new Circle(
        new Vector(60, 60), 30    
    ),
    circ_2: new Circle(
        new Vector(110, 100), 30
    ),
    //bboxes disconnected
    circ_3: new Circle(
        new Vector(180, 50), 30    
    ),
    circ_4: new Circle(
        new Vector(240, 100), 20
    ),

    FIXTURE_LENGTH: 270
}


//---------------------------------------
//CIRCLE-LINE COLLISIONS
//---------------------------------------
var circ_line = {
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




var circle6_1 = new Circle(
    new Vector(70, 200), 20   
);
var line6_2 = new Line(
    new Vector(50, 150),
    new Vector(120, 220)
);
var rLine6_2 = new Line(
    new Vector(200, 300),
    new Vector(50, 100)
);
//collision, end of line intersects sphere
var circle7_1 = new Circle(
    new Vector(70, 150), 20   
);
var line7_2 = new Line(
    new Vector(640, 100), 20
);


var circle1 = new Circle(
    new Vector(120, 150), 30
);
var circle2 = new Circle(
    new Vector(180, 150), 50
);
var circle3 = new Circle(
    new Vector(300, 150), 30
);
var circle4 = new Circle(
    new Vector(500, 150), 50
);

var line1 = new Line(
    new Vector(300, 250),
    new Vector(350, 100)
);
var line2 = new Line(
    new Vector(100, 500),
    new Vector(200, 300)
);
var line3 = new Line(
    new Vector(100, 400),
    new Vector(200, 350)
);
var line4 = new Line(
    new Vector(400, 300),
    new Vector(300, 400)
);

var rect1 = new Rect(
    new Vector(520, 150),
    100, 50, Math.PI/6
);
var rect2 = new Rect(
    new Vector(300, 400),
    100, 100, Math.PI
);
var rect3 = new Rect(
    new Vector(550, 300),
    200, 100, 0
);
var rect4 = new Rect(
    new Vector(500, 380),
    50, 100, Math.PI/3 
);

export var fixtureList = {
    
    circ_circ: circ_circ,
    circ_line: circ_line,
    // circle1_1: circle1_1,
    // circle1_2: circle1_2,
    // circle2_1: circle2_1,
    // circle2_2: circle2_2,
    // circle3_1: circle3_1,
    // circle3_2: circle3_2,
    // circle4_1: circle4_1,
    // circle4_2: circle4_2,
    // circle5_1: circle5_1,
    // circle5_2: circle5_2,

    // circle6_1: circle6_1,
    // line6_2: line6_2,
    // circle7_1: circle7_1,
    // line7_2: line7_2,
    // circle8_1: circle8_1,
    // line8_2: line8_2,
    // circle9_1: circle9_1,
    // line9_2: line9_2,
    // circle10_1: circle10_1,
    // line10_2: line10_2,

    // circle1: circle1,
    // circle2: circle2,
    // circle3: circle3,
    // circle4: circle4,
    // line1: line1,
    // line2: line2,
    // line3: line3,
    // line4: line4,
    // rect1: rect1,
    // rect2: rect2,
    // rect3: rect3,
    // rect4: rect4,
};