// function solution(my_string) {
//     var answer = my_string.split('')
//                           .filter( a => !"aeiou".includes(a))
//                           .join('');
//     return answer;
// }

// 정규표현식 사용
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '')
}

// // 'aeiou'가 연속적으로 나오는 부분만 제거하고 싶다면 배열 제거
// // 정규표현식은 문자열에서 특정 패턴을 찾고, 수정하는 도구이기 때문에 // 사이에 ""따옴표 필요 없음
// function solution(my_string) {
//     return my_string.replace(/aeiou/g, '');
// }
