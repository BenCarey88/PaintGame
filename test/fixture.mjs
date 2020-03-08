import {Base} from './exports.mjs'

const FIXTURE = "FIXTURE";
const FIXTURE_LENGTH = "FIXTURE_LENGTH";
const FIXTURE_HEIGHT = "FIXTURE_HEIGHT";
const FIXTURE_TRANSLATE = "FIXTURE_TRANSFORM";
const FIXTURE_SCALE = "FIXTURE_SCALE";

export class Fixture extends Base {
    
    constructor(fixtureList){
        super();
        this.fixtureList = fixtureList;
        for (var testType in fixtureList) {
            this[testType] = fixtureList[testType]
        }
    }

    draw(ctx, drawBBox=true) {

        var offsetY = 0;
        for (var testType in this.fixtureList) {
            
            var offsetX = 0;
            var distY = 150;
            if (this[testType][FIXTURE_HEIGHT] != undefined) {
                distY = this[testType][FIXTURE_HEIGHT];
            }

            for (var test in this[testType]) {
                if (test.startsWith(FIXTURE)) {
                    continue;
                }

                for (var shape in this[testType][test]) {
                    if (shape.startsWith(FIXTURE)) {
                        continue;
                    }
                    ctx.save();
                    ctx.translate(offsetX, offsetY);
                    if (this[testType][test][FIXTURE_TRANSLATE] != undefined) {
                        var translate = this[testType][test][FIXTURE_TRANSLATE];
                        ctx.translate(translate.x, translate.y);
                    }
                    if (this[testType][test][FIXTURE_SCALE] != undefined) {
                        var scale = this[testType][test][FIXTURE_SCALE];
                        ctx.scale(scale, scale);
                    }
                    this[testType][test][shape].draw(ctx);
                    if (drawBBox) {
                        this[testType][test][shape].bbox().draw(ctx);
                    }
                    ctx.restore();
                }

                var distX = 150;
                if (this[testType][test][FIXTURE_LENGTH] != undefined) {
                    distX = this[testType][test][FIXTURE_LENGTH];
                }

                ctx.save();
                ctx.translate(offsetX, offsetY);
                ctx.strokeRect(0, 0, distX, distY)
                ctx.restore();

                offsetX += distX;
            }
            offsetY += distY;
        }

    }

}