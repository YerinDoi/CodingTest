function solution(numbers, direction) {
    if (direction === "right") {
        // 오른쪽으로 한 칸 회전
        let last = numbers.pop();  // 마지막 원소를 꺼낸다
        numbers.unshift(last);     // 그 원소를 맨 앞에 추가
    } else if (direction === "left") {
        // 왼쪽으로 한 칸 회전
        let first = numbers.shift();  // 첫 번째 원소를 꺼낸다
        numbers.push(first);          // 그 원소를 맨 뒤에 추가
    }
    return numbers;
}
