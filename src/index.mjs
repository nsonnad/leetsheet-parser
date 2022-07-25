"use strict";
import fm from 'front-matter';
import yaml from 'js-yaml';

// todo
// 0. get a leetsheet string X
// 0a. validate it
// 1. get frontmatter X
// 2. find ## arrangement and parse it as yaml
// 3. find ## section and parse it as yaml
// 4. for each section:
// 4a. split out all chords using regex.
// 4b. map over chords to create a flat array of:
//      {
//        chord: string,
//        duration: string,
//        notes: [ midi_values ],
//        ticks: int
//      }
// 5. append to master flat array of `song`

const rgx = {
    //structure: /^\-\-\-\n(.*)\-\-\-$/ms,
    //sections: /^(\w+)\:\s(.*)$/gm
    arrangement: /^##\sarrangement\n([\W\w]+?)^##[^#\n]+/gms,
    sections: /^##\ssections\n(.+)/gms
};

const getFrontmatter = function(sheet) {
    try {
        fm(sheet)
        return fm(sheet).attributes
    } catch(e) {
        console.error("unable to parse frontmatter")
    }
}

const getArrangement = function (sheet) {
    let m = sheet.match(rgx.arrangement);
    if (m) {
        let arr = yaml.load(m[0]);
        return arr;
    } else {
        console.error('no arrangement found');
    }
}

const getSections = function (sheet) {
    let m = sheet.match(rgx.sections);
    if (m) {
        console.log(m)
        let sections = yaml.load(m[0]);
        return sections;
    } else {
        console.error('no sections found');
    }

}

const progressionToMeasures = function(progression) {
    return progression
        .replace(/\n/g, "")
        .replace(/\s\|/g, "|")
        .replace(/\|\s/g, "|")
        .split("|")
        .filter(x => x);
}

const processChordProgression = function(section) {
    let measures = progressionToMeasures(section);
    console.log(measures)
}

const makeSong = function (sheet) {
    let sections = getSections(sheet)
    Object.keys(sections).reduce(function(arr, k) {
        return [
            ...arr,
            processChordProgression(sections[k])
        ]
    }, [])
    return "";
}

const parseSheet = function (sheet) {
    let meta = getFrontmatter(sheet);
    let arrangement = getArrangement(sheet);
    let song = makeSong(sheet);

    let ls = {
        meta: meta,
        arrangement: arrangement,
        song: song
    };
    console.log(ls)
    return ls;
    //let ls = fmToJson(fm);
    //return ls;
};

export { parseSheet as parse }
