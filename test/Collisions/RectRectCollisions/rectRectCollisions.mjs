import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionRectRect, newLine, print} from '../../exports.mjs';

export class RectRectCollisions extends Tests {
	constructor() {
		super();
		this.fixture = fixture.rect_rect;
	}

	_all_rects_collide(fixture) {
		for (var r1 in fixture) {
			for (var r2 in fixture) {
				this.assertTrue(
					collisionRectRect(fixture[r1], fixture[r2])
				);
			}
		}
	}

	test_collision() {
		this._all_rects_collide(
			this.fixture.collision
		);
	}

	test_collision_same_orientation() {
		this._all_rects_collide(
			this.fixture.same_orientation_collision
		);
	}

	test_collision_same_orientation_horizontal() {
		this._all_rects_collide(
			this.fixture.same_orientation_collision_horizontal
		);
	}

	test_fully_inside() {
		this._all_rects_collide(
			this.fixture.fully_inside
		);
	}

	test_boundary_case() {
		var rect1 = [
			this.fixture.boundary_case.rect1,
			this.fixture.boundary_case.rect1_90,
			this.fixture.boundary_case.rect1_180,
			this.fixture.boundary_case.rect1_270,
		];
		var rects = [
			this.fixture.boundary_case.rect2,
			this.fixture.boundary_case.rRect2,
			this.fixture.boundary_case.rect3,
			this.fixture.boundary_case.rRect3,
			this.fixture.boundary_case.rect4,
			this.fixture.boundary_case.rRect4,
			this.fixture.boundary_case.rect5,
			this.fixture.boundary_case.rRect5,
		];
		for (var r1 of rect1) {
			for (var r2 of rects) {
				this.assertTrue(
					collisionRectRect(r1, r2)
				);
				this.assertTrue(
					collisionRectRect(r2, r1)
				);
			}
		}
	}

	test_no_collision() {
		var rects = {
			rect1: [
				this.fixture.no_collision.rect1,
				this.fixture.no_collision.rRect1,
			],
			rect2: [
				this.fixture.no_collision.rect2,
				this.fixture.no_collision.rRect2,
			],
			rect3: [
				this.fixture.no_collision.rect3,
				this.fixture.no_collision.rRect3,
			],
			rect4: [
				this.fixture.no_collision.rect4,
				this.fixture.no_collision.rRect4,
			],
			rect5: [
				this.fixture.no_collision.rect5,
				this.fixture.no_collision.rRect5,
			],
			rect6: [
				this.fixture.no_collision.rect6,
				this.fixture.no_collision.rRect6,
			],
		}
		// compare each element of one array with each element
		// from the other arrays
		for (var rect1 in rects) {
			for (var rect2 in rects) {
				if (rect2 != rect1) {
					var rectList1 = rects[rect1];
					var rectList2 = rects[rect2];
					for (var r1 of rectList1) {
						for (var r2 of rectList2) {
							this.assertFalse(collisionRectRect(r1, r2));
						}
					}
				}
			}
		}
	}

}