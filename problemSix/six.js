const fs = require('fs');
const findTaxiDistance = require('./findTaxiDistance');

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;
  const input = data.split('\n');
  input.pop();
  const coords = input.map((c, i) => {
    const xy = c.replace(/\s/, '').split(',');
    return { ID: i, x: +xy[0], y: +xy[1] };
  });

  const maxX = Number(coords.map(loc => loc.x).sort((a, b) => b - a)[0]) + 1;
  const maxY = Number(coords.map(loc => loc.y).sort((a, b) => b - a)[0]) + 1;
  const grid = [...Array(maxX)].map(x => Array(maxY).fill(0));
  
  for (let x in grid) {
    for (let y in grid[x]) {
      coords.forEach((loc, i, arr) => {
        const current = arr[grid[x][y]];
        if(findTaxiDistance([x,y], [loc.x, loc.y]) < findTaxiDistance([x, y], [current.x, current.y])) {
          grid[x][y] = loc.ID;
        }
      });
    }
  }

  console.log(grid[54][91]);
});