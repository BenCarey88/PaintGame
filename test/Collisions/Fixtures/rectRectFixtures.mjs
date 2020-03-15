import {Vector, Rect} from '../../exports.mjs';

//---------------------------------------
//RECT-RECT COLLISIONS
//---------------------------------------
export var rect_rect = {
    FIXTURE_HEIGHT: 180
};

rect_rect.collision = {
    rect1: new Rect(
        new Vector(100, 100), 100, 60, 2 * Math.PI/3
    ),
    rRect1: new Rect(
        new Vector(100, 100), 100, 60, 5 * Math.PI/3
    ),
    rect2: new Rect(
        new Vector(150, 150), 80, 90, 30
    ),
    rRect2: new Rect(
        new Vector(150, 150), 80, 90, 30 + Math.PI
    ),
    rect3: new Rect(
        new Vector(170, 100), 30, 80, -Math.PI/6
    ),
    rRect3: new Rect(
        new Vector(170, 100), 30, 80, -Math.PI * 7/6
    ),
    rect4: new Rect(
        new Vector(140, 100), 30, 30, 5
    ),
    rect4_90: new Rect(
        new Vector(140, 100), 30, 30, 5 + Math.PI/2
    ),
    rect4_180: new Rect(
        new Vector(140, 100), 30, 30, 5 + Math.PI
    ),
    rect4_270: new Rect(
        new Vector(140, 100), 30, 30, 5 - Math.PI/2
    ),

    FIXTURE_LENGTH: 200,
    FIXTURE_TRANSFORM: new Vector(-20, -20),
    FIXTURE_SCALE: 0.9,
};

rect_rect.same_orientation_collision = {
    rect1: new Rect(
        new Vector(50, 70), 50, 100, 10
    ),
    rRect1: new Rect(
        new Vector(50, 70), 50, 100, 10 + Math.PI
    ),
    rect2: new Rect(
        new Vector(50, 120), 30, 30, 10
    ),
    rect2_90: new Rect(
        new Vector(50, 120), 30, 30, 10 + Math.PI/2
    ),
    rect2_180: new Rect(
        new Vector(50, 120), 30, 30, 10 + Math.PI
    ),
    rect2_270: new Rect(
        new Vector(50, 120), 30, 30, 10 - Math.PI/2
    ),

    FIXTURE_LENGTH: 140,
    FIXTURE_SCALE: 1.1,
    FIXTURE_TRANSFORM: new Vector(15, 5),
}

rect_rect.same_orientation_collision_horizontal = {
    rect1: new Rect(
        new Vector(50, 70), 50, 100, 0
    ),
    rRect1: new Rect(
        new Vector(50, 70), 50, 100, Math.PI
    ),
    rect2: new Rect(
        new Vector(50, 120), 30, 30, 0
    ),
    rect2_90: new Rect(
        new Vector(50, 120), 30, 30, Math.PI/2
    ),
    rect2_180: new Rect(
        new Vector(50, 120), 30, 30, Math.PI
    ),
    rect2_270: new Rect(
        new Vector(50, 120), 30, 30, -Math.PI/2
    ),

    FIXTURE_LENGTH: 100,
    FIXTURE_SCALE: 1.2,
    FIXTURE_TRANSFORM: new Vector(-8, -5),
}

rect_rect.fully_inside = {
    rect1: new Rect(
        new Vector(50, 70), 50, 100, Math.PI/3
    ),
    rRect1: new Rect(
        new Vector(50, 70), 50, 100, - Math.PI * 2/3
    ),
    rect2: new Rect(
        new Vector(60, 60), 30, 30, 2
    ),
    rect2_90: new Rect(
        new Vector(60, 62), 30, 30, 2 - Math.PI/2
    ),
    rect2_180: new Rect(
        new Vector(60, 62), 30, 30, 2 - Math.PI
    ),
    rect2_270: new Rect(
        new Vector(60, 62), 30, 30, 2 - Math.PI * 3/2
    ),
    rect3: new Rect(
        new Vector(30, 80), 10, 40, Math.PI/3
    ),
    rRect3: new Rect(
        new Vector(30, 80), 10, 40, Math.PI * 4/3
    ),

    FIXTURE_LENGTH: 150,
    FIXTURE_SCALE: 1.1,
    FIXTURE_TRANSFORM: new Vector(20, 12),
}

rect_rect.boundary_case = {
    rect1: new Rect(
        new Vector(100, 80), 70, 70,
        Math.atan2(4, 3)
    ),
    rect1_90: new Rect(
        new Vector(100, 80), 70, 70,
        Math.atan2(4, 3) + Math.PI/2
    ),
    rect1_180: new Rect(
        new Vector(100, 80), 70, 70,
        Math.atan2(4, 3) + Math.PI
    ),
    rect1_270: new Rect(
        new Vector(100, 80), 70, 70,
        Math.atan2(4, 3) - Math.PI/2
    ),
    rect2: new Rect(
        new Vector(70, 40), 30, 20,
        Math.atan2(4, 3)
    ),
    rRect2: new Rect(
        new Vector(70, 40), 30, 20,
        Math.atan2(4, 3) + Math.PI
    ),
    rect3: new Rect(
        new Vector(140, 40), 24, 38, 0
    ),
    rRect3: new Rect(
        new Vector(140, 40), 24, 38, Math.PI
    ),
    rect4: new Rect(
        new Vector(160, 100), 22, 26, 0
    ),
    rRect4: new Rect(
        new Vector(160, 100), 22, 26, Math.PI
    ),
    rect5: new Rect(
        new Vector(60, 110), 90, 30,
        Math.atan2(4, 3)
    ),
    rRect5: new Rect(
        new Vector(60, 110), 90, 30,
        Math.atan2(4, 3) + Math.PI
    ),

    FIXTURE_LENGTH: 200,
    FIXTURE_SCALE: 1.1,
    FIXTURE_TRANSFORM: new Vector(0, -5),
}

rect_rect.no_collision = {
    rect1: new Rect(
        new Vector(80, 90), 50, 100, Math.PI/3
    ),
    rRect1: new Rect(
        new Vector(80, 90), 50, 100,  4 * Math.PI/3
    ),
    rect2: new Rect(
        new Vector(100, 200), 60, 60, -Math.PI/6
    ),
    rRect2: new Rect(
        new Vector(100, 200), 60, 60, -7*Math.PI/6
    ),
    rect3: new Rect(
        new Vector(160, 150), 60, 60, 10
    ),
    rRect3: new Rect(
        new Vector(160, 150), 60, 60, 10 - Math.PI
    ),
    rect4: new Rect(
        new Vector(180, 70), 30, 60, 10
    ),
    rRect4: new Rect(
        new Vector(180, 70), 30, 60, 10 - Math.PI
    ),
    rect5: new Rect(
        new Vector(170, 220), 40, 30, 0
    ),
    rRect5: new Rect(
        new Vector(170, 220), 40, 30, Math.PI
    ),
    rect6: new Rect(
        new Vector(100, 136.5), 60, 10, 9 * Math.PI/15
    ),
    rRect6: new Rect(
        new Vector(100, 136.5), 60, 10, -6 * Math.PI/15
    ),

    FIXTURE_LENGTH: 180,
    FIXTURE_TRANSFORM: new Vector(0, -20),
    FIXTURE_SCALE: 0.8,
};
