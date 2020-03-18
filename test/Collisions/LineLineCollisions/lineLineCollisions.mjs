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

}