const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\n/);

const N = Number(input[0]);
const nums1 = input[1].split(" ").map(Number);
const M = Number(input[2]);
const nums2 = input[3].split(" ").map(Number);

const countMap = new Map();
for (num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
}

const result = nums2.map(num => countMap.get(num) || 0);

console.log(result.join(" "));