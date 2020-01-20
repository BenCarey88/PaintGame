import {print, printColour, newLine} from './exports.mjs'

const TOLERANCE = 0.000001

function floatEq(x, y){
    return (Math.abs(x - y) < TOLERANCE);
}

function vecEq(u, v){
    return (floatEq(u.x, v.x) && floatEq(u.y, v.y));
}

function matEq(m1, m2){
    return (
        floatEq(m1.a, m2.a) && floatEq(m1.b, m2.b) &&
        floatEq(m1.c, m2.c) && floatEq(m1.d, m2.d)
    );
}

function lineEq(l1, l2){
    return (vecEq(l1.pos1, l2.pos1) && vecEq(l1.pos2, l2.pos2));
}

function bboxEq(box1, box2){
    return (
        floatEq(box1.xmin, box2.xmin) && floatEq(box1.ymin, box2.ymin) &&
        floatEq(box1.xmax, box2.xmax) && floatEq(box1.ymax, box2.ymax)
    )
}

export class Tests {
    
    constructor() {
        this.passing = true;
        this.errorLog = [""];
        this.failList = [];
    }

    reset() {
        this.passing = true;
        this.errorLog = [""];
    }

    assertEq(x, y) {
        if (x != y) {
            this.passing = false;
            this.errorLog.push(`expected ${x} == ${y}`);
        }
    }

    assertFloatEq(x, y) {
        if (!floatEq(x, y)) {
            this.passing = false;
            this.errorLog.push(`expected ${x} == ${y}`);
        }
    }

    assertVecEq(u, v) {
        if (!vecEq(u, v)) {
            this.passing = false;
            this.errorLog.push(`expected ${u.string()} == ${v.string()}`);
        }
    }

    assertMatEq(m1, m2) {
        if (!matEq(m1, m2)) {
            this.passing = false;
            this.errorLog.push(`expected </br>${m1.string()}</br>equals</br>${m2.string()}`);
        }
    }

    assertLineEq(l1, l2) {
        if (!lineEq(l1, l2)) {
            this.passing = false;
            this.errorLog.push(`expected ${l1.string()} == ${l2.string()}`);
        }
    }

    assertBBoxEq(box1, box2) {
        if (!bboxEq(box1, box2)) {
            this.passing = false;
            this.errorLog.push(`expected ${box1.string()} == ${box2.string()}`);
        }
    }

    assertTrue(statement) {
        if(!statement) {
            this.passing = false;
            this.errorLog.push("assertTrue called on false statement");
        }
    }

    getResult(test, printResults) {
        var messagesAndColours = [test.concat(": &nbsp &nbsp"), "white"];
        if(this.passing) {
            messagesAndColours.push("[OK]", "lime");
        }
        else{
            messagesAndColours.push("[FAIL]", "red");
            messagesAndColours.push(this.errorLog.join("</br>"), "red");
            this.failList.push(`\{${test}\}`);
        }
        if(printResults) {
            printColour(...messagesAndColours);
        }
    }

    run(printResults=true) {
        //get all attributes of this
        let properties = new Set();
        let currentObj = this;
        do {
            Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
        } while ((currentObj = Object.getPrototypeOf(currentObj)));
    
        //take all attributes that are test methods
        var tests = [...properties.keys()].filter(
            item => (
                typeof this[item] === 'function' && 
                item.startsWith("test")
            )
        );

        //run test methods and display test results
        for(var test of tests) {
            this.reset();
            this[test]();
            this.getResult(test, printResults);
        }

        //get overall result
        var result = [];
        if (this.failList.length > 0) {
            result.push(
                `${tests.length - this.failList.length} tests passing. `, "lime",
                `${this.failList.length} tests failing: `, "red",
                `${this.failList.join(", ")} `, "red",
                `[FAILURE]`, "red"
            )
        }
        else {
            result.push(`${tests.length} tests passing. [SUCCESS]`, "lime")
        }

        //display result
        if (printResults) {
            newLine();
            printColour(...result);
        }
        return result        
    }
}

export function run(testClass) {
    print(testClass.name);
    newLine()
    var testInstance = new testClass();
    testInstance.run(true);
}

export function summary(testClass) {
    var testInstance = new testClass();
    return testInstance.run(false);
}