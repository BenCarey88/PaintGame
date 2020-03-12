import {Tests} from '../../tests.mjs';
import {fixture} from '../Fixtures/index.mjs';
import {collisionCircRect} from '../../exports.mjs';

export class CircRectCollisions extends Tests {
	constructor() {
		super();
		this.fixture = fixture.circ_rect;
	}

	test_collision_sides() {
		var rects = [
			this.fixture.collision_sides.rect,
			this.fixture.collision_sides.rRect,
		];
		var circs = [
			this.fixture.collision_sides.circ_1,
			this.fixture.collision_sides.circ_2,
			this.fixture.collision_sides.circ_3,
			this.fixture.collision_sides.circ_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_collision_corners() {
		var rects = [
			this.fixture.collision_corners.rect,
			this.fixture.collision_corners.rRect,
		];
		var circs = [
			this.fixture.collision_corners.circ_1,
			this.fixture.collision_corners.circ_2,
			this.fixture.collision_corners.circ_3,
			this.fixture.collision_corners.circ_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_collision_greater_overlap() {
		var rects = [
			this.fixture.collision_greater_overlap.rect,
			this.fixture.collision_greater_overlap.rRect,
		];
		var circs = [
			this.fixture.collision_greater_overlap.circ_1,
			this.fixture.collision_greater_overlap.circ_2,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_boundary_case() {
		var rects = [
			this.fixture.boundary_case.rect,
			this.fixture.boundary_case.rRect,
		];
		var circs = [
			this.fixture.boundary_case.circ_side_1,
			this.fixture.boundary_case.circ_side_2,
			this.fixture.boundary_case.circ_side_3,
			this.fixture.boundary_case.circ_side_4,
			this.fixture.boundary_case.circ_corner_1,
			this.fixture.boundary_case.circ_corner_2,
			this.fixture.boundary_case.circ_corner_3,
			this.fixture.boundary_case.circ_corner_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_boundary_case() {
		var rects = [
			this.fixture.boundary_case.rect,
			this.fixture.boundary_case.rect_90,
			this.fixture.boundary_case.rect_180,
			this.fixture.boundary_case.rect_270,
		];
		var circs = [
			this.fixture.boundary_case.circ_side_1,
			this.fixture.boundary_case.circ_side_2,
			this.fixture.boundary_case.circ_side_3,
			this.fixture.boundary_case.circ_side_4,
			this.fixture.boundary_case.circ_corner_1,
			this.fixture.boundary_case.circ_corner_2,
			this.fixture.boundary_case.circ_corner_3,
			this.fixture.boundary_case.circ_corner_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_boundary_case_rotated() {
		var rects = {
			rect: this.fixture.boundary_case_rotated.rect,
			rect_90: this.fixture.boundary_case_rotated.rect_90,
			rect_180: this.fixture.boundary_case_rotated.rect_180,
			rect_270: this.fixture.boundary_case_rotated.rect_270,
		};
		var circs = {
			circ_side_1: this.fixture.boundary_case_rotated.circ_side_1,
			circ_side_2: this.fixture.boundary_case_rotated.circ_side_2,
			circ_side_3: this.fixture.boundary_case_rotated.circ_side_3,
			circ_side_4: this.fixture.boundary_case_rotated.circ_side_4,
			circ_corner_1: this.fixture.boundary_case_rotated.circ_corner_1,
			circ_corner_2: this.fixture.boundary_case_rotated.circ_corner_2,
			circ_corner_3: this.fixture.boundary_case_rotated.circ_corner_3,
			circ_corner_4: this.fixture.boundary_case_rotated.circ_corner_4,
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

	test_fully_inside() {
		this.assertTrue(
			collisionCircRect(
				this.fixture.fully_inside.circ_1,
				this.fixture.fully_inside.rect_1,
			)
		);
		this.assertTrue(
			collisionCircRect(
				this.fixture.fully_inside.circ_1,
				this.fixture.fully_inside.rRect_1,
			)
		);
		this.assertTrue(
			collisionCircRect(
				this.fixture.fully_inside.circ_2,
				this.fixture.fully_inside.rect_2,
			)
		);
		this.assertTrue(
			collisionCircRect(
				this.fixture.fully_inside.circ_2,
				this.fixture.fully_inside.rRect_2,
			)
		);
	}

	test_no_intersection() {
		var rects = [
			this.fixture.no_intersection.rect_1,
			this.fixture.no_intersection.rRect_1,
			this.fixture.no_intersection.rect_2,
			this.fixture.no_intersection.rRect_2,
		];
		var circs = [
			this.fixture.no_intersection.circ_1,
			this.fixture.no_intersection.circ_2,
			this.fixture.no_intersection.circ_3,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertFalse(collisionCircRect(circ, rect));
			}
		}
	}
}
