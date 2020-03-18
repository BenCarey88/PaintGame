import {Vector, Rect, Line} from '../../exports.mjs';

//---------------------------------------
//RECT-LINE COLLISIONS
//---------------------------------------
export var rect_line = {
    FIXTURE_HEIGHT: 170
};

//Standard collision
rect_line.collision = {
    rect1: new Rect(
        new Vector(100, 100), 100, 60, 2 * Math.PI/3
    ),
    rRect1: new Rect(
        new Vector(100, 100), 100, 60, 5 * Math.PI/3
    ),
    rect2: new Rect(
        new Vector(150, 130), 80, 90, 30
    ),
    rRect2: new Rect(
        new Vector(150, 130), 80, 90, 30 + Math.PI
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

    FIXTURE_LENGTH: 200,
    FIXTURE_TRANSFORM: new Vector(-20, -20),
    FIXTURE_SCALE: 1,
}

//Boundary case
rect_line.boundary_case = {
    rect: new Rect(
        new Vector(90, 90), 80, 80, 0
    ),
    rect_90: new Rect(
        new Vector(90, 90), 80, 80, Math.PI/2
    ),
    rect_180: new Rect(
        new Vector(90, 90), 80, 80, Math.PI
    ),
    rect_270: new Rect(
        new Vector(90, 90), 80, 80, -Math.PI/2
    ),

    line1: new Line(
        new Vector(40, 40), new Vector(90, 40)
    ),
    rLine1: new Line(
        new Vector(90, 40), new Vector(40, 40)
    ),
    line2: new Line(
        new Vector(135, 70), new Vector(150, 110), 10
    ),
    rLine2: new Line(
        new Vector(150, 110), new Vector(135, 70), 10
    ),
    line3: new Line(
        new Vector(22, 121), new Vector(62, 151)
    ),
    rLine3: new Line(
        new Vector(62, 151), new Vector(22, 121)
    ),
    line4: new Line(
        new Vector(135, 135), new Vector(160, 160),
        2*Math.sqrt(50)
    ),
    rLine4: new Line(
        new Vector(135, 135), new Vector(160, 160),
        2*Math.sqrt(50)
    ),

    FIXTURE_LENGTH: 180,
    FIXTURE_TRANSFORM: new Vector(0, -10),
}

//Boundary case rotated
rect_line.boundary_case_rotated = {
    rect: new Rect(
        new Vector(-101.80012541942814, -76.39852396865204),
        80, 80, 3
    ),
    rect_90: new Rect(
        new Vector(-101.80012541942814, -76.39852396865204),
        80, 80, 3 + Math.PI/2
    ),
    rect_180: new Rect(
        new Vector(-101.80012541942814, -76.39852396865204),
        80, 80, 3 + Math.PI
    ),
    rect_270: new Rect(
        new Vector(-101.80012541942814, -76.39852396865204),
        80, 80, 3 - Math.PI/2
    ),

    line1: new Line(
        new Vector(-45.2445001864125, -33.95489954162313),
        new Vector(-94.74412501643478, -26.898899138629765),
    ),
    rLine1: new Line(
        new Vector(-94.74412501643478, -26.898899138629765),
        new Vector(-45.2445001864125, -33.95489954162313),
    ),
    line2: new Line(
        new Vector(-143.52738760525085, -50.24827367394911),
        new Vector(-164.0220753766522, -87.7311734170689),
        10,
    ),
    rLine2: new Line(
        new Vector(-164.0220753766522, -87.7311734170689),
        new Vector(-143.52738760525085, -50.24827367394911),
        10,
    ),
    line3: new Line(
        new Vector(-38.85535590045373, -116.68445191133682),
        new Vector(-82.68865600626756, -140.7394264869555),
    ),
    rLine3: new Line(
        new Vector(-82.68865600626756, -140.7394264869555),
        new Vector(-38.85535590045373, -116.68445191133682),
    ),
    line4: new Line(
        new Vector(-152.70018812914222, -114.59778595297806),
        new Vector(-180.97800074565, -135.8195981664925),
        2*Math.sqrt(50)
    ),
    rLine4: new Line(
        new Vector(-180.97800074565, -135.8195981664925),
        new Vector(-152.70018812914222, -114.59778595297806),
        2*Math.sqrt(50)
    ),

    FIXTURE_LENGTH: 180,
    FIXTURE_TRANSFORM: new Vector(195, 170),
}

//Fully inside
rect_line.fully_inside = {
    rect1: new Rect(
        new Vector(80, 80), 80, 100, 2
    ),
    rRect1: new Rect(
        new Vector(80, 80), 80, 100, 2 - Math.PI
    ),
    line1: new Line(
        new Vector(60, 40), new Vector(100, 120), 10
    ),
    rLine1: new Line(
        new Vector(100, 120), new Vector(60, 40), 10
    ),

    line2: new Line(
        new Vector(210, 40), new Vector(110, 200), 55
    ),
    rLine2: new Line(
        new Vector(110, 200), new Vector(210, 40), 55
    ),
    rect2: new Rect(
        new Vector(160, 120), 40, 30, -Math.PI/6
    ),
    rRect2: new Rect(
        new Vector(160, 120), 40, 30, 5*Math.PI/6
    ),

    FIXTURE_LENGTH: 180,
    FIXTURE_TRANSFORM: new Vector(0, 0),
    FIXTURE_SCALE: 0.7,
}

//No collision
rect_line.no_collision = {
    rect1: new Rect(
        new Vector(90, 80), 90, 30, 4*Math.PI/3
    ),
    rRect1: new Rect(
        new Vector(90, 80), 90, 30, 7*Math.PI/3
    ),
    rect2: new Rect(
        new Vector(80, 80), 80, 40, Math.PI
    ),
    rRect2: new Rect(
        new Vector(80, 80), 80, 40, 0
    ),

    line1: new Line(
        new Vector(20, 60), new Vector(60, 20)
    ),
    rLine1: new Line(
        new Vector(60, 20), new Vector(20, 60)
    ),
    line2: new Line(
        new Vector(110, 30), new Vector(140, 80), 10
    ),
    rLine2: new Line(
        new Vector(140, 80), new Vector(110, 30), 10
    ),
    line3: new Line(
        new Vector(20, 140), new Vector(130, 140)
    ),
    rLine3: new Line(
        new Vector(130, 140), new Vector(20, 140)
    ),
    line4: new Line(
        new Vector(20, 100), new Vector(90, 120), 5
    ),
    rLine4: new Line(
        new Vector(90, 120), new Vector(20, 100), 5
    ),
}
