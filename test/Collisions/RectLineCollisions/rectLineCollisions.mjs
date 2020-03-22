import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collision, newLine, print} from '../../exports.mjs';

export class RectLineCollisions extends Tests {
	constructor() {
		super();
		this.fixture = fixture.rect_line;
	}

	test_collision() {
		var rects = [
			this.fixture.collision.rect1,
			this.fixture.collision.rRect1,
			this.fixture.collision.rect2,
			this.fixture.collision.rRect2,
			this.fixture.collision.rect3,
			this.fixture.collision.rRect3,
			this.fixture.collision.rect4,
			this.fixture.collision.rect4_90,
			this.fixture.collision.rect4_180,
			this.fixture.collision.rect4_270,
		]
		var lines = [
			this.fixture.collision.line1,
			this.fixture.collision.rLine1,
			this.fixture.collision.line2,
			this.fixture.collision.rLine2,
			this.fixture.collision.line3,
			this.fixture.collision.rLine3,
			this.fixture.collision.line4,
			this.fixture.collision.rLine4,
		]
		for (var rect of rects) {
			for (var line of lines) {
				this.assertTrue(
					collision(rect, line)
				);
			}
		}
	}

	test_boundary_case() {
		var rects = [
			this.fixture.boundary_case.rect,
			this.fixture.boundary_case.rect_90,
			this.fixture.boundary_case.rect_180,
			this.fixture.boundary_case.rect_270,
		]
		var lines = [
			this.fixture.boundary_case.line1,
			this.fixture.boundary_case.rLine1,
			this.fixture.boundary_case.line2,
			this.fixture.boundary_case.rLine2,
			this.fixture.boundary_case.line3,
			this.fixture.boundary_case.rLine3,
			this.fixture.boundary_case.line4,
			this.fixture.boundary_case.rLine4,
		]
		for (var rect of rects) {
			for (var line of lines) {
				this.assertTrue(
					collision(rect, line)
				);
			}
		}
	}

	test_boundary_case_rotated() {
		var rects = [
			this.fixture.boundary_case_rotated.rect,
			this.fixture.boundary_case_rotated.rect_90,
			this.fixture.boundary_case_rotated.rect_180,
			this.fixture.boundary_case_rotated.rect_270,
		]
		var lines = [
			this.fixture.boundary_case_rotated.line1,
			this.fixture.boundary_case_rotated.rLine1,
			this.fixture.boundary_case_rotated.line2,
			this.fixture.boundary_case_rotated.rLine2,
			this.fixture.boundary_case_rotated.line3,
			this.fixture.boundary_case_rotated.rLine3,
			this.fixture.boundary_case_rotated.line4,
			this.fixture.boundary_case_rotated.rLine4,
		]
		for (var rect of rects) {
			for (var line of lines) {
				this.assertTrue(
					collision(rect, line)
				);
			}
		}
	}

	test_fully_inside() {
		var rect1 = [
			this.fixture.fully_inside.rect1,
			this.fixture.fully_inside.rRect1,
		]
		var line1 = [
			this.fixture.fully_inside.line1,
			this.fixture.fully_inside.rLine1,
		]
		for (var rect of rect1) {
			for (var line of line1) {
				this.assertTrue(
					collision(rect, line)
				);
			}
		}

		var rect2 = [
			this.fixture.fully_inside.rect2,
			this.fixture.fully_inside.rRect2,
		]
		var line2 = [
			this.fixture.fully_inside.line2,
			this.fixture.fully_inside.rLine2,
		]
		for (var rect of rect2) {
			for (var line of line2) {
				this.assertTrue(
					collision(rect, line)
				);
			}
		}
	}

	test_no_collision() {
		var rects = [
			this.fixture.no_collision.rect1,
			this.fixture.no_collision.rRect1,
			this.fixture.no_collision.rect2,
			this.fixture.no_collision.rRect2,
		]
		var lines = [
			this.fixture.no_collision.line1,
			this.fixture.no_collision.rLine1,
			this.fixture.no_collision.line2,
			this.fixture.no_collision.rLine2,
			this.fixture.no_collision.line3,
			this.fixture.no_collision.rLine3,
			this.fixture.no_collision.line4,
			this.fixture.no_collision.rLine4,
		]
		for (var rect of rects) {
			for (var line of lines) {
				this.assertFalse(
					collision(rect, line)
				);
			}
		}
	}

}