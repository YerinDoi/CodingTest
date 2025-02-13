function solution(s) {
    let stack = [];
    for (c of s) {
        if (stack.length > 0 && c === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0 ? 1 : 0;
}