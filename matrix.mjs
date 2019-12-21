//Matrix class

import {print} from './debugging.mjs';
import {vector} from './vector.mjs';

export class matrix {

    //construct matrix from 4 floats
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    plus(mat) {
        return new matrix(
            this.a + mat.a,
            this.b + mat.b,
            this.c + mat.c,
            this.d + mat.d
        );
    }

    minus(mat) {
        return new matrix(
            this.a - mat.a,
            this.b - mat.b,
            this.c - mat.c,
            this.d - mat.d
        );
    }

    negative() {
        return new matrix(
            -this.a,
            -this.b,
            -this.c,
            -this.d
        );
    }

    //scalar multiplication
    sMult(scalar) {
        return new matrix(
            scalar * this.a,
            scalar * this.b,
            scalar * this.c,
            scalar * this.d
        );
    }

    //vector multiplication
    vMult(vec) {
        return new vector(
            this.a * vec.x + this.b * vec.y,
            this.c * vec.x + this.d * vec.y
        );
    }

    //matrix multiplication
    mMult(mat) {
        return new matrix(
            this.a * mat.a + this.b * mat.c,
            this.a * mat.b + this.b * mat.d,
            this.c * mat.a + this.d * mat.c,
            this.c * mat.b + this.d * mat.d
        );
    }

    det() {
        return this.a * this.d - this.b * this.c;
    }

    inverse() {
        if (this.det() != 0) {
            var cofactorMat = new matrix(
                this.d, -this.b, -this.c, this.a
            );
            return cofactorMat.sMult(1/this.det());
        }
        else {
            print("Error: trying to invert invertible matrix");
        }
    }

    string() {
        return `|${this.a}, ${this.b}| <br/> |${this.c}, ${this.d}|`;
    }

    print() {
        print(this.string());
    }

}