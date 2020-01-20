import {Tests} from '../../tests.mjs';
import {Vector, Line, Circle, Rectangle} from '../../exports.mjs';

export class ShapeTests extends Tests {
	
	constructor() {
		super();
	}

	test_circle() {
		var c1 = new Circle(new Vector(2,2), 5);
		var c2 = c1.translate(new Vector(1, 1));
		this.assertFloatEq(c2.rad, 5);
		this.assertVecEq(c2.centre, new Vector(3,3));
		this.assertFloatEq
	}

	test_line_rotate() {
		var l1 = new Line(
			new Vector(1, 2),
			new Vector(2, 4)
		);
		var l2 = l1.rotate(Math.PI*0.5, l1.pos1);
		var l3 = new Line(
			new Vector(1, 2),
			new Vector(-1, 3)
		);
		this.assertLineEq(l2, l3);		
	}

}