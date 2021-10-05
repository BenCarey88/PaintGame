//utility functions

export var utils = {};
export var TOLERANCE = 0.000001;

utils.floatEq = function(x, y) {
    return Math.abs(x - y) < TOLERANCE;
}

utils.lessOrEq = function(x, y) {
    return utils.floatEq(x, y) || x < y;
}

utils.greaterOrEq = function(x, y) {
    return utils.floatEq(x, y) || x > y;
}
