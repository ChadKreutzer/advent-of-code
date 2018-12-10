const fs = require('fs');
const removeAntiUnits = require('./removeAntiUnits');
const removePoly = require('./removePoly');
const polyList = [/a/,/b/,/c/,/d/,/e/,/f/,/g/,/h/,/i/,/j/,/k/,/l/,/m/,
                  /n/,/o/,/p/,/q/,/r/,/s/,/t/,/u/,/v/,/w/,/x/,/y/,/z/];

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;
  const input = data.trim();
  
  console.log(removeAntiUnits(input));
  const partTwo = polyList.map(p => removeAntiUnits(removePoly(input, p)))
    .reduce((lowest, curr) => curr < lowest ? curr : lowest);
  
  console.log(partTwo);
});