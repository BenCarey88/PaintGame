import {Tests} from '../../tests.mjs';
import {Vector, Matrix, Rotation} from '../../exports.mjs';

export class MatrixTests extends Tests {
	constructor() {
		super();
	}

	test_matrix_addition() {
		var m1 = new Matrix(1, 0, 2, 4);
		var m2 = new Matrix(2, 3, 4, 5);
		var m3 = new Matrix(3, 3, 6, 9);
		this.assertMatEq(m1.plus(m2), m3);
		m2.plusEq(m1);
		this.assertMatEq(m2, m3);
	}

	test_matrix_subtraction() {
		var m1 = new Matrix(1, 0, 2, 4);
		var m2 = new Matrix(2, 3, 4, 5);
		var m3 = new Matrix(1, 3, 2, 1);
		var m4 = new Matrix(-1, -3, -2, -1);
		this.assertMatEq(m2.minus(m1), m3);
		m2.minusEq(m1);
		this.assertMatEq(m2, m3);
		this.assertMatEq(m3.negative(), m4);
	}

	test_scalar_multiplication() {
		var m1 = new Matrix(1, 0, 2, 4);
		var m2 = new Matrix(-0.5, 0, -1, -2);
		this.assertMatEq(m1.sMult(-0.5), m2);
		m1.sMultEq(-0.5);
		this.assertMatEq(m1, m2);
	}

	test_vector_multiplication() {
		var m = new Matrix(1, 0, 2, 4);
		var v1 = new Vector(2, -1);
		var v2 = new Vector(2, 0);
		this.assertVecEq(m.vMult(v1), v2);
	}

	test_matrix_multiplication() {
		var m1 = new Matrix(1, 0, 2, 4);
		var m2 = new Matrix(2, 3, 4, 5);
		var m3 = new Matrix(2, 3, 20, 26);
		this.assertMatEq(m1.mMult(m2), m3);
		m1.mMultEq(m2);
		this.assertMatEq(m1, m3);
	}

	test_inverse() {
		var m1 = new Matrix(1, 2, 3, 1);
		var m2 = new Matrix(-0.2, 0.4, 0.6, -0.2);
		this.assertFloatEq(m1.det(), -5);
		this.assertMatEq(m1.inverse(), m2);
	}

	test_rotation() {
		var r = new Rotation(Math.PI/6);
		var m = new Matrix(
			Math.sqrt(3)*0.5,	-0.5,
			0.5,				Math.sqrt(3)*0.5
		);
		this.assertMatEq(r, m);
	}

}