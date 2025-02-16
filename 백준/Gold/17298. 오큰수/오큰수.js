const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// const stack = [];
// const str = '';

// for (const num of nums) {
//     let currentN = num;
//     if (stack.length === 0) {
//         stack.push(num);
//     }

// }

function nextGreaterElements(nums) {
    const stack = [];
    const result = new Array(nums.length).fill(-1); // 기본값을 -1로 초기화

    for (let i = 0; i < nums.length; i++) {
        // 스택에 들어 있는 값 중, 현재 숫자보다 작은 값은 오큰수로 갱신
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            const index = stack.pop();
            result[index] = nums[i]; // 현재 숫자가 오큰수가 됨
        }
        stack.push(i); // 현재 수의 인덱스를 스택에 저장
    }

    return result;
}

// 오큰수 구하기
const result = nextGreaterElements(arr);

// 출력
console.log(result.join(' '));