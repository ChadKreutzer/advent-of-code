const fs = require('fs');

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;
  const input = data.split('\n');
  input.pop();

  console.log(checksum(input));
  console.log(findBoxes(input));
});

const countChars = (string, qty) => {
  for (let char = 97; char <= 122; char++) {
    let match = new RegExp(`[${String.fromCharCode(char)}]`, 'g');
    if (string.match(match) && string.match(match).length === qty) {
      return 1;
    }
  }
  return 0;
};

function checksum(arr) {
  let twos = 0;
  let threes = 0;

  arr.forEach(code => {
    twos += countChars(code, 2);
    threes += countChars(code, 3);
  });
  return twos * threes;
}

function findBoxes(arr) {
  for (let boxOne of arr) {
    for (let boxTwo of arr) {
      let foundBoxes = compareBoxes(boxOne, boxTwo);
      if (foundBoxes) return foundBoxes;
    }
  }
}

function compareBoxes(boxOne, boxTwo) {
  const diff = { last: undefined, count: 0 };
  for (let letter in boxOne) {
    if (boxOne[letter] !== boxTwo[letter]) {
      diff.last = letter;
      diff.count++;
    }
  }

  return diff.count === 1 ? `${boxOne.substring(0, diff.last)}${boxOne.substring(+diff.last + 1)}` : false;
}