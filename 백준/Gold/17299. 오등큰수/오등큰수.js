const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);

const map = new Map();
const result = new Array(N).fill(-1);
const stack = []

for (num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
}

for (let i = 0; i < N; i++) {
    while (stack.length > 0 && map.get(nums[stack[stack.length - 1]]) < map.get(nums[i])) {
        const index = stack.pop();
        result[index] = nums[i];
    }
    stack.push(i);
}

console.log(result.join(" "));