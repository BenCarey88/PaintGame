import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collision} from '../../exports.mjs';


export class CircLineCollisions extends Tests {
	constructor() {
		super();
		this.fixture = fixture.circ_line;
	}

	test_centre_collision() {
		this.assertTrue(
			collision(
				this.fixture.centre_collision.circ,
				this.fixture.centre_collision.line,
			)
		);
		this.assertTrue(
			collision(
				this.fixture.centre_collision.circ,
				this.fixture.centre_collision.rLine,
			)
		);
	}

	test_line_fully_inside() {
		this.assertTrue(
			collision(
				this.fixture.line_in_circle.circ,
				this.fixture.line_in_circle.line,
			)
		);
		this.assertTrue(
			collision(
				this.fixture.line_in_circle.circ,
				this.fixture.line_in_circle.rLine,
			)
		);
	}

	test_circle_fully_inside() {
		this.assertTrue(
			collision(
				this.fixture.circle_in_line.circ,
				this.fixture.circle_in_line.line,
			)
		);
		this.assertTrue(
			collision(
				this.fixture.circle_in_line.circ,
				this.fixture.circle_in_line.rLine,
			)
		);
	}

	test_end_collision() {
		this.assertTrue(
			collision(
				this.fixture.end_collision.circ,
				this.fixture.end_collision.line,
			)
		);
		this.assertTrue(
			collision(
				this.fixture.end_collision.circ,
				this.fixture.end_collision.rLine,
			)
		);
	}

	test_boundary_case() {
		this.assertTrue(
			collision(
				this.fixture.boundary_case.circ,
				this.fixture.boundary_case.line,
			)
		);
		this.assertTrue(
			collision(
				this.fixture.boundary_case.circ,
				this.fixture.boundary_case.rLine,
			)
		);
	}

	test_boundary_case_line_ends() {
		this.assertTrue(
			collision(
				this.fixture.boundary_case_line_ends.circ,
				this.fixture.boundary_case_line_ends.line,
			)
		);
		this.assertTrue(
			collision(
				this.fixture.boundary_case_line_ends.circ,
				this.fixture.boundary_case_line_ends.rLine,
			)
		);
	}

	test_no_collision() {
		this.assertFalse(
			collision(
				this.fixture.no_intersection.circ_1,
				this.fixture.no_intersection.line_1,
			)
		);
		this.assertFalse(
			collision(
				this.fixture.no_intersection.circ_1,
				this.fixture.no_intersection.rLine_1,
			)
		);
		this.assertFalse(
			collision(
				this.fixture.no_intersection.circ_2,
				this.fixture.no_intersection.line_2,
			)
		);
		this.assertFalse(
			collision(
				this.fixture.no_intersection.circ_2,
				this.fixture.no_intersection.rLine_2,
			)
		);
	}
}