import {shapeList} from './collisionFixtures.mjs';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

for (var shape of shapeList) {
    shape.draw(ctx);
}