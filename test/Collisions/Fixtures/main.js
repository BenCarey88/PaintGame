//main file to draw the fixtures to ctx
//all fixtures are in [0,150]x[0,150] (unless specifically overridden
//by FIXTURE_LENGTH or FIXTURE_HEIGHT tags) but are drawn spaced out

import {fixtureList} from './collisionFixtures.mjs';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var offsetY = 0;

for (var collisionType in fixtureList) {
    
    var offsetX = 0;
    var additionalOffsetY = 150;
    if (fixtureList[collisionType]["FIXTURE_HEIGHT"] != undefined) {
        additionalOffsetY = fixtureList[collisionType]["FIXTURE_HEIGHT"];
    }

    for (var test in fixtureList[collisionType]) {
        if(test == "FIXTURE_HEIGHT") {
            continue;
        }

        for (var shape in fixtureList[collisionType][test]) {
            if (shape == "FIXTURE_LENGTH" || shape == "FIXTURE_HEIGHT") {
                continue;
            }
            ctx.save();
            ctx.translate(offsetX, offsetY);
            fixtureList[collisionType][test][shape].draw(ctx);
            fixtureList[collisionType][test][shape].bbox().draw(ctx);
            ctx.restore();
        }

        var distX = 150;
        if (fixtureList[collisionType][test]["FIXTURE_LENGTH"] != undefined) {
            distX = fixtureList[collisionType][test]["FIXTURE_LENGTH"];
        }
        if (fixtureList[collisionType][test]["FIXTURE_HEIGHT"] != undefined) {
            additionalOffsetY = Math.max(
                fixtureList[collisionType][test]["FIXTURE_HEIGHT"],
                additionalOffsetY
            );
        }

        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.strokeRect(0, 0, distX, additionalOffsetY)
        ctx.restore();

        offsetX += distX;
    }
    offsetY += additionalOffsetY;
}
