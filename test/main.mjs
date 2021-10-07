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

    import {QuadraticTests} from './Utils/QuadraticTests/quadraticTests.mjs';
	runTests(QuadraticTests, './Utils/QuadraticTests/quadraticTests.html');

newLine();
printColour("Shapes", "orange")

	import {ShapeTests} from './Shapes/ShapeTests/shapeTests.mjs';
	runTests(ShapeTests, './Shapes/ShapeTests/shapeTests.html');

	import {CompoundShapeTests} from './Shapes/CompoundShapeTests/compoundShapeTests.mjs'
	runTests(CompoundShapeTests, './Shapes/CompoundShapeTests/compoundShapeTests.html')

newLine();
printColour("Collisions", "orange")

	import {CircCircCollisions} from './Collisions/CircCircCollisions/circCircCollisions.mjs'
	runTests(CircCircCollisions, './Collisions/CircCircCollisions/circCircCollisions.html')

	import {CircLineCollisions} from './Collisions/CircLineCollisions/circLineCollisions.mjs'
	runTests(CircLineCollisions, './Collisions/CircLineCollisions/circLineCollisions.html')

	import {CircRectCollisions} from './Collisions/CircRectCollisions/circRectCollisions.mjs'
	runTests(CircRectCollisions, './Collisions/CircRectCollisions/circRectCollisions.html')

	import {RectRectCollisions} from './Collisions/RectRectCollisions/rectRectCollisions.mjs'
	runTests(RectRectCollisions, './Collisions/RectRectCollisions/rectRectCollisions.html')

	import {LineLineCollisions} from './Collisions/LineLineCollisions/lineLineCollisions.mjs'
	runTests(LineLineCollisions, './Collisions/LineLineCollisions/lineLineCollisions.html')

	import {RectLineCollisions} from './Collisions/RectLineCollisions/rectLineCollisions.mjs'
	runTests(RectLineCollisions, './Collisions/RectLineCollisions/rectLineCollisions.html')
