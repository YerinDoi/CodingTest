const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const nums = input[1].split(" ").map(Number).sort((a, b) => a - b);
const x = Number(input[2]);

let left = 0;
let right = n - 1;
let count = 0;

while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum === x) {
        count++;
        left++;
        right--;
    } else if (sum < x) {
        left++;
    } else {
        right--;
    }
}

console.log(count);