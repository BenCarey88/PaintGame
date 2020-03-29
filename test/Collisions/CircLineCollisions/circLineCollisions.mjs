import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collision} from '../../exports.mjs';


export class CircLineCollisions extends Tests {
	constructor() {
		super();
		this.fixture = fixture.circ_line;
	}

	assertCollision(circle, line, rLine) {
		this.assertTrue(
			collision(line, circle)
		);
		this.assertTrue(
			collision(rLine, circle)
		);
		this.assertTrue(
			collision(circle, line)
		);
		this.assertTrue(
			collision(circle, rLine)
		);
	}

	assertNoCollision(circle, line, rLine) {
		this.assertFalse(
			collision(line, circle)
		);
		this.assertFalse(
			collision(rLine, circle)
		);
		this.assertFalse(
			collision(circle, line)
		);
		this.assertFalse(
			collision(circle, rLine)
		);
	}

	test_centre_collision() {
		this.assertCollision(
			this.fixture.centre_collision.circ,
			this.fixture.centre_collision.line,
			this.fixture.centre_collision.rLine,
		);
	}

	test_line_fully_inside() {
		this.assertCollision(
			this.fixture.line_in_circle.circ,
			this.fixture.line_in_circle.line,
			this.fixture.line_in_circle.rLine,
		);
	}

	test_circle_fully_inside() {
		this.assertCollision(
			this.fixture.circle_in_line.circ,
			this.fixture.circle_in_line.line,
			this.fixture.circle_in_line.rLine,
		);
	}

	test_end_collision() {
		this.assertCollision(
			this.fixture.end_collision.circ,
			this.fixture.end_collision.line,
			this.fixture.end_collision.rLine,
		);
	}

	test_boundary_case() {
		this.assertCollision(
			this.fixture.boundary_case.circ,
			this.fixture.boundary_case.line,
			this.fixture.boundary_case.rLine,
		);
	}

	test_boundary_case_line_ends() {
		this.assertCollision(
			this.fixture.boundary_case_line_ends.circ,
			this.fixture.boundary_case_line_ends.line,
			this.fixture.boundary_case_line_ends.rLine,
		);
	}

	test_no_collision() {
		this.assertNoCollision(
			this.fixture.no_intersection.circ_1,
			this.fixture.no_intersection.line_1,
			this.fixture.no_intersection.rLine_1,
		);
		this.assertNoCollision(
			this.fixture.no_intersection.circ_2,
			this.fixture.no_intersection.line_2,
			this.fixture.no_intersection.rLine_2,
		);
	}
}