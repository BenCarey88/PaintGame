import {
    print, newLine,
    Vector, Matrix, Rotation, Line
} from './exports.mjs';

import {Tests, run} from './tests.mjs';

class VectorTests extends Tests {
    constructor() {
        super();
    }

    test_vector_addition() {
        var v = new Vector(1, 0);
        var u = new Vector(0, 1);
        var w = new Vector(1, 1);
        this.assertVecEq(v.plus(u), w);
        v.plusEq(u);
        this.assertVecEq(v, w);
    }

    test_vector_subtraction() {
        var v = new Vector(1, 1);
        var u = new Vector(0, 1);
        var w = new Vector(1, 0);
        var q = new Vector(-1, -1);
        this.assertVecEq(v.negative(), q);
        this.assertVecEq(v.minus(u), w);
        v.minusEq(u);
        this.assertVecEq(v, w);
    }

    test_scalar_multiplication() {
        var v = new Vector(2, 3);
        var w = new Vector(4, 6);
        this.assertVecEq(v.sMult(2), w);
        v.sMultEq(2);
        this.assertVecEq(v, w);
    }

    test_dot_product() {
        var v = new Vector(2, 5);
        var u = new Vector(1, -1);
        this.assertEq(v.dot(u), -3);
        this.assertEq(u.dot(v), v.dot(u));
    }

    test_vector_magnitude() {
        var v = new Vector(3, 4);
        this.assertEq(v.magnitude(), 5);
        var u = new Vector(3.0/5.0, 4.0/5.0);
        this.assertVecEq(v.unit(), u);
    }

    test_component_manipulation() {
        var v = new Vector(3, 2);
        var u = new Vector(-2, 3);
        this.assertVecEq(u.orthog(), v);
        var w = new Vector(3, 0);
        var q = new Vector(0, 2);
        var i = new Vector(1, 0);
        this.assertVecEq(v.getComponent(i), w);
        v.setComponentToZero(i)
        this.assertVecEq(v, q);
    }

}

run(VectorTests);