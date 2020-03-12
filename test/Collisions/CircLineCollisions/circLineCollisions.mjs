import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionCircLine} from '../../exports.mjs';


export class CircLineCollisions extends Tests {
	constructor() {
		super();
		this.fixture = fixture.circ_line;
	}

	test_centre_collision() {
		this.assertTrue(
			collisionCircLine(
				this.fixture.centre_collision.circ,
				this.fixture.centre_collision.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				this.fixture.centre_collision.circ,
				this.fixture.centre_collision.rLine,
			)
		);
	}

	test_line_fully_inside() {
		this.assertTrue(
			collisionCircLine(
				this.fixture.line_in_circle.circ,
				this.fixture.line_in_circle.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				this.fixture.line_in_circle.circ,
				this.fixture.line_in_circle.rLine,
			)
		);
	}

	test_circle_fully_inside() {
		this.assertTrue(
			collisionCircLine(
				this.fixture.circle_in_line.circ,
				this.fixture.circle_in_line.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				this.fixture.circle_in_line.circ,
				this.fixture.circle_in_line.rLine,
			)
		);
	}

	test_end_collision() {
		this.assertTrue(
			collisionCircLine(
				this.fixture.end_collision.circ,
				this.fixture.end_collision.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				this.fixture.end_collision.circ,
				this.fixture.end_collision.rLine,
			)
		);
	}

	test_boundary_case() {
		this.assertTrue(
			collisionCircLine(
				this.fixture.boundary_case.circ,
				this.fixture.boundary_case.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				this.fixture.boundary_case.circ,
				this.fixture.boundary_case.rLine,
			)
		);
	}

	test_boundary_case_line_ends() {
		this.assertTrue(
			collisionCircLine(
				this.fixture.boundary_case_line_ends.circ,
				this.fixture.boundary_case_line_ends.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				this.fixture.boundary_case_line_ends.circ,
				this.fixture.boundary_case_line_ends.rLine,
			)
		);
	}

	test_no_collision() {
		this.assertFalse(
			collisionCircLine(
				this.fixture.no_intersection.circ_1,
				this.fixture.no_intersection.line_1,
			)
		);
		this.assertFalse(
			collisionCircLine(
				this.fixture.no_intersection.circ_1,
				this.fixture.no_intersection.rLine_1,
			)
		);
		this.assertFalse(
			collisionCircLine(
				this.fixture.no_intersection.circ_2,
				this.fixture.no_intersection.line_2,
			)
		);
		this.assertFalse(
			collisionCircLine(
				this.fixture.no_intersection.circ_2,
				this.fixture.no_intersection.rLine_2,
			)
		);
	}
}