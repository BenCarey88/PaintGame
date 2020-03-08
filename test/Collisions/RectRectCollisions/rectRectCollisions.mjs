import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionRectRect} from '../../exports.mjs';

export class RectRectCollisions extends Tests {
	constructor() {
		super();
	}

	test_rect_rect_collision() {
		var rects = [
			fixture.rect_rect.collision.rect1,
			fixture.rect_rect.collision.rRect1,
			fixture.rect_rect.collision.rect2,
			fixture.rect_rect.collision.rRect2,
		];
		for (var r1 of rects) {
			for (var r2 of rects) {
				this.assertTrue(collisionRectRect(r1, r2));
			}
		}
	}

	test_rect_rect_no_collision() {
		var rect1 = [
			fixture.rect_rect.no_collision.rect1,
			fixture.rect_rect.no_collision.rRect1,
		];
		var rect2 = [
			fixture.rect_rect.no_collision.rect2,
			fixture.rect_rect.no_collision.rRect2,
		];
		var rect3 = [
			fixture.rect_rect.no_collision.rect3,
			fixture.rect_rect.no_collision.rRect3,
		];
		var rects = [rect1, rect2, rect3];
		for (var i=0; i<rects.length; i++) {
			var r1 = rects[i];
			rects = rects.splice(i, 1);
			for (var r2 of rects) {
				this.assertTrue(collisionRectRect(r1, r2));
			}
		}
	}

}