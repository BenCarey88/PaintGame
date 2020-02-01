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

    import {MatrixTests} from './Utils/MatrixTests/matrixTests.mjs';
	runTests(MatrixTests, './Utils/MatrixTests/matrixTests.html');

	import {ShapeTests} from './Utils/ShapeTests/shapeTests.mjs';
	runTests(ShapeTests, './Utils/ShapeTests/shapeTests.html');

    import {QuadraticTests} from './Utils/QuadraticTests/quadraticTests.mjs';
	runTests(QuadraticTests, './Utils/QuadraticTests/quadraticTests.html');

newLine();
printColour("Collisions", "orange")

	import {CollisionDetection} from './Collisions/CollisionDetection/collisionDetection.mjs';
	runTests(CollisionDetection, './Collisions/CollisionDetection/collisionDetection.html');