import {Base} from './exports.mjs'

const FIXTURE = "FIXTURE";
const FIXTURE_LENGTH = "FIXTURE_LENGTH";
const FIXTURE_HEIGHT = "FIXTURE_HEIGHT";
const FIXTURE_TRANSLATE = "FIXTURE_TRANSFORM";
const FIXTURE_SCALE = "FIXTURE_SCALE";

export class Fixture extends Base {
    
    constructor(fixtureList){
        super();
        
        //fixtureList is dict with all FIXTURE metadata
        this.fixtureList = fixtureList;
        
        //now add the dict diretly as attributes but remove FIXTURE metadata
        for (var testType in fixtureList) {
            this[testType] = {};
            for (var test in fixtureList[testType]) {
                if (test.startsWith(FIXTURE)) {
                    continue
                }
                this[testType][test] = {};
                for(var shape in fixtureList[testType][test]) {
                    if (shape.startsWith(FIXTURE)) {
                        continue
                    }
                    this[testType][test][shape] = fixtureList[testType][test][shape];
                }
            }
        }
    }

    draw(ctx, drawBBox=true) {

        var offsetY = 0;
        for (var testType in this.fixtureList) {
            
            var offsetX = 0;
            var distY = 150;
            if (this.fixtureList[testType][FIXTURE_HEIGHT] != undefined) {
                distY = this.fixtureList[testType][FIXTURE_HEIGHT];
            }

            for (var test in this.fixtureList[testType]) {
                if (test.startsWith(FIXTURE)) {
                    continue;
                }

                for (var shape in this.fixtureList[testType][test]) {
                    if (shape.startsWith(FIXTURE)) {
                        continue;
                    }
                    ctx.save();
                    ctx.translate(offsetX, offsetY);
                    if (this.fixtureList[testType][test][FIXTURE_TRANSLATE] != undefined) {
                        var translate = this.fixtureList[testType][test][FIXTURE_TRANSLATE];
                        ctx.translate(translate.x, translate.y);
                    }
                    if (this.fixtureList[testType][test][FIXTURE_SCALE] != undefined) {
                        var scale = this.fixtureList[testType][test][FIXTURE_SCALE];
                        ctx.scale(scale, scale);
                    }
                    this.fixtureList[testType][test][shape].draw(ctx);
                    if (drawBBox) {
                        this.fixtureList[testType][test][shape].bbox().draw(ctx);
                    }
                    ctx.restore();
                }

                var distX = 150;
                if (this.fixtureList[testType][test][FIXTURE_LENGTH] != undefined) {
                    distX = this.fixtureList[testType][test][FIXTURE_LENGTH];
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