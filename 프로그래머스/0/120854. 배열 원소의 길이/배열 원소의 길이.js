// function solution(strlist) {
//     return strlist.map(a => a.length);
// }

function solution(strlist) {
    let answer = [];
    
    for (let i = 0; i < strlist.length; i++) {
        answer.push(strlist[i].length);
    }
    return answer;
}
