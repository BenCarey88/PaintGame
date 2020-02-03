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

	test_circ_line_fully_inside() {
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
				shapeList.circle3, shapeList.line1
			)
		);
		this.assertFalse(
			collisionCircLine(
				shapeList.circle1, shapeList.line1
			)
		);
	}

	test_circ_line_no_collision() {
		this.assertTrue(
			collisionCircLine(
				shapeList.circle3, shapeList.line1
			)
		);
		this.assertFalse(
			collisionCircLine(
				shapeList.circle1, shapeList.line1
			)
		);
	}

	// test_circ_rect_collision() {
	// 	this.assertTrue(
	// 		collisionCircRect(
	// 			shapeList.circle4, shapeList.rect1
	// 		)
	// 	);
	// 	this.assertFalse(
	// 		collisionCircRect(
	// 			shapeList.circle2, shapeList.rect2
	// 		)
	// 	);
	// }

}
