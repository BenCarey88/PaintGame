import {fixtureList} from './collisionFixtures.mjs';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

for (var collisionType in fixtureList) {
    for (var test in fixtureList[collisionType]) {
        for (var shape in fixtureList[collisionType][test]) {
            fixtureList[collisionType][test][shape].draw(ctx);
            fixtureList[collisionType][test][shape].bbox().draw(ctx);
        }
    }
}
