function solution(numbers) {
    var sortedN = numbers.sort((a, b) => a - b);  // 숫자 크기 순으로 정렬
    var n = numbers.length;
    return sortedN[n - 1] * sortedN[n - 2]; 
}