import {print, printColour, newLine, Base} from './exports.mjs'

export class Tests extends Base {
    
    constructor() {
        super();
        this.passing = true;
        this.failLog = [""];
        this.failList = [];
        this.errorList = [];
    }

    //reset test properties between each test
    reset() {
        this.passing = true;
        this.failLog = [""];
    }

    //assert that variables x and y are equal (for use in tests)
    assertEq(x, y) {

        if (typeof x != typeof y) {
            this.passing = false;
            this.failLog.push(
                `operands to assertEq are not of the same type: `
                `${typeof x} and ${typeof y}`
            );
            return;
        }

        switch (typeof x) {

            case "string":
            case "boolean":
                if (x != y) {
                    this.passing = false;
                    this.failLog.push(`expected ${x} == ${y}`);
                }
                break;
    
            case "number":
                if (!this.floatEq(x, y)) {
                    this.passing = false;
                    this.failLog.push(`expected ${x} == ${y}`);
                }
                break;

            case "object":
                var constructor = x.constructor;
                do {
                    if (constructor.name == 'Base') {
                        if (!x.eq(y)) {
                            this.passing = false;
                            this.failLog.push(
                                `expected ${x.string()} == ${y.string()}`
                            );
                        }
                        return
                    }
                } while(constructor = Object.getPrototypeOf(constructor))
                this.passing = false;
                this.failLog.push(
                    `unsupported operands to assertEq: type non-custom Object`
                );
                break;

            default:
                this.passing = false;
                this.failLog.push(
                    `unsupported operands to assertEq: type ${typeof x}`
                );
                break;
        }
    }

    //assert that statement is true (for use in test)
    assertTrue(statement) {
        if(!statement) {
            this.passing = false;
            this.failLog.push("assertTrue called on false statement");
        }
    }

    //run a given test, and print results if requested
    getResult(test, printResults) {
        this.reset();
        var messagesAndColours = [test.concat(": &nbsp &nbsp"), "white"];
        try {
            this[test]();
            if(this.passing) {
                messagesAndColours.push("[OK]", "lime");
            }
            else{
                messagesAndColours.push("[FAIL]", "red");
                messagesAndColours.push(this.failLog.join("</br>"), "red");
                this.failList.push(`\{${test}\}`);
            }
        }
        catch(err) {
            messagesAndColours.push(`[ERROR]: ${err.message}`, "red");
            this.errorList.push(`\{${test}\}`);
        }
        if(printResults) {
            printColour(...messagesAndColours);
        }
    }

    //run all tests and return results. Print results if requested.
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

        //run test methods and get test results
        for(var test of tests) {
            this.getResult(test, printResults);
        }

        //get overall result
        var result = [];
        var numPasses = tests.length - this.failList.length - this.errorList.length
        result.push(`${numPasses} tests passing. `, "lime")
        if (this.errorList.length > 0) {
            result.push(
                `${this.errorList.length} tests erroring. `, "red",
                //`${this.errorList.join(", ")} `, "red",
            );
        }
        if (this.failList.length > 0 ) {
            result.push(
                `${this.failList.length} tests failing: `, "red",
                //`${this.failList.join(", ")} `, "red",
            );
        }
        if (tests.length == numPasses) {
            result.push(`[SUCCESS]`, "lime");
        }
        else {
            result.push(`[FAIL]`, "red");
        }

        //display result
        if (printResults) {
            newLine();
            printColour(...result);
        }
        return result        
    }
}

//run all tests for testClass and display full results
export function run(testClass) {
    print(testClass.name);
    newLine()
    var testInstance = new testClass();
    testInstance.run(true);
}

//run all tests for testClass and return condensed summary
export function summary(testClass) {
    var testInstance = new testClass();
    return testInstance.run(false);
}
