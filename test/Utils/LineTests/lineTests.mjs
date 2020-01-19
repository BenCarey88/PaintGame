import {Tests} from '../../tests.mjs';

import {Vector, Matrix, Rotation, Line} from '../../exports.mjs';

export class LineTests extends Tests {
	constructor() {
		super();
	}

	test_line_eq() {
		var l1 = new Line(
			new Vector(1, 2),
			new Vector(2, 2)
		);
		var l2 = new Line(
			new Vector(1, 1),
			new Vector(3, 3)
		);
		this.assertLineEq(l1, l2);
	}
}