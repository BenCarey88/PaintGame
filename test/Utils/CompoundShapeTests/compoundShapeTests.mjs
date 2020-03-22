import {Tests} from '../../tests.mjs';
import {
	print,
	Vector, Rotation,
	BBox, Line, Circle, Rect,
	CompoundShape, Polygon,
} from '../../exports.mjs';
import {fixture} from './Fixtures/index.mjs';

export class CompoundShapeTests extends Tests {
	constructor() {
		super();
		this.fixture = fixture.compound_shape;
		//note mostly these fixtures were used as a sandbox
		//for me to play with the classes
	}

	test_centre() {
		var shape = new CompoundShape(
			[
				new Circle(
					new Vector(20, 20), 5
				),
				new Rect(
					new Vector(0, 0), 20, 30, 5
				),
				new Line(
					new Vector(10, 40),
					new Vector(40, 10),
				),
			],
		);
		this.assertEq(
			shape.centre(),
			new Vector(15, 15),
		);
	}

	test_bbox() {

	}

	// test_translate() {

	// }

	// test_rotate() {

	// }

	// test_collision() {

	// }

}
