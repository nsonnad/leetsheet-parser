
// take name of a section and unprocessed string of its chord progression
// and return an array of:
//   {
//     chord: string,
//     duration: string,
//     notes: [ midi_values ],
//     ticks: int
//   }
const progressionToMeasures = function(progression) {
    return progression
        .trim()
        .replace(/\n/g, "")
        .replace(/\s\|/g, "|")
        .replace(/\|\s/g, "|")
        .split("|")
        .filter(x => x);
}



// take a chord string like Bb(8) and turn it into
// an obj with all the info
const createChordObj = function(chordStr) {

}

const parseMeasure = function(measure) {
    let chords = measure.trim().split(/\s+/)
    return chords.map(createChordObj);
}

const parseProgression = function(section) {
    let measures = progressionToMeasures(section);
    return parseMeasure(measures);
}

export { parseProgression as parseProgression }
