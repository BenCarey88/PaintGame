import {VectorTests} from './vectorTests.mjs';
import {run} from '../../tests.mjs';
import {printColour, newLine, addLink} from '../../exports.mjs';

run(VectorTests);

newLine();
printColour("All Tests", "white");
addLink('All Tests', '../../test.html');
