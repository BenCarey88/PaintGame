import {print, printColour, addLink, newLine} from './exports.mjs';
import {summary} from './tests.mjs';

function runTests(test, link) {
    //if link is undefined, use './TestName/testName.html'
    if (link == undefined) {
        // ^\w is regex for word character (a-zA-Z0-9_)
        var camelCaseName = test.name.replace(/^\w/, c => c.toUpperCase());
        link = `./${test.name}/${camelCaseName}.html`;
    }
    printColour(test.name, "white", "&nbsp &nbsp", "white", ...summary(test));
    addLink(test.name, link);
}

printColour("TEST SUMMARIES", "orange");
newLine();

import {VectorTests} from './VectorTests/vectorTests.mjs';
runTests(VectorTests, './VectorTests/vectorTests.html');
