import {CollisionDetection} from './collisionDetection.mjs';
import {run} from '../../tests.mjs';
import {printColour, newLine, addLink} from '../../exports.mjs';

run(CollisionDetection);

newLine();
printColour("Fixtures", "white");
addLink('Fixtures', '../Fixtures/collisionFixtures.html');
