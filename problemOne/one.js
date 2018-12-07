const fs = require('fs');

fs.readFile("./input.txt", "utf8", (err, data) => {
    if (err) throw err;
    const input = data.split('\n').map(item => Number(item));
    input.pop();
    console.log(partOne(input));
    console.log(partTwo(input));
});


function partOne(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function partTwo(arr, current = 0, freqs = []) {
    for (let freq of arr) {
        if (freqs.includes(current)) return current;
        freqs.push(current);
        current += freq;
    }
    return partTwo(arr, current, freqs);
}