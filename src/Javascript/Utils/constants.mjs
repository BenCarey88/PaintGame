//constants for paint game

import {Vector} from './Maths/vector.mjs';
import {TOLERANCE} from './functionUtils.mjs';

export const constants = {
    TOLERANCE: TOLERANCE,

    ZERO_VEC: new Vector(0, 0),

    BASE_SHAPE: "base_shape",
    CIRCLE: "circle",
    RECTANGLE: "rectangle",
    LINE: "line",
    COMPOUND_SHAPE: "compound_shape",
    POLYGON: "polygon",
}
