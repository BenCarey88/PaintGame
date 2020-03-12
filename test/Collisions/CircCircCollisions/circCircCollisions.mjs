import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionCircCirc} from '../../exports.mjs';

export class CircCircCollisions extends Tests {
	constructor() {
		super();
		this.fixture = fixture.circ_circ;
	}

	test_collision() {
		this.assertTrue(
			collisionCircCirc(
				this.fixture.collision.circ_1,
				this.fixture.collision.circ_2,
			)
		);
	}

	test_full_overlap() {
		this.assertTrue(
			collisionCircCirc(
				this.fixture.full_overlap.circ_1,
				this.fixture.full_overlap.circ_2,
			)
		);
	}

	test_fully_inside() {
		this.assertTrue(
			collisionCircCirc(
				this.fixture.fully_inside.circ_1,
				this.fixture.fully_inside.circ_2,
			)
		);
	}

	test_boundary_case() {
		this.assertTrue(
			collisionCircCirc(
				this.fixture.boundary_case.circ_1,
				this.fixture.boundary_case.circ_2,
			)
		);
		this.assertTrue(
			collisionCircCirc(
				this.fixture.boundary_case.circ_3,
				this.fixture.boundary_case.circ_4,
			)
		);
	}

	test_no_intersection() {
		this.assertFalse(
			collisionCircCirc(
				this.fixture.no_intersection.circ_1,
				this.fixture.no_intersection.circ_2,
			)
		);
		this.assertFalse(
			collisionCircCirc(
				this.fixture.no_intersection.circ_3,
				this.fixture.no_intersection.circ_4,
			)
		);
	}
}