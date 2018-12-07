function findBestMinute(id, guard) {
  const minutes = new Array(60).fill(0);
  const bestMinute = { ID: id, highest: 0, minute: 0 };

  for (let day in guard[id]) {
    guard[id][day].forEach((minute, i) => { if (minute) minutes[i]++; });
  }
  bestMinute.highest = [...minutes].sort((a, b) => b - a)[0];
  bestMinute.minute = minutes.indexOf(bestMinute.highest);
  return bestMinute;
}

module.exports = findBestMinute;