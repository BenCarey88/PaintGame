import {Vector, BBox, Circle, Line, Rect} from '../../exports.mjs';

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

export var shapeList = {
    circle1: circle1,
    circle2: circle2,
    circle3: circle3,
    circle4: circle4,
    line1: line1,
    line2: line2,
    line3: line3,
    line4: line4,
    rect1: rect1,
    rect2: rect2,
    rect3: rect3,
    rect4: rect4,
};