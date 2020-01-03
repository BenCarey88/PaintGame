import {print, newLine} from './Utils/debugging.mjs';

print("TEST");

import {Vector, Matrix, Rotation, Line} from './Utils/index.mjs';

import {Screen} from './screen.js';


// var pos1 = new Vector(1,1);
// var pos2 = new Vector(2,2);
// var line1 = new Line(pos1, pos2);

// print(line1.length());

// var mat1 = new Matrix(1,2,1,1);

// var pos3 = mat1.inverse().vMult(pos1);

// mat1.print()

// var rot = new Rotation(4);

// line1.print()
// pos3.print()
// print(pos3.x);
// print(pos3.y);
// print(mat1.det());

// rot.mMult(mat1).print()

// newLine();
// newLine();

// line1.print();
// line1.rotate(-Math.PI/2).print();

var screen = new Screen();
screen.init();

screen.run();

print("sfdghjkl;");
