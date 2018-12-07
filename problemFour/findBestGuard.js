const findBestMinute = require('./findBestMinute');

function findBestGuard(list) {
  let bestGuard = { ID: 0, highest: 0, minute: 0 };

  for (let guard in list) {
    let currentGuard = findBestMinute(guard, list);
    if (currentGuard.highest > bestGuard.highest) {
      bestGuard = currentGuard;
    }
  }
  return bestGuard;
}

module.exports = findBestGuard;