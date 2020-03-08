import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionCircLine} from '../../exports.mjs';


export class CircLineCollisions extends Tests {
	constructor() {
		super();
	}

	test_centre_collision() {
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.centre_collision.circ,
				fixture.circ_line.centre_collision.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.centre_collision.circ,
				fixture.circ_line.centre_collision.rLine,
			)
		);
	}

	test_line_fully_inside() {
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.line_in_circle.circ,
				fixture.circ_line.line_in_circle.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.line_in_circle.circ,
				fixture.circ_line.line_in_circle.rLine,
			)
		);
	}

	test_circle_fully_inside() {
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.circle_in_line.circ,
				fixture.circ_line.circle_in_line.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.circle_in_line.circ,
				fixture.circ_line.circle_in_line.rLine,
			)
		);
	}

	test_end_collision() {
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.end_collision.circ,
				fixture.circ_line.end_collision.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.end_collision.circ,
				fixture.circ_line.end_collision.rLine,
			)
		);
	}

	test_boundary_case() {
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.boundary_case.circ,
				fixture.circ_line.boundary_case.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.boundary_case.circ,
				fixture.circ_line.boundary_case.rLine,
			)
		);
	}

	test_boundary_case_line_ends() {
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.boundary_case_line_ends.circ,
				fixture.circ_line.boundary_case_line_ends.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixture.circ_line.boundary_case_line_ends.circ,
				fixture.circ_line.boundary_case_line_ends.rLine,
			)
		);
	}

	test_no_collision() {
		this.assertFalse(
			collisionCircLine(
				fixture.circ_line.no_intersection.circ_1,
				fixture.circ_line.no_intersection.line_1,
			)
		);
		this.assertFalse(
			collisionCircLine(
				fixture.circ_line.no_intersection.circ_1,
				fixture.circ_line.no_intersection.rLine_1,
			)
		);
		this.assertFalse(
			collisionCircLine(
				fixture.circ_line.no_intersection.circ_2,
				fixture.circ_line.no_intersection.line_2,
			)
		);
		this.assertFalse(
			collisionCircLine(
				fixture.circ_line.no_intersection.circ_2,
				fixture.circ_line.no_intersection.rLine_2,
			)
		);
	}
}