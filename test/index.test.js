import test from 'tape';
import fs from 'fs';
import { parse } from '../src';

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
    t.deepEqual(parse(txt), expectedLS);
  });

})

//test('invalid frontmatter returns error', (t) => {
  //t.plan(1);

  //fs.readFile('./test/purplerain-bad.txt', 'utf8', (err, txt) => {
    //if (err) console.error(err);
    //t.error(parse(txt));
  //});

//})

