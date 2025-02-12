const [N, arr1, M, arr2] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const nums1 = new Set(arr1.split(' ').map(Number));
const nums2 = arr2.split(' ').map(Number);
const result = nums2.map(i => nums1.has(i) ? 1 : 0).join('\n');
console.log(result);