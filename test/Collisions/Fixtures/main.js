import {shapeList} from './collisionFixtures.mjs';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

for (var shape in shapeList) {
    shapeList[shape].draw(ctx);
    shapeList[shape].bbox().draw(ctx);
}