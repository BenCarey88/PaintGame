import {print, printColour, addLink, newLine} from './exports.mjs';
import {summary} from './tests.mjs';

function runTests(test, link) {
    printColour(test.name, "white", "&nbsp &nbsp", "white", ...summary(test));
    addLink(test.name, link);
}

printColour("TEST SUMMARIES", "orange");

newLine();
printColour("Utils", "orange")

    import {VectorTests} from './Utils/VectorTests/vectorTests.mjs';
    runTests(VectorTests, './Utils/VectorTests/vectorTests.html');

    import {MatrixTests} from './Utils/MatrixTests/matrixTests.mjs'
	runTests(MatrixTests, './Utils/MatrixTests/matrixTests.html')

    import {LineTests} from './Utils/LineTests/lineTests.mjs'
	runTests(LineTests, './Utils/LineTests/lineTests.html')

newLine();
printColour("Collisions", "orange")
