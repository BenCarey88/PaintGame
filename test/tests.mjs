import {print, printColour, newLine} from './exports.mjs'

const TOLERANCE = 0.000001

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
        if (Math.abs(x-y) > TOLERANCE) {
            this.passing = false;
            this.errorLog.push(`expected ${x}==${y}`);
        }
    }

    assertVecEq(u, v) {
        if(Math.abs(u.x-v.x) > TOLERANCE || Math.abs(u.y-v.y) > TOLERANCE) {
            this.passing = false;
            this.errorLog.push(`expected ${u.string()}==${v.string()}`);
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
            this.failList.push(test);
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
                `</br>${this.failList.length} tests failing: `, "red",
                `${this.failList.join(", ")}, `, "orange",
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