import {QuadraticTests} from './quadraticTests.mjs';
import {run} from '../../tests.mjs';
import {printColour, newLine, addLink} from '../../exports.mjs';

run(QuadraticTests);

newLine();
printColour("All Tests", "white");
addLink('All Tests', '../../test.html');
