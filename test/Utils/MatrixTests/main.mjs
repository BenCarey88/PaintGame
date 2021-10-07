import {MatrixTests} from './matrixTests.mjs';
import {run} from '../../tests.mjs';
import {printColour, newLine, addLink} from '../../exports.mjs';

run(MatrixTests);

newLine();
printColour("All Tests", "white");
addLink('All Tests', '../../test.html');
