import {Tests} from '../../tests.mjs';
import {fixtureList} from '../Fixtures/index.mjs';
import {
	collisionCircCirc, collisionCircLine, collisionCircRect
} from '../../exports.mjs';


export class CollisionDetection extends Tests {

	constructor() {
		super();
	}

//------------------------
//CIRCLE-CIRCLE COLLISIONS
//------------------------

	test_circ_circ_collision() {
		this.assertTrue(
			collisionCircCirc(
				fixtureList.circ_circ.collision.circ_1,
				fixtureList.circ_circ.collision.circ_2,
			)
		);
	}

	test_circ_circ_full_overlap() {
		this.assertTrue(
			collisionCircCirc(
				fixtureList.circ_circ.full_overlap.circ_1,
				fixtureList.circ_circ.full_overlap.circ_2,
			)
		);
	}

	test_circ_circ_boundary_case() {
		this.assertTrue(
			collisionCircCirc(
				fixtureList.circ_circ.boundary_case.circ_1,
				fixtureList.circ_circ.boundary_case.circ_2,
			)
		);
		this.assertTrue(
			collisionCircCirc(
				fixtureList.circ_circ.boundary_case.circ_3,
				fixtureList.circ_circ.boundary_case.circ_4,
			)
		);
	}

	test_circ_circ_no_intersection() {
		this.assertFalse(
			collisionCircCirc(
				fixtureList.circ_circ.no_intersection.circ_1,
				fixtureList.circ_circ.no_intersection.circ_2,
			)
		);
		this.assertFalse(
			collisionCircCirc(
				fixtureList.circ_circ.no_intersection.circ_3,
				fixtureList.circ_circ.no_intersection.circ_4,
			)
		);
	}

//------------------------
//CIRCLE-LINE COLLISIONS
//------------------------

	test_circ_line_centre_collision() {
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.centre_collision.circ,
				fixtureList.circ_line.centre_collision.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.centre_collision.circ,
				fixtureList.circ_line.centre_collision.rLine,
			)
		);
	}

	test_circ_line_line_fully_inside() {
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.line_in_circle.circ,
				fixtureList.circ_line.line_in_circle.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.line_in_circle.circ,
				fixtureList.circ_line.line_in_circle.rLine,
			)
		);
	}

	test_circ_line_circle_fully_inside() {
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.circle_in_line.circ,
				fixtureList.circ_line.circle_in_line.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.circle_in_line.circ,
				fixtureList.circ_line.circle_in_line.rLine,
			)
		);
	}

	test_circ_line_end_collision() {
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.end_collision.circ,
				fixtureList.circ_line.end_collision.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.end_collision.circ,
				fixtureList.circ_line.end_collision.rLine,
			)
		);
	}

	test_circ_line_boundary_case() {
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.boundary_case.circ,
				fixtureList.circ_line.boundary_case.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.boundary_case.circ,
				fixtureList.circ_line.boundary_case.rLine,
			)
		);
	}

	test_circ_line_boundary_case_line_ends() {
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.boundary_case_line_ends.circ,
				fixtureList.circ_line.boundary_case_line_ends.line,
			)
		);
		this.assertTrue(
			collisionCircLine(
				fixtureList.circ_line.boundary_case_line_ends.circ,
				fixtureList.circ_line.boundary_case_line_ends.rLine,
			)
		);
	}

	test_circ_line_no_collision() {
		this.assertFalse(
			collisionCircLine(
				fixtureList.circ_line.no_intersection.circ_1,
				fixtureList.circ_line.no_intersection.line_1,
			)
		);
		this.assertFalse(
			collisionCircLine(
				fixtureList.circ_line.no_intersection.circ_1,
				fixtureList.circ_line.no_intersection.rLine_1,
			)
		);
		this.assertFalse(
			collisionCircLine(
				fixtureList.circ_line.no_intersection.circ_2,
				fixtureList.circ_line.no_intersection.line_2,
			)
		);
		this.assertFalse(
			collisionCircLine(
				fixtureList.circ_line.no_intersection.circ_2,
				fixtureList.circ_line.no_intersection.rLine_2,
			)
		);
	}

