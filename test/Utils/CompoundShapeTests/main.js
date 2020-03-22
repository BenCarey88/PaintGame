import {CompoundShapeTests} from './compoundShapeTests.mjs';
import {run} from '../../tests.mjs';
import {printColour, newLine, addLink} from '../../exports.mjs'

run(CompoundShapeTests);

newLine()
printColour("All Tests", "white")
addLink('All Tests', '../../test.html')

newLine()
printColour("Fixtures", "white")
addLink('Fixtures', './Fixtures/compoundShapeFixture.html')
