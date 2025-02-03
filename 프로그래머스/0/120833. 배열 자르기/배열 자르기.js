function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1, num2 + 1);
    return answer;
}

// 배열에서 특정 범위를 가져올 때 slice() 메서드를 사용