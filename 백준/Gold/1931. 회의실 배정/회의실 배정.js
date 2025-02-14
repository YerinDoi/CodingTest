const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const meetings = input.slice(1).map(line => line.split(" ").map(Number));

meetings.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
})

let count = 0;
let lastEnd = 0;

for (const [start, end] of meetings) {
    if (start >= lastEnd) {
        count++;
        lastEnd = end;
    }
}

console.log(count);