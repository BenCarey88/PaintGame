import {Vector, BBox, Circle, Line, Rect} from '../../exports.mjs';

var circle1 = new Circle(
    new Vector(120, 150), 30
)
var circle2 = new Circle(
    new Vector(180, 150), 50
)
var circle3 = new Circle(
    new Vector(300, 150), 30
)
var circle4 = new Circle(
    new Vector(500, 150), 50
)

var line1 = new Line(
    new Vector(300, 250),
    new Vector(350, 100)
)
var line2 = new Line(
    new Vector(100, 500),
    new Vector(200, 300)
)
var line3 = new Line(
    new Vector(100, 400),
    new Vector(200, 350)
)
var line4 = new Line(
    new Vector(400, 300),
    new Vector(300, 400)
)

var rect1 = new Rect(
    new Vector(520, 150),
    new Vector(600, 150),
    new Vector(600, 200),
    new Vector(520, 200)
)
var rect2 = new Rect(
    new Vector(10, 10),
    new Vector(10, 100),
    new Vector(200, 100),
    new Vector(200, 10)
)
var rect3 = new Rect(

)
var rect4 = new Rect(
    new Vector(),
    new Vector(),
    new Vector(),
    new Vector()
)

export var shapeList = [
    circle1, circle2, circle3, circle4,
    line1, line2, line3, line4,
    rect1, rect2//, rect3, rect4
]