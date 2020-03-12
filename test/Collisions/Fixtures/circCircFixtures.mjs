import {Vector, Circle} from '../../exports.mjs';

//---------------------------------------
//CIRCLE-CIRCLE COLLISIONS
//---------------------------------------
export var circ_circ = {
    FIXTURE_HEIGHT: 150
};

//standard collision
circ_circ.collision = {
    circ_1: new Circle (
        new Vector(60, 60), 30    
    ),
    circ_2: new Circle (
        new Vector(100, 80), 40
    ),
};

//full overlap
circ_circ.full_overlap = {
    circ_1: new Circle (
        new Vector(80, 80), 50
    ),
    circ_2: new Circle (
        new Vector(80, 80), 50
    ),
};

//fully inside
circ_circ.fully_inside = {
    circ_1: new Circle (
        new Vector(80, 80), 50
    ),
    circ_2: new Circle (
        new Vector(80, 60), 20
    ),
};

//boundaries touching
circ_circ.boundary_case = {
    //bboxes touching
    circ_1: new Circle (
        new Vector(60, 50), 40
    ),
    circ_2: new Circle (
        new Vector(60, 110), 20
    ),
    //bboxes overlapping
    circ_3: new Circle (
        new Vector(140, 40), 30    
    ),
    circ_4: new Circle (
        new Vector(
            140 + 70 * Math.sqrt(2) * 0.5, 
            40 + 70 * Math.sqrt(2) * 0.5
        ),
        40
    ),

    FIXTURE_LENGTH: 240
}

//no intersection
circ_circ.no_intersection = {
    //bboxes overlapping
    circ_1: new Circle(
        new Vector(60, 60), 30    
    ),
    circ_2: new Circle(
        new Vector(110, 100), 30
    ),
    //bboxes disconnected
    circ_3: new Circle(
        new Vector(180, 50), 30    
    ),
    circ_4: new Circle(
        new Vector(240, 100), 20
    ),

    FIXTURE_LENGTH: 270
}