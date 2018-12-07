const fs = require('fs');
const removeAntiUnits = require('./removeAntiUnits');

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;
  const input = data.trim();
  
  console.log(removeAntiUnits(input));
  
});