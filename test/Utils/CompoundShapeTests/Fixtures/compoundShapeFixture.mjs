import {Fixture} from '../../../fixture.mjs';
import {
	Vector, Rotation,
	Rect, Line, Circle, BBox,
	CompoundShape, Polygon,
} from '../../../exports.mjs';

var compound_shape = {
	FIXTURE_HEIGHT: 200,
}

compound_shape.centre = {
	shape: new CompoundShape(
		[
			new Line(
				new Vector(30, 30),
				new Vector(70, 80),
			),
			new Line(
				new Vector(70, 80),
				new Vector(90, 30),
			),
			new Line(
				new Vector(90, 30),
				new Vector(30, 30),
			),
		]
	),
	polygon: new Polygon(
		[
			new Vector(30, 100),
			new Vector(60, 150),
			new Vector(90, 170),
			new Vector(120, 110),
		],
		10,
	),

	FIXTURE_LENGTH: 140,
}


export var fixture = new Fixture(
	{
		compound_shape: compound_shape
	}
);
