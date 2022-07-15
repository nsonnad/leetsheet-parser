import test from 'tape';
import fs from 'fs';
import { parse } from '../src';

test('read', (t) => {
  t.plan(1);

  fs.readFile('./test/purplerain.txt', 'utf8', (err, txt) => {
    if (err) {
      console.error(err);
      return;
    }
    t.equal(parse(txt), 'asdf');
  });

})

