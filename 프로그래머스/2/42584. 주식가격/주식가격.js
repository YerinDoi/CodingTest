function solution(prices) {
    const result = [];
    const stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
        
    }
    while (stack.length > 0) {
        const idx = stack.pop();
        result[idx] = prices.length - 1 - idx;
    }
        
    return result;
}