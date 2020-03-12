import {Vector, Circle, Rect} from '../../exports.mjs';

//---------------------------------------
//CIRCLE-RECT COLLISIONS
//---------------------------------------
export var circ_rect = {
    FIXTURE_HEIGHT: 150
};

circ_rect.collision_sides = {
    rect: new Rect(
        new Vector(100, 90), 60, 100, Math.PI/3
    ),
    rRect: new Rect(
        new Vector(100, 90), 60, 100, Math.PI * 4/3
    ),
    circ_1: new Circle(
        new Vector(80, 75), 20
    ),
    circ_2: new Circle(
        new Vector(150, 60), 15
    ),
    circ_3: new Circle(
        new Vector(120, 130), 40
    ),
    circ_4: new Circle(
        new Vector(50, 120), 20
    ),

    FIXTURE_LENGTH: 150,
    FIXTURE_TRANSFORM: new Vector(-20, -20),
    FIXTURE_SCALE: 0.9,
};

circ_rect.collision_corners = {
    rect: new Rect(
        new Vector(100, 100), 100, 60, 2 * Math.PI/3
    ),
    rRect: new Rect(
        new Vector(100, 100), 100, 60, 5 * Math.PI * 4/3
    ),
    circ_1: new Circle(
        new Vector(95, 55), 20
    ),
    circ_2: new Circle(
        new Vector(160, 70), 15
    ),
    circ_3: new Circle(
        new Vector(100, 150), 30
    ),
    circ_4: new Circle(
        new Vector(45, 125), 20
    ),

    FIXTURE_LENGTH: 150,
    FIXTURE_TRANSFORM: new Vector(-20, -20),
    FIXTURE_SCALE: 0.9,
};

circ_rect.collision_greater_overlap = {
    circ_1: new Circle(
        new Vector(90, 80), 40
    ),
    circ_2: new Circle(
        new Vector(130, 150), 40
    ),
    rect: new Rect(
        new Vector(100, 100), 100, 60, -2 * Math.PI/3
    ),
    rRect: new Rect(
        new Vector(100, 100), 100, 60, -5 * Math.PI * 4/3
    ),

    FIXTURE_LENGTH: 140,
    FIXTURE_TRANSFORM: new Vector(-30, -30),
    FIXTURE_SCALE: 0.9,
};

circ_rect.boundary_case = {
    rect: new Rect(
        new Vector(100, 100), 100, 100, 2*Math.PI
    ),
    rect_90: new Rect(
        new Vector(100, 100), 100, 100, Math.PI/2
    ),
    rect_180: new Rect(
        new Vector(100, 100), 100, 100, -Math.PI
    ),
    rect_270: new Rect(
        new Vector(100, 100), 100, 100, Math.PI * 3/2
    ),

    circ_side_1: new Circle(
        new Vector(100, 30), 20
    ),
    circ_side_2: new Circle(
        new Vector(165, 100), 15
    ),
    circ_side_3: new Circle(
        new Vector(110, 170), 20
    ),
    circ_side_4: new Circle(
        new Vector(30, 150), 20
    ),

    circ_corner_1: new Circle(
        new Vector(38, 34), 20
    ),
    circ_corner_2: new Circle(
        new Vector(
            150 + Math.sqrt(2) * 25 * 0.5,
            50 - Math.sqrt(2) * 25 * 0.5
        ),
        25
    ),
    circ_corner_3: new Circle(
        new Vector(170, 165), 25
    ),
    circ_corner_4: new Circle(
        new Vector(30, 150), 20
    ),

    FIXTURE_LENGTH: 150,
    FIXTURE_TRANSFORM: new Vector(0, 5),
    FIXTURE_SCALE: 0.7,
};

circ_rect.boundary_case_rotated = {
    rect: new Rect(
        new Vector(100, 100), 100, 100,
        Math.atan2(3, 4)
    ),
    rect_90: new Rect(
        new Vector(100, 100), 100, 100,
        Math.PI/2 + Math.atan2(3, 4)
    ),
    rect_180: new Rect(
        new Vector(100, 100), 100, 100,
        Math.PI + Math.atan2(3, 4)
    ),
    rect_270: new Rect(
        new Vector(100, 100), 100, 100,
        Math.PI * 3/2 + Math.atan2(3, 4)
    ),

    circ_side_1: new Circle(
        new Vector(142, 44), 20
    ),
    circ_side_2: new Circle(
        new Vector(152, 139), 15
    ),
    circ_side_3: new Circle(
        new Vector(66, 162), 20
    ),
    circ_side_4: new Circle(
        new Vector(14, 98), 20
    ),

    circ_corner_1: new Circle(
        new Vector(90, 10), 20
    ),
    circ_corner_2: new Circle(
        new Vector(
            194.74873734152916,
            86.46446609406726
        ),
        25
    ),
    circ_corner_3: new Circle(
        new Vector(117, 194), 25
    ),
    circ_corner_4: new Circle(
        new Vector(14, 98), 20
    ),

    FIXTURE_LENGTH: 150,
    FIXTURE_TRANSFORM: new Vector(10, 10),
    FIXTURE_SCALE: 0.6,
};

circ_rect.fully_inside = {
    rect_1: new Rect(
        new Vector(-30, 40), 80, 90, Math.PI/4
    ),
    rRect_1: new Rect(
        new Vector(-30, 40), 80, 90, Math.PI * 5/4
    ),
    circ_1: new Circle(
        new Vector(-30, 30), 30
    ),

    circ_2: new Circle(
        new Vector(-30, 150), 40
    ),
    rect_2: new Rect(
        new Vector(-30, 150), 40, 60, -Math.PI/4
    ),
    rRect_2: new Rect(
        new Vector(-30, 150), 40, 60, -Math.PI * 5/4
    ),

    FIXTURE_LENGTH: 100,
    FIXTURE_TRANSFORM: new Vector(70, 25),
    FIXTURE_SCALE: 0.6,
};

circ_rect.no_intersection = {
    rect_1: new Rect(
        new Vector(-30, -30), 80, 90, 13
    ),
    rRect_1: new Rect(
        new Vector(-30, -30), 80, 90, Math.PI + 13
    ),
    circ_1: new Circle(
        new Vector(-90, -80), 20
    ),

    rect_2: new Rect(
        new Vector(-60, 80), 60, 70, 10
    ),
    rRect_2: new Rect(
        new Vector(-60, 80), 60, 70, Math.PI + 10
    ),
    circ_2: new Circle(
        new Vector(40, 70), 40
    ),

    circ_3: new Circle(
        new Vector(-110, 120), 15
    ),

    FIXTURE_LENGTH: 140,
    FIXTURE_TRANSFORM: new Vector(80, 65),
    FIXTURE_SCALE: 0.6,
}