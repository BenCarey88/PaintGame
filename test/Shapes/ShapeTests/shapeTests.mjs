import {Tests} from '../../tests.mjs';
import {
	Vector, Rotation,
	BBox, Line, Circle, Rect
} from '../../exports.mjs';

export class ShapeTests extends Tests {
	
	constructor() {
		super();
	}

	test_circle_translate() {
		var c1 = new Circle(new Vector(2,2), 5);
		var c2 = c1.translate(new Vector(1, 1));
		var c3 = new Circle(new Vector(3,3), 5)
		this.assertEq(c2, c3);
	}

	test_circle_rotate() {
		var c1 = new Circle(new Vector(1, 1), 3);
		var c2 = c1.rotate(Math.PI/4);
		var c3 = new Circle(new Vector(0, Math.sqrt(2)), 3);
		this.assertEq(c2, c3);
	}

	test_circle_bbox() {
		var c1 = new Circle(new Vector(1, 0), 3);
		var bbox = new BBox(-2, -3, 4, 3);
		this.assertEq(c1.bbox(), bbox);
	}

	test_line_translate() {
		var l1 = new Line(
			new Vector(1, 2), new Vector(2, 4)
		);
		var l2 = l1.translate(new Vector(-1, 4));
		var l3 = new Line(
			new Vector(0, 6), new Vector(1, 8)
		);
		this.assertEq(l2, l3);
	}

	test_line_rotate() {
		var l1 = new Line(
			new Vector(1, 2), new Vector(2, 4)
		);
		var l2 = l1.rotate(Math.PI/2, l1.pos1);
		var l3 = new Line(
			new Vector(1, 2), new Vector(-1, 3)
		);
		var l4 = new Line(
			new Vector(1, 2), new Vector(2, 4)
		);
		this.assertEq(l1, l4);
		this.assertEq(l2, l3);
	}

	test_line_bbox() {
		var l1 = new Line(
			new Vector(4, 7), new Vector(-1, 8)
		);
		l1.width = 2;
		var bbox = new BBox(-2, 6, 5, 9);
		this.assertEq(l1.bbox(), bbox);
	}

	test_line_attributes() {
		var l1 = new Line(
			new Vector(1, 2), new Vector(2, 4)
		);
		this.assertEq(l1.centre(), new Vector(1.5, 3));
		this.assertEq(l1.length(), Math.sqrt(5));
		this.assertEq(l1.elevation(), Math.atan(2));
		this.assertEq(l1.orientation(), Math.atan(2));
	}

	test_rect_translate() {
		var r1 = new Rect(
			new Vector(2, 6), 4, 2, 10
		);
		var r2 = r1.translate(new Vector(-1, -1));
		var r3 = new Rect(
			new Vector(1, 5), 4, 2, 10
		);
		this.assertEq(r2, r3);
	}

	test_rect_rotate() {
		var r1 = new Rect(
			new Vector(2, 1), 3, 5, 5,
		);
		var rot = new Rotation(3)
		var r2 = r1.rotate(3);
		var r3 = new Rect(
			rot.vMult(new Vector(2, 1)), 3, 5, 8
		);
		this.assertEq(r2, r3);
	}

	test_rect_bbox() {
		var r1 = new Rect(
			new Vector(0, 0), 5, 5, Math.PI/4
		);
		const diag = 2.5 * Math.sqrt(2);
		var bbox = new BBox(
			-diag, -diag, diag, diag
		);
		this.assertEq(r1.bbox(), bbox);
	}

	test_rect_attributes() {
		var r1 = new Rect(
			new Vector(0, 0), 5, 5, 4
		);
		this.assertEq(r1.orientation(), 4);
		var r2 = r1.rotate(3);
		this.assertEq(r2.orientation(), 7);
	}

}