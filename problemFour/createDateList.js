function createDateList(input) {
  const list = [];

  for (let line of input) {
    if (typeof(line.note) === 'string') {
      list.push({
        ID: line.note,
        onDuty: line.time,
        isAsleep: [],
      });
    }
    else {
      let currentShift = list[list.length - 1].isAsleep;
      if (line.note) {
        fillHour(currentShift, line.time.getMinutes(), false);
      }
      else {
        fillHour(currentShift, line.time.getMinutes(), true);
      }
    }
  }

  for (let line of list) {
    const filler = line.isAsleep.length === 0 ? false : line.isAsleep[line.isAsleep.length - 1];
    while (line.isAsleep.length < 60) line.isAsleep.push(filler);
  }
  return list;
}

function fillHour(shift, min, flag) {
  while (shift.length < min) shift.push(flag);
  shift.push(!flag);
}

module.exports = createDateList;