//------------------------
//CIRCLE-LINE COLLISIONS
//------------------------

	test_circ_rect_collision_sides() {
		var rects = [
			fixtureList.circ_rect.collision_sides.rect,
			fixtureList.circ_rect.collision_sides.rRect,
		];
		var circs = [
			fixtureList.circ_rect.collision_sides.circ_1,
			fixtureList.circ_rect.collision_sides.circ_2,
			fixtureList.circ_rect.collision_sides.circ_3,
			fixtureList.circ_rect.collision_sides.circ_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_collision_corners() {
		var rects = [
			fixtureList.circ_rect.collision_corners.rect,
			fixtureList.circ_rect.collision_corners.rRect,
		];
		var circs = [
			fixtureList.circ_rect.collision_corners.circ_1,
			fixtureList.circ_rect.collision_corners.circ_2,
			fixtureList.circ_rect.collision_corners.circ_3,
			fixtureList.circ_rect.collision_corners.circ_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_collision_greater_overlap() {
		var rects = [
			fixtureList.circ_rect.collision_greater_overlap.rect,
			fixtureList.circ_rect.collision_greater_overlap.rRect,
		];
		var circs = [
			fixtureList.circ_rect.collision_greater_overlap.circ_1,
			fixtureList.circ_rect.collision_greater_overlap.circ_2,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_boundary_case() {
		var rects = [
			fixtureList.circ_rect.boundary_case.rect,
			fixtureList.circ_rect.boundary_case.rRect,
		];
		var circs = [
			fixtureList.circ_rect.boundary_case.circ_side_1,
			fixtureList.circ_rect.boundary_case.circ_side_2,
			fixtureList.circ_rect.boundary_case.circ_side_3,
			fixtureList.circ_rect.boundary_case.circ_side_4,
			fixtureList.circ_rect.boundary_case.circ_corner_1,
			fixtureList.circ_rect.boundary_case.circ_corner_2,
			fixtureList.circ_rect.boundary_case.circ_corner_3,
			fixtureList.circ_rect.boundary_case.circ_corner_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_boundary_case() {
		var rects = [
			fixtureList.circ_rect.boundary_case.rect,
			fixtureList.circ_rect.boundary_case.rect_90,
			fixtureList.circ_rect.boundary_case.rect_180,
			fixtureList.circ_rect.boundary_case.rect_270,
		];
		var circs = [
			fixtureList.circ_rect.boundary_case.circ_side_1,
			fixtureList.circ_rect.boundary_case.circ_side_2,
			fixtureList.circ_rect.boundary_case.circ_side_3,
			fixtureList.circ_rect.boundary_case.circ_side_4,
			fixtureList.circ_rect.boundary_case.circ_corner_1,
			fixtureList.circ_rect.boundary_case.circ_corner_2,
			fixtureList.circ_rect.boundary_case.circ_corner_3,
			fixtureList.circ_rect.boundary_case.circ_corner_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_boundary_case_rotated() {
		var rects = [
			fixtureList.circ_rect.boundary_case_rotated.rect,
			fixtureList.circ_rect.boundary_case_rotated.rect_90,
			fixtureList.circ_rect.boundary_case_rotated.rect_180,
			fixtureList.circ_rect.boundary_case_rotated.rect_270,
		];
		var circs = [
			fixtureList.circ_rect.boundary_case_rotated.circ_side_1,
			fixtureList.circ_rect.boundary_case_rotated.circ_side_2,
			fixtureList.circ_rect.boundary_case_rotated.circ_side_3,
			fixtureList.circ_rect.boundary_case_rotated.circ_side_4,
			fixtureList.circ_rect.boundary_case_rotated.circ_corner_1,
			fixtureList.circ_rect.boundary_case_rotated.circ_corner_2,
			fixtureList.circ_rect.boundary_case_rotated.circ_corner_3,
			fixtureList.circ_rect.boundary_case_rotated.circ_corner_4,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertTrue(collisionCircRect(circ, rect));
			}
		}
	}

	test_circ_rect_fully_inside() {
		this.assertTrue(
			collisionCircRect(
				fixtureList.circ_rect.fully_inside.circ_1,
				fixtureList.circ_rect.fully_inside.rect_1,
			)
		);
		this.assertTrue(
			collisionCircRect(
				fixtureList.circ_rect.fully_inside.circ_1,
				fixtureList.circ_rect.fully_inside.rRect_1,
			)
		);
		this.assertTrue(
			collisionCircRect(
				fixtureList.circ_rect.fully_inside.circ_2,
				fixtureList.circ_rect.fully_inside.rect_2,
			)
		);
		this.assertTrue(
			collisionCircRect(
				fixtureList.circ_rect.fully_inside.circ_2,
				fixtureList.circ_rect.fully_inside.rRect_2,
			)
		);
	}

	test_circ_rect_no_intersection() {
		var rects = [
			fixtureList.circ_rect.no_intersection.rect_1,
			fixtureList.circ_rect.no_intersection.rRect_1,
			fixtureList.circ_rect.no_intersection.rect_2,
			fixtureList.circ_rect.no_intersection.rRect_2,
		];
		var circs = [
			fixtureList.circ_rect.no_intersection.circ_1,
			fixtureList.circ_rect.no_intersection.circ_2,
		];
		for (var rect of rects) {
			for (var circ of circs) {
				this.assertFalse(collisionCircRect(circ, rect));
			}
		}
	}

}
