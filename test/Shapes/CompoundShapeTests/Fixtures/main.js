//draw fixture objects to ctx

import {fixture} from './compoundShapeFixture.mjs';
import {printColour, newLine, addLink} from '../../../exports.mjs';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
fixture.draw(ctx, true);

newLine();
printColour('All Tests', 'white');
addLink('All Tests', '../../../test.html');
