function solution(num1, num2) {
    return Math.floor(num1 / num2)
}

// Math.floor()가 필요한 이유
// 1. 나눗셈 결과가 실수(소수점 포함)로 나오기 때문
// 2. 정수 몫만 필요할 때 사용
// 3. 양수든 음수든 항상 "내림"하여 정수로 변환