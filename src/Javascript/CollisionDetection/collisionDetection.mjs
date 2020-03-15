import {print, newLine} from '../Utils/print.mjs';
import {utils, Line, Circle, Rect, BBox} from '../Utils/index.mjs';

//check if circ1 intersects circ2
export function collisionCircCirc(circ1, circ2) {
    return utils.lessOrEq(
        (circ1.centre.minus(circ2.centre)).magnitude(),
        circ1.rad + circ2.rad
    );
}

//check if circle intersects line
export function collisionCircLine(circle, line) {
    var angle = line.orientation();
    line = line.rotate(-angle);
    circle = circle.rotate(-angle);
    var centre = circle.centre;

    //line left
    if (centre.x < line.x1) {
        return utils.lessOrEq(
            (line.pos1.minus(centre)).magnitude(),
            circle.rad + line.width * 0.5
        );
    }
    //line right
    else if (centre.x > line.x2) {
        return utils.lessOrEq(
            (line.pos2.minus(centre)).magnitude(),
            circle.rad + line.width * 0.5
        );
    }
    //line top
    else if (centre.y <= line.y1) {
        return utils.greaterOrEq(
            centre.y + circle.rad,
            line.y1 - line.width * 0.5
        );
    }
    //line bottom
    else {
        return utils.lessOrEq(
            centre.y - circle.rad,
            line.y1 + line.width * 0.5
        );
    }
}

//check if circle intersects rect
export function collisionCircRect(circle, rect) {
    var angle = rect.orientation();
    rect = rect.rotate(-angle);
    circle = circle.rotate(-angle);
    var centre = circle.centre;

    var xmin = rect.v1.x;
    var ymin = rect.v1.y;
    var xmax = rect.v3.x;
    var ymax = rect.v3.y;

    //rect left
    if (centre.x < xmin) {
        //rect top
        if (centre.y < ymin) {
            return utils.lessOrEq(
                (rect.v1.minus(centre)).magnitude(), circle.rad
            );
        }
        //rect bottom
        else if (centre.y > ymax) {
            return utils.lessOrEq(
                (rect.v4.minus(centre)).magnitude(), circle.rad
            );
        }
        //rect middle (height)
        else {
            return utils.greaterOrEq(centre.x + circle.rad, xmin);
        }
    }
    //rect right
    else if (centre.x > xmax) {
        //rect top
        if (centre.y < ymin) {
            return utils.lessOrEq(
                (rect.v2.minus(centre)).magnitude(), circle.rad
            );
        }
        //rect bottom
        else if (centre.y > ymax) {
            return utils.lessOrEq(
                (rect.v3.minus(centre)).magnitude(), circle.rad
            );
        }
        //rect middle (height)
        else {
            return utils.lessOrEq(centre.x - circle.rad, xmax);
        }
    }
    //rect middle (length)
    else {
        //rect top
        if (centre.y < (ymax + ymin) * 0.5) {
            return utils.greaterOrEq(centre.y + circle.rad, ymin);
        }
        //rect bottom
        else {
            return utils.lessOrEq(centre.y - circle.rad, ymax);
        }
    }
}

//check if rect1 intersects rect2
export function collisionRectRect(rect1, rect2) {
    var angle = rect1.orientation();
    rect1 = rect1.rotate(-angle);
    rect2 = rect2.rotate(-angle);

    //if rect2 is also horizontal, just bbox compare
    var rect2Horizontal = utils.floatEq(
        rect2.orientation()/(Math.PI * 0.5) % 1.0,
        0
    );
    if (rect2Horizontal) {
        return rect2.bboxCompare(rect1);
    }

    var linesRect2 = [
        new Line(rect2.v1, rect2.v2),
        new Line(rect2.v2, rect2.v3),
        new Line(rect2.v3, rect2.v4),
        new Line(rect2.v4, rect2.v1),
    ]
    var pointsRect1 = [
        rect1.v1, rect1.v2, rect1.v3, rect1.v4
    ]
    var results = [];
    for (var line of linesRect2) {

        //OK, problem: In initial plan, you need to bbox compare first,
        //because if a line bbox intersects with a horizontal rectangle,
        //then that line must intersect that rectangle if and only if 2 
        //corners of that rectangle are on different sides of (the infinite
        //extended version of) that line OR 1 corner touches (the infinite 
        //extended version of) that line [I THINK].
        //BUT: I also commented that bbox compare out because I needed a way
        //to catch the case of rect1 fully inside rect2, ie. no lines from rect1
        //intersect rect2, yet the rectangle as a whole is inside rect2, which
        //I did by checking if opposite sides of rect1 are on opposite sides of
        //all points in rect2, ie. have to check all sides of rect1
        //maybe instead can just do extra compare at end of all lines from rect2
        //against centre of rect1

        //NOTE: leave some of the stuff from the above comment in final version
        //so future me understands what logic is being used here

        //first bboxcompare the line and the rectangle
        // if (!line.bboxCompare(rect1)) {
        //     continue;
        // }
        //get line in form y=mx+c
        var m = (line.y2 - line.y1)/(line.x2 - line.x1);
        var c = line.y1 - m*line.x1;
        var result = undefined;
        for (var point of pointsRect1) {
            //check all points for y<=mx+c
            var newResult = utils.lessOrEq(point.y, m*point.x+c);
            if (result == undefined) {
                result = newResult;
            }
            //if one point is above line and one is below it, collision
            else if (result != newResult) {
                return true;
            }
        }
        results.push(result);

        //if all points on same side of line, check in case one touches
        //BETTER: do this above so result is one of (true, false or "EQUAL")
        if (result) {
            //top left corner
            if (m>0  && utils.floatEq(rect1.v1.y, m * rect1.v1.x + c)) {
                print("top left")
                return true;
            }
            //top right corner
            if (m<0 && utils.floatEq(rect1.v2.y, m * rect1.v2.x + c)) {
                print("top right")
                return  true;
            }
        }
        else {
            //bottom right corner
            if (m>0 && utils.floatEq(rect1.v3.y, m * rect1.v3.x + c)) {
                print("bottom right")
                return true;
            }
            //bottom left corner
            if (m<0 && utils.floatEq(rect1.v4.y, m * rect1.v4.x + c)) {
                print("bottom left")
                return true;
            }
        }
    }
    //if each side of rect2 is on opposite side of rect1 to
    //its opposing side in rect2, collision
    if (results[0] != results[2] && results[1] != results[3]){
        return true;
    }

    return false;

}
