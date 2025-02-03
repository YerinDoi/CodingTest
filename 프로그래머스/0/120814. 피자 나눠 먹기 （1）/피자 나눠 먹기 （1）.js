// function solution(n) {
//     return n % 7 === 0 ? n / 7 : Math.trunc(n / 7) + 1;
// }


function solution(n) {
    return Math.ceil(n / 7);
}