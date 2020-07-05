import {Fixture} from '../../../fixture.mjs';
import {
	Vector, Rotation,
	Rect, Line, Circle, BBox,
	CompoundShape, Polygon,
} from '../../../exports.mjs';


//---------------------------------------------------

var sandbox = {
	FIXTURE_HEIGHT: 200,	
}

sandbox.main = {
	shape_1: new CompoundShape(
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
	shape_2: new CompoundShape(
		[
			new Rect(
				new Vector(300, 100), 200, 70, -Math.PI/9,
			),
			new Circle(
				new Vector(250, 135), 20
			).rotate(-Math.PI/9, new Vector(300, 100)),
			new Circle(
				new Vector(350, 135), 20
			).rotate(-Math.PI/9, new Vector(300, 100)),
		],
	),

	FIXTURE_LENGTH: 500,
}

//---------------------------------------------------

var compound_shape = {
	FIXTURE_HEIGHT: 150,
}

compound_shape.attributes_test = {
	shape: new CompoundShape(
		[
			new Rect(
				new Vector(0, 0), 20, 30, 0
			),
			new Line(
				new Vector(10, 40),
				new Vector(40, 10),
				20
			),
			new Circle(
				new Vector(20, 20), 5
			),
		],
	),

	FIXTURE_TRANSFORM: new Vector(40, 50),
	FIXTURE_SCALE: 1.5,
}

compound_shape.translate = {
	shape: new CompoundShape(
		[
			new Rect(
				new Vector(0, 0), 20, 30, 0
			),
			new Line(
				new Vector(10, 40),
				new Vector(40, 10),
				20
			),
			new Circle(
				new Vector(20, 20), 5
			),
		],
	),

	//translate shape by (70, 5)
	shape_translated: new CompoundShape(
		[
			new Rect(
				new Vector(70, 5), 20, 30, 0
			),
			new Line(
				new Vector(80, 45),
				new Vector(110, 15),
				20
			),
			new Circle(
				new Vector(90, 25), 5
			),
		],
	),

	FIXTURE_TRANSFORM: new Vector(20, 50),
	FIXTURE_SCALE: 1,
}

compound_shape.rotate = {
	shape: new CompoundShape(
		[
			new Rect(
				new Vector(0, 0), 20, 30, 0
			),
			new Line(
				new Vector(10, 40),
				new Vector(40, 10),
				20
			),
			new Circle(
				new Vector(20, 20), 5
			),
		],
	),

	//rotate shape by pi/2 about (50, 50)
	shape_rotated: new CompoundShape(
		[
			new Rect(
				new Vector(100, 0), 20, 30, Math.PI/2,
			),
			new Line(
				new Vector(60, 10),
				new Vector(90, 40),
				20
			),
			new Circle(
				new Vector(80, 20), 5
			),
		],
	),

	FIXTURE_TRANSFORM: new Vector(20, 50),
	FIXTURE_SCALE: 1,
}

//---------------------------------------------------

var polygon = {
	FIXTURE_HEIGHT: 150,
}

polygon.poly_version = {
	pentagon: new Polygon(
		[
			new Vector(120, 120),
			new Vector(160, 140),
			new Vector(140, 180),
			new Vector(100, 180),
			new Vector(80, 140),
		],
		10,
	),

	FIXTURE_TRANSFORM: new Vector(-50, -80),
	FIXTURE_SCALE: 1,
}

polygon.compound_shape_version = {
	pentagon: new CompoundShape(
		[
			new Line(
				new Vector(120, 120), new Vector(160, 140), 10
			),
			new Line(
				new Vector(160, 140), new Vector(140, 180), 10
			),
			new Line(
				new Vector(140, 180), new Vector(100, 180), 10
			),
			new Line(
				new Vector(100, 180), new Vector(80, 140), 10
			),
			new Line(
				new Vector(80, 140), new Vector(120, 120), 10
			),
		],
	),

	FIXTURE_TRANSFORM: new Vector(-50, -80),
	FIXTURE_SCALE: 1,
}

//---------------------------------------------------

var collisions = {
	FIXTURE_HEIGHT: 150,
}

collisions.collision = {
	pentagon: new Polygon(
		[
			new Vector(120, 120),
			new Vector(160, 140),
			new Vector(140, 180),
			new Vector(100, 180),
			new Vector(80, 140),
		],
	),
	triangle: new Polygon(
		[
			new Vector(130, 160),
			new Vector(150, 200),
			new Vector(120, 190),
		],
	),

	FIXTURE_TRANSFORM: new Vector(-50, -90),
	FIXTURE_SCALE: 1,
}

collisions.no_collision = {
	pentagon: new Polygon(
		[
			new Vector(120, 120),
			new Vector(160, 140),
			new Vector(140, 180),
			new Vector(100, 180),
			new Vector(80, 140),
		],
	),
	triangle: new Polygon(
		[
			new Vector(180, 180),
			new Vector(170, 230),
			new Vector(140, 200),
		],
	),

	FIXTURE_TRANSFORM: new Vector(-50, -90),
	FIXTURE_SCALE: 1,
}

//-----------------------------------------------------------------

export var fixture = new Fixture(
	{
		sandbox: sandbox,
		compound_shape: compound_shape,
		polygon: polygon,
		collisions: collisions,
	}
);
