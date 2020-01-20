import {Tests} from '../../tests.mjs';
import {quadraticSolver} from '../../exports.mjs';

export class QuadraticTests extends Tests {
	constructor() {
		super();
	}

	test_discriminant_negative() {
		this.assertTrue(
			quadraticSolver(2, 1, 5).length == 0
		);
	}

	test_discriminant_zero() {
		this.assertFloatEq(
			quadraticSolver(2, 4, 2)[0], -1 
		)
	}

	test_discriminant_positive() {
		this.assertFloatEq(
			quadraticSolver(-4, 3, 1)[0], -0.25
		)
		this.assertFloatEq(
			quadraticSolver(-4, 3, 1)[1], 1
		)
	}

	test_discriminant_positive_non_square() {
		this.assertFloatEq(
			quadraticSolver(1, 4, -2)[0], -Math.sqrt(6) - 2
		)
		this.assertFloatEq(
			quadraticSolver(1, 4, -2)[1], Math.sqrt(6) - 2
		)
	}

}