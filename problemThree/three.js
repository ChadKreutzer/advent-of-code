const fs = require('fs');

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;

  const input = data.split('\n');
  input.pop();

  const claims = input.map(c => {
    const reg = /#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)/;
    let arr = c.match(reg);

    return {
      ID: +arr[1],
      offset: {
        x: +arr[2],
        y: +arr[3]
      },
      size: {
        x: +arr[4],
        y: +arr[5]
      }
    };
  });
  const sheet = fillSheet(claims);
  console.log(findOverlappingClaims(sheet));
  console.log(findGoodClaim(claims, sheet));
});

function fillSheet(claims) {
  const sheet = Array(1000).fill(0).map(() => Array(1000).fill(0));
  claims.forEach(claim => {
    for (let xLoc = claim.offset.x; xLoc < claim.offset.x + claim.size.x; xLoc++) {
      for (let yLoc = claim.offset.y; yLoc < claim.offset.y + claim.size.y; yLoc++) {
        sheet[xLoc][yLoc]++;
      }
    }
  });
  return sheet;
}

function findOverlappingClaims(filledSheet) {
  return [].concat(...filledSheet).filter(sqin => sqin > 1).length;
}

function findGoodClaim(claims, sheet) {
  for (let claim of claims) {
    let goodClaim = claim.ID;
    for (let xLoc = claim.offset.x; xLoc < claim.offset.x + claim.size.x; xLoc++) {
      for (let yLoc = claim.offset.y; yLoc < claim.offset.y + claim.size.y; yLoc++) {
        if (sheet[xLoc][yLoc] > 1) goodClaim = false;
      }
    }
    if (goodClaim) return goodClaim;
  }
}