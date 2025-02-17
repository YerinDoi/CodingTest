function solution(prices) {
    const result = Array(prices.length).fill(0);  // 각 시간에 주식 가격이 떨어지지 않은 시간 초기화
    const stack = [];  // 스택을 사용해서 가격과 시간 계산
    
    for (let i = 0; i < prices.length; i++) {
        // 스택에 이전 가격들과 시간을 저장
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const idx = stack.pop();  // 가격이 떨어진 인덱스
            result[idx] = i - idx;    // 떨어지기까지 걸린 시간 계산
        }
        stack.push(i);  // 현재 시간의 인덱스를 스택에 넣음
    }
    
    // 스택에 남아있는 가격들은 끝까지 떨어지지 않았으므로 그 시간만큼 계산
    while (stack.length > 0) {
        const idx = stack.pop();
        result[idx] = prices.length - idx - 1;  // 마지막까지 떨어지지 않았으므로 남은 시간 계산
    }
    
    return result;
}
