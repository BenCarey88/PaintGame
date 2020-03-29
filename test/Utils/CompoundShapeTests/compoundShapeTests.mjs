import {Tests} from '../../tests.mjs';
import {
	print,
	Vector, Rotation,
	BBox, Line, Circle, Rect,
	Shape, CompoundShape, Polygon,
	collision
} from '../../exports.mjs';
import {fixture} from './Fixtures/index.mjs';

export class CompoundShapeTests extends Tests {
	constructor() {
		super();
		this.fixture = fixture.compound_shape;
		this.polygon_fixture = fixture.polygon;
		this.collision_fixture = fixture.collisions;
	}

	test_empty_list_errors() {
		this.expectError("compound shape must include at least one shape.")
		var shape = new CompoundShape([]);
	}

	test_polygon() {
		this.assertEq(
			this.polygon_fixture.poly_version.pentagon,
			this.polygon_fixture.compound_shape_version.pentagon,
		)
	}

	test_centre() {
		this.assertEq(
			this.fixture.attributes_test.shape.centre(),
			new Vector(15, 15),
		);
	}

	test_polygon_centre() {
		this.assertEq(
			this.polygon_fixture.poly_version.pentagon.centre(),
			new Vector(120, 152),
		)
	}

	test_bbox() {
		this.assertEq(
			this.fixture.attributes_test.shape.bbox(),
			new BBox(-10, -15, 50, 50),
		);
	}

	test_polygon_bbox() {
		this.assertEq(
			this.polygon_fixture.poly_version.pentagon.bbox(),
			new BBox(75, 115, 165, 185),
		);
	}

	test_translate() {
		var shape = this.fixture.translate.shape;
		var shape_translated = this.fixture.translate.shape_translated;
		this.assertEq(
			shape.translate(new Vector(70, 5)),
			shape_translated,
		);
		shape.translateEq(new Vector(70, 5));
		this.assertEq(
			shape,
			shape_translated
		);
	}

	test_rotate() {
		var shape = this.fixture.rotate.shape;
		var shape_rotated = this.fixture.rotate.shape_rotated;
		this.assertEq(
			shape.rotate(Math.PI/2, new Vector(50, 50)),
			shape_rotated,
		);
		shape.rotateEq(Math.PI/2, new Vector(50, 50));
		this.assertEq(
			shape,
			shape_rotated,
		);
	}

	test_collision() {
		this.assertTrue(
			collision(
				this.collision_fixture.collision.pentagon,
				this.collision_fixture.collision.triangle,
			)
		);
		this.assertTrue(
			collision(
				this.collision_fixture.collision.triangle,
				this.collision_fixture.collision.pentagon,
			)
		);
	}

	test_no_collision() {
		this.assertFalse(
			collision(
				this.collision_fixture.no_collision.pentagon,
				this.collision_fixture.no_collision.triangle,
			)
		);
		this.assertFalse(
			collision(
				this.collision_fixture.no_collision.triangle,
				this.collision_fixture.no_collision.pentagon,
			)
		);
	}

}
