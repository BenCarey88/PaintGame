import {LineLineCollisions} from './lineLineCollisions.mjs';
import {run} from '../../tests.mjs';
import {printColour, newLine, addLink} from '../../exports.mjs'

run(LineLineCollisions);

newLine()
printColour("Fixtures", "white")
addLink('Fixtures', '../Fixtures/collisionFixtures.html')

newLine()
printColour("All Tests", "white")
addLink('All Tests', '../../test.html')