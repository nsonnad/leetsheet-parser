"use strict";

import {ifError} from "assert";

// todo
// 0. get a leetsheet string
// 0a. validate it
// 1. get frontmatter
// 2. find ## structure and parse it as yaml
// 3. map over resulting array
// 4. for each item:
// 4a. grab relevant section based on name
// 4b. convert chords to a flat array of:
//      {
//        chord: string,
//        duration: string,
//        notes: [ midi_values ],
//        ticks: int
//      }
// 5. append to master flat array of `song`

const rgx = {
    frontmatter: /^\-\-\-\n(.*)\-\-\-$/ms,
    individualFM: /^(\w+)\:\s(.*)$/gm
};

const getFrontmatter = function(sheet) {
    var m = sheet.match(rgx.frontmatter);
    if ( m ) {
        return m[1]
    } else {
        console.error('no frontmatter');
    }
}

const fmToJson = function(fmStr) {
    // take the front matter and make key/values
}

const parseSheet = function (sheet) {
    console.log(getFrontmatter(sheet))
    return 'asdf'
};

export { parseSheet as parse }
