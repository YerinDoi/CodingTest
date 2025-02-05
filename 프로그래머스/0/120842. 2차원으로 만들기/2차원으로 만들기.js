// slice(start, end)는 배열의 특정 부분을 잘라서 새로운 배열을 반환
// start부터 end - 1까지의 요소를 잘라서 반환 (end는 포함되지 않음)
function solution(num_list, n) {
    let result = [];
    
    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list.slice(i, i + n));
    }
    
    return result;
}


// splice(start, count): 배열에서 특정 개수의 요소를 잘라서 반환하고, 원본 배열에서 제거
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}
