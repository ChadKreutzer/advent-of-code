const fs = require('fs');
const findTD = require('./findTaxiDistance');

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;
  const input = data.split('\n');
  input.pop();
  const coords = input.map((c, i) => {
    const xy = c.replace(/\s/, '').split(',');
    return { ID: i, distance: 0, x: +xy[0], y: +xy[1] };
  });

  const maxX = Number(coords.map(loc => loc.x).sort((a, b) => b - a)[0]) + 1;
  const maxY = Number(coords.map(loc => loc.y).sort((a, b) => b - a)[0]) + 1;
  const grid = [...Array(maxX)].map(x => Array(maxY).fill(0));
  const equal = TD => {
    return { ID: 'same', distance: TD };
  };

  for (let x in grid) {
    for (let y in grid[x]) {
     
    }
  }

  console.log(grid[54][91]);
});