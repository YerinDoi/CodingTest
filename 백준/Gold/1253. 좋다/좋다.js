const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function solution() {
    const n = parseInt(input[0]);  // 수의 개수
    const arr = input[1].split(' ').map(Number);  // 수들
    
    arr.sort((a, b) => a - b);  // 배열을 오름차순으로 정렬
    let count = 0;

    // 각 원소를 기준으로 두 수의 합을 찾아본다.
    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = n - 1;
        let target = arr[i];

        // i를 제외한 나머지 수들에 대해 두 포인터를 이용하여 찾는다.
        while (left < right) {
            if (left === i) {
                left++;
                continue;
            }
            if (right === i) {
                right--;
                continue;
            }

            const sum = arr[left] + arr[right];
            if (sum === target) {
                count++;
                break; // 한 번 찾았으면 더 이상 찾지 않는다.
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    console.log(count);  // 결과 출력
}

solution();
