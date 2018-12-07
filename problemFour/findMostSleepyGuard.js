function findMostSleepyGuard(input) {
  let sleepyGuard;
  let maxSleep = 0;

  for (let guard in input) {
    let sleepTime = 0;
    
    for (let date in input[guard]) {
      input[guard][date].forEach(minute => {
        if (minute) sleepTime++;
      });
    }
    if (sleepTime > maxSleep) {
      maxSleep = sleepTime;
      sleepyGuard = guard;
    }
  }
  return sleepyGuard;
}

module.exports = findMostSleepyGuard;