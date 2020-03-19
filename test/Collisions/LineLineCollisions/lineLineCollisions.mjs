import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionLineLine, newLine, print} from '../../exports.mjs';

export class LineLineCollisions extends Tests {
	constructor() {
		super();
		this.fixture = fixture.line_line;
	}

	_all_lines_collide(fixture) {
		for (var l1 in fixture) {
			for (var l2 in fixture) {
				this.assertTrue(
					collisionLineLine(fixture[l1], fixture[l2])
				);
			}
		}
	}

	test_collision() {
		this._all_lines_collide(
			this.fixture.collision
		);
	}

	test_fully_inside() {
		this._all_lines_collide(
			this.fixture.fully_inside
		);
	}

	test_boundary_case() {
		var line1 = [
			this.fixture.boundary_case.line1,
			this.fixture.boundary_case.rLine1,
		];
		var lines = [
			this.fixture.boundary_case.line3,
			this.fixture.boundary_case.rLine3,
			this.fixture.boundary_case.line4,
			this.fixture.boundary_case.rLine4,
			this.fixture.boundary_case.line5,
			this.fixture.boundary_case.rLine5,
			this.fixture.boundary_case.line6,
			this.fixture.boundary_case.rLine6,
		];
		for (var l1 of line1) {
			for (var l2 of lines) {
				this.assertTrue(
					collisionLineLine(l1, l2)
				);
				this.assertTrue(
					collisionLineLine(l2, l1)
				);
			}
		}
	}

	test_no_collision() {
		var lines = {
			line1: [
				this.fixture.no_collision.line1,
				this.fixture.no_collision.rLine1,
			],
			line2: [
				this.fixture.no_collision.line2,
				this.fixture.no_collision.rLine2,
			],
			line3: [
				this.fixture.no_collision.line3,
				this.fixture.no_collision.rLine3,
			],
			line4: [
				this.fixture.no_collision.line4,
				this.fixture.no_collision.rLine4,
			],
			line5: [
				this.fixture.no_collision.line5,
				this.fixture.no_collision.rLine5,
			],
			line6: [
				this.fixture.no_collision.line6,
				this.fixture.no_collision.rLine6,
			],
		}
		// compare each element of one array with each element
		// from the other arrays
		for (var line1 in lines) {
			for (var line2 in lines) {
				if (line2 != line1) {
					var lineList1 = lines[line1];
					var lineList2 = lines[line2];
					for (var l1 of lineList1) {
						for (var l2 of lineList2) {
							this.assertFalse(collisionLineLine(l1, l2));
						}
					}
				}
			}
		}
	}

}