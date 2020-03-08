import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionCircCirc} from '../../exports.mjs';

export class CircCircCollisions extends Tests {
	constructor() {
		super();
	}

	test_collision() {
		this.assertTrue(
			collisionCircCirc(
				fixture.circ_circ.collision.circ_1,
				fixture.circ_circ.collision.circ_2,
			)
		);
	}

	test_full_overlap() {
		this.assertTrue(
			collisionCircCirc(
				fixture.circ_circ.full_overlap.circ_1,
				fixture.circ_circ.full_overlap.circ_2,
			)
		);
	}

	test_fully_inside() {
		this.assertTrue(
			collisionCircCirc(
				fixture.circ_circ.fully_inside.circ_1,
				fixture.circ_circ.fully_inside.circ_2,
			)
		);
	}

	test_boundary_case() {
		this.assertTrue(
			collisionCircCirc(
				fixture.circ_circ.boundary_case.circ_1,
				fixture.circ_circ.boundary_case.circ_2,
			)
		);
		this.assertTrue(
			collisionCircCirc(
				fixture.circ_circ.boundary_case.circ_3,
				fixture.circ_circ.boundary_case.circ_4,
			)
		);
	}

	test_no_intersection() {
		this.assertFalse(
			collisionCircCirc(
				fixture.circ_circ.no_intersection.circ_1,
				fixture.circ_circ.no_intersection.circ_2,
			)
		);
		this.assertFalse(
			collisionCircCirc(
				fixture.circ_circ.no_intersection.circ_3,
				fixture.circ_circ.no_intersection.circ_4,
			)
		);
	}
}