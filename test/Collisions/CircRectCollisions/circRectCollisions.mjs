import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionCircRect} from '../../exports.mjs';

export class CircRectCollisions extends Tests {
	constructor() {
		super();
	}

	test_circ_rect_collision_sides() {
		var rects = [
			fixture.circ_rect.collision_sides.rect,
			fixture.circ_rect.collision_sides.rRect,
		];
		var circs = [
			fixture.circ_rect.collision_sides.circ_1,
			fixture.circ_rect.collision_sides.circ_2,
			fixture.circ_rect.collision_sides.circ_3,
			fixture.circ_rect.collision_sides.circ_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_collision_corners() {
		var rects = [
			fixture.circ_rect.collision_corners.rect,
			fixture.circ_rect.collision_corners.rRect,
		];
		var circs = [
			fixture.circ_rect.collision_corners.circ_1,
			fixture.circ_rect.collision_corners.circ_2,
			fixture.circ_rect.collision_corners.circ_3,
			fixture.circ_rect.collision_corners.circ_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_collision_greater_overlap() {
		var rects = [
			fixture.circ_rect.collision_greater_overlap.rect,
			fixture.circ_rect.collision_greater_overlap.rRect,
		];
		var circs = [
			fixture.circ_rect.collision_greater_overlap.circ_1,
			fixture.circ_rect.collision_greater_overlap.circ_2,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_boundary_case() {
		var rects = [
			fixture.circ_rect.boundary_case.rect,
			fixture.circ_rect.boundary_case.rRect,
		];
		var circs = [
			fixture.circ_rect.boundary_case.circ_side_1,
			fixture.circ_rect.boundary_case.circ_side_2,
			fixture.circ_rect.boundary_case.circ_side_3,
			fixture.circ_rect.boundary_case.circ_side_4,
			fixture.circ_rect.boundary_case.circ_corner_1,
			fixture.circ_rect.boundary_case.circ_corner_2,
			fixture.circ_rect.boundary_case.circ_corner_3,
			fixture.circ_rect.boundary_case.circ_corner_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_boundary_case() {
		var rects = [
			fixture.circ_rect.boundary_case.rect,
			fixture.circ_rect.boundary_case.rect_90,
			fixture.circ_rect.boundary_case.rect_180,
			fixture.circ_rect.boundary_case.rect_270,
		];
		var circs = [
			fixture.circ_rect.boundary_case.circ_side_1,
			fixture.circ_rect.boundary_case.circ_side_2,
			fixture.circ_rect.boundary_case.circ_side_3,
			fixture.circ_rect.boundary_case.circ_side_4,
			fixture.circ_rect.boundary_case.circ_corner_1,
			fixture.circ_rect.boundary_case.circ_corner_2,
			fixture.circ_rect.boundary_case.circ_corner_3,
			fixture.circ_rect.boundary_case.circ_corner_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_boundary_case_rotated() {
		var rects = {
			rect: fixture.circ_rect.boundary_case_rotated.rect,
			rect_90: fixture.circ_rect.boundary_case_rotated.rect_90,
			rect_180: fixture.circ_rect.boundary_case_rotated.rect_180,
			rect_270: fixture.circ_rect.boundary_case_rotated.rect_270,
		};
		var circs = {
			circ_side_1: fixture.circ_rect.boundary_case_rotated.circ_side_1,
			circ_side_2: fixture.circ_rect.boundary_case_rotated.circ_side_2,
			circ_side_3: fixture.circ_rect.boundary_case_rotated.circ_side_3,
			circ_side_4: fixture.circ_rect.boundary_case_rotated.circ_side_4,
			circ_corner_1: fixture.circ_rect.boundary_case_rotated.circ_corner_1,
			circ_corner_2: fixture.circ_rect.boundary_case_rotated.circ_corner_2,
			circ_corner_3: fixture.circ_rect.boundary_case_rotated.circ_corner_3,
			circ_corner_4: fixture.circ_rect.boundary_case_rotated.circ_corner_4,
		};
		for (var rect in rects) {
			for (var circ in circs) {
				this.assertTrue(
					collisionCircRect(circs[circ], rects[rect]),
					`${circ}, ${rect}`
				);
			}
		}
	}

	test_circ_rect_fully_inside() {
		this.assertTrue(
			collisionCircRect(
				fixture.circ_rect.fully_inside.circ_1,
				fixture.circ_rect.fully_inside.rect_1,
			)
		);
		this.assertTrue(
			collisionCircRect(
				fixture.circ_rect.fully_inside.circ_1,
				fixture.circ_rect.fully_inside.rRect_1,
			)
		);
		this.assertTrue(
			collisionCircRect(
				fixture.circ_rect.fully_inside.circ_2,
				fixture.circ_rect.fully_inside.rect_2,
			)
		);
		this.assertTrue(
			collisionCircRect(
				fixture.circ_rect.fully_inside.circ_2,
				fixture.circ_rect.fully_inside.rRect_2,
			)
		);
	}

	test_circ_rect_no_intersection() {
		var rects = [
			fixture.circ_rect.no_intersection.rect_1,
			fixture.circ_rect.no_intersection.rRect_1,
			fixture.circ_rect.no_intersection.rect_2,
			fixture.circ_rect.no_intersection.rRect_2,
		];
		var circs = [
			fixture.circ_rect.no_intersection.circ_1,
			fixture.circ_rect.no_intersection.circ_2,
			fixture.circ_rect.no_intersection.circ_3,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertFalse(collisionCircRect(circ, rect));
			}
		}
	}
}