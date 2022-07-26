import test from 'tape';
import fs from 'fs';
import { parse } from '../src';
import { parseProgression } from '../src/parseProgression.mjs'

const expectedLS = {
  title: "Purple Rain",
  artist: "Prince",
  tempo: 80,
  time: "4/4"
};

test('get frontmatter', (t) => {
  t.plan(1);

  fs.readFile('./test/purplerain.txt', 'utf8', (err, txt) => {
    if (err) console.error(err);
    t.deepEqual(parse(txt).meta, expectedLS);
  });

})

//test('invalid frontmatter returns error', (t) => {
  //t.plan(1);

  //fs.readFile('./test/purplerain-bad.txt', 'utf8', (err, txt) => {
    //if (err) console.error(err);
    //t.error(parse(txt));
  //});

//})

const prog1 = '\n| Eb | Bb | Gm7 | F | F7 |\n';
const prog2 = '\n| Bb(8) - |\n';

test('chords successfully parsed into `song` structure', (t) => {
  t.plan(1);
  let parsed = parseProgression(prog1);
  console.log(parsed)

})
