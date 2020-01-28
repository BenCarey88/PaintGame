import {Tests} from '../../tests.mjs';
import {Vector, BBox, Line, Circle, Rect} from '../../exports.mjs';

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
	}

	test_rect_translate() {
		var r1 = new Rect(
			new Vector(0, 0), new Vector(1, 2),
			new Vector(3, 1), new Vector(2, -1)
		);
		var r2 = r1.translate(new Vector(-1, -1));
		var r3 = new Rect(
			new Vector(-1, -1), new Vector(0, 1),
			new Vector(2, 0), new Vector(1, -2),
		);
		this.assertEq(r2, r3);
	}

	test_rect_rotate() {
		var r1 = new Rect(
			new Vector(0, 0), new Vector(1, 2),
			new Vector(3, 1), new Vector(2, -1)
		);
		var r2 = r1.rotate(Math.PI/2);
		var r3 = new Rect(
			new Vector(0, 0), new Vector(-2, 1),
			new Vector(-1, 3), new Vector(1, 2)
		);
		this.assertEq(r2, r3);
	}

	test_rect_bbox() {
		var r1 = new Rect(
			new Vector(0, 0), new Vector(1, 2),
			new Vector(3, 1), new Vector(2, -1)
		);
		var bbox = new BBox(0, -1, 3, 2);
		this.assertEq(r1.bbox(), bbox);
	}

	test_rect_attributes() {
		var r1 = new Rect(
			new Vector(-2, 1), new Vector(-1, 3),
			new Vector(1, 2), new Vector(0, 0)
		);
		this.assertEq(r1.width, Math.sqrt(5));
		this.assertEq(r1.height, Math.sqrt(5));
		this.assertEq(r1.orientation(), Math.atan(2));
	}

}