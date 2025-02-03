// function solution(n) {
//     var answer = Array.from({ length: n }, (_, i) => i + 1)  // 1부터 n까지 배열 생성
//                       .filter(a => n % a === 0)  // 약수만 필터링
//                       .length;  // 약수의 개수 세기
//     return answer;
// }



function solution(n) {
    let count = 0;
    
    for (let i=1; i <= n; i++) {
        if(n % i === 0) {
            count++;
        }
    }
    return count;
}