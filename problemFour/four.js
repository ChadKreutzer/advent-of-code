const fs = require('fs');
const createDateList = require('./createDateList');
const createGuardList = require('./createGuardList');
const findMostSleepyGuard = require('./findMostSleepyGuard');
const findBestMinute = require('./findBestMinute');
const findBestGuard = require('./findBestGuard');

const parseNote = string => (string.includes("Guard")) ? /#(\d+)/.exec(string)[1] : string.includes('falls');

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;

  const input = data.split('\n');
  input.pop();

  const roughList = input.map(line => {
    return {
      time: new Date(line.substring(1, 17)),
      note: parseNote(line.substring(19))
    };
  }).sort((a, b) => a.time - b.time);

  const dateList = createDateList(roughList);
  const guardList = createGuardList(dateList);
  const sleepyGuard = findMostSleepyGuard(guardList);
  const bestMinute = findBestMinute(sleepyGuard, guardList);
  const bestGuard = findBestGuard(guardList);

  console.log(bestMinute.minute * sleepyGuard);
  console.log(bestGuard.ID * bestGuard.minute);
});
