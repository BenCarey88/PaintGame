import {ShapeTests} from './shapeTests.mjs';
import {run} from '../../tests.mjs';
import {printColour, newLine, addLink} from '../../exports.mjs';

run(ShapeTests);

newLine();
printColour("All Tests", "white");
addLink('All Tests', '../../test.html');
