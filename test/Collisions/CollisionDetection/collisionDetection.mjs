import {Tests} from '../../tests.mjs';
import {shapeList} from '../Fixtures/index.mjs';
import {
	collisionCircCirc, collisionCircLine, collisionCircRect
} from '../../exports.mjs';

export class CollisionDetection extends Tests {

	constructor() {
		super();
	}

	test_circ_circ_collision() {
		this.assertTrue(
			collisionCircCirc(
				shapeList.circle1, shapeList.circle1
			)
		);
		this.assertFalse(
			collisionCircCirc(
				shapeList.circle1, shapeList.circle3
			)
		);
	}

	test_circ_line_collision() {
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

	test_circ_rect_collision() {
		this.assertTrue(
			collisionCircRect(
				shapeList.circle4, shapeList.rect1
			)
		);
		this.assertFalse(
			collisionCircRect(
				shapeList.circle2, shapeList.rect2
			)
		);
	}

}
