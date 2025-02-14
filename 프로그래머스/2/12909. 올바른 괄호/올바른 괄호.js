function solution(s) {
    const stack = [];
    
    for (let char of s) {
        if (char === '(') {
            stack.push(char);  // 여는 괄호는 스택에 넣기
        } else {
            if (stack.length === 0) {
                return false;  // 스택이 비어있는데 닫는 괄호가 나옴 -> 올바르지 않음
            }
            stack.pop();  // 여는 괄호 하나 제거
        }
    }
    
    // 모든 문자를 처리한 후 스택이 비어있으면 올바른 괄호
    return stack.length === 0;
}
