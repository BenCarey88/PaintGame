import {Fixture} from '../../fixture.mjs';

import {circ_circ} from './circCircFixtures.mjs';
import {circ_line} from './circLineFixtures.mjs';
import {circ_rect} from './circRectFixtures.mjs';
import {rect_rect} from './rectRectFixtures.mjs';
import {rect_line} from './rectLineFixtures.mjs';
import {line_line} from './lineLineFixtures.mjs';

export var fixture = new Fixture(
    {
        circ_circ: circ_circ,
        circ_line: circ_line,
        circ_rect: circ_rect,
        rect_rect: rect_rect,
    }
);
