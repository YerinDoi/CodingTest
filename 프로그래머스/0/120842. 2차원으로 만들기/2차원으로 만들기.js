function solution(num_list, n) {
    let result = [];
    
    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list.slice(i, i + n));
    }
    
    return result;
}

// slice(start, end)는 배열의 특정 부분을 잘라서 새로운 배열을 반환하는 메서드야.
// start부터 end - 1까지의 요소를 잘라서 반환해. (end는 포함되지 않음)