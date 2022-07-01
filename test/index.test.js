const fs = require('fs');
const leetsheet = require("../src");


fs.readFile('../test/purplerain.txt', 'utf8', (err, txt) => {
  if (err) {
    console.error(err);
    return;
  }
  leetsheet.parse(txt);
});

