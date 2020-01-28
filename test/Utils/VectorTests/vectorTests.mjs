import {Tests} from '../../tests.mjs';
import {Vector} from '../../exports.mjs';


export class VectorTests extends Tests {
    constructor() {
        super();
    }

    test_vector_addition() {
        var v = new Vector(1, 0);
        var u = new Vector(0, 1);
        var w = new Vector(1, 1);
        this.assertEq(v.plus(u), w);
        v.plusEq(u);
        this.assertEq(v, w);
    }

    test_vector_subtraction() {
        var v = new Vector(1, 1);
        var u = new Vector(0, 1);
        var w = new Vector(1, 0);
        var q = new Vector(-1, -1);
        this.assertEq(v.negative(), q);
        this.assertEq(v.minus(u), w);
        v.minusEq(u);
        this.assertEq(v, w);
    }

    test_scalar_multiplication() {
        var v = new Vector(2, 3);
        var w = new Vector(4, 6);
        this.assertEq(v.sMult(2), w);
        v.sMultEq(2);
        this.assertEq(v, w);
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
        this.assertEq(v.unit(), u);
    }

    test_component_manipulation() {
        var v = new Vector(3, 2);
        var u = new Vector(-2, 3);
        this.assertEq(u.orthog(), v);
        var w = new Vector(3, 0);
        var q = new Vector(0, 2);
        var i = new Vector(1, 0);
        this.assertEq(v.getComponent(i), w);
        v.setComponentToZero(i)
        this.assertEq(v, q);
    }

}