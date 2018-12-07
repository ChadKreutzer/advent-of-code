function createGuardList(input) {
  const list = {};

  for (let line of input) {
    if(!list[line.ID]) {
      list[line.ID] = {};
      list[line.ID][line.onDuty] = line.isAsleep;
    }
    else {
      list[line.ID][line.onDuty] = line.isAsleep;
    }
  }
  return list;
}

module.exports = createGuardList;