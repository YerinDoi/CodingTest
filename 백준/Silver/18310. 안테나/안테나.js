const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const houses = arr.map(Number);
houses.sort((a, b) => a - b);

const medianIndex = Math.floor((N - 1)/2)

console.log(houses[medianIndex]);