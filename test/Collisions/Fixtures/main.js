//main file to draw the fixtures to ctx
//all fixtures are in [0,150]x[0,150] (unless specifically overridden
//by FIXTURE_LENGTH or FIXTURE_HEIGHT tags) but are drawn spaced out

import {fixtureList} from './collisionFixtures.mjs';
import {print, Vector} from'../../exports.mjs';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const FIXTURE = "FIXTURE";
const FIXTURE_LENGTH = "FIXTURE_LENGTH";
const FIXTURE_HEIGHT = "FIXTURE_HEIGHT";
const FIXTURE_TRANSLATE = "FIXTURE_TRANSFORM";
const FIXTURE_SCALE = "FIXTURE_SCALE";

var offsetY = 0;

for (var collisionType in fixtureList) {
    
    var offsetX = 0;
    var distY = 150;
    if (fixtureList[collisionType][FIXTURE_HEIGHT] != undefined) {
        distY = fixtureList[collisionType][FIXTURE_HEIGHT];
    }

    for (var test in fixtureList[collisionType]) {
        if (test.startsWith(FIXTURE)) {
            continue;
        }

        for (var shape in fixtureList[collisionType][test]) {
            if (shape.startsWith(FIXTURE)) {
                continue;
            }
            ctx.save();
            ctx.translate(offsetX, offsetY);
            if (fixtureList[collisionType][test][FIXTURE_TRANSLATE] != undefined) {
                var translate = fixtureList[collisionType][test][FIXTURE_TRANSLATE];
                ctx.translate(translate.x, translate.y);
            }
            if (fixtureList[collisionType][test][FIXTURE_SCALE] != undefined) {
                var scale = fixtureList[collisionType][test][FIXTURE_SCALE];
                ctx.scale(scale, scale);
            }
            fixtureList[collisionType][test][shape].draw(ctx);
            fixtureList[collisionType][test][shape].bbox().draw(ctx);
            ctx.restore();
        }

        var distX = 150;
        if (fixtureList[collisionType][test][FIXTURE_LENGTH] != undefined) {
            distX = fixtureList[collisionType][test][FIXTURE_LENGTH];
        }

        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.strokeRect(0, 0, distX, distY)
        ctx.restore();

        offsetX += distX;
    }
    offsetY += distY;
}
