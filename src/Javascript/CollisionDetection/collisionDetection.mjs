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

    if (centre.x < line.x1) {
        return utils.lessOrEq(
            (line.pos1.minus(centre)).magnitude(),
            circle.rad + line.width * 0.5
        );
    }
    else if (centre.x > line.x2) {
        return utils.lessOrEq(
            (line.pos2.minus(centre)).magnitude(),
            circle.rad + line.width * 0.5
        );
    }
    else if (centre.y <= line.y1) {
        return utils.greaterOrEq(
            centre.y + circle.rad,
            line.y1 - line.width * 0.5
        );
    }
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

    if (centre.x < xmin) {
        if (centre.y < ymin) {
            return utils.lessOrEq(
                (rect.v1.minus(centre)).magnitude(), circle.rad
            );
        }
        else if (centre.y > ymax) {
            return utils.lessOrEq(
                (rect.v4.minus(centre)).magnitude(), circle.rad
            );
        }
        else {
            return utils.greaterOrEq(centre.x + circle.rad, xmin);
        }
    }
    else if (centre.x > xmax) {
        if (centre.y < ymin) {
            return utils.lessOrEq(
                (rect.v2.minus(centre)).magnitude(), circle.rad
            );
        }
        else if (centre.y > ymax) {
            return utils.lessOrEq(
                (rect.v4.minus(centre)).magnitude(), circle.rad
            );
        }
        else {
            return utils.greaterOrEq(centre.x - circle.rad, xmax);
        }
    }
    else {
        if (centre.y < (ymax + ymin) * 0.5) {
            return utils.greaterOrEq(centre.y + circle.rad, ymin);
        }
        else {
            return utils.greaterOrEq(centre.y - circle.rad, ymin);
        }
    }
}