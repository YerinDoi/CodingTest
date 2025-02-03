// function solution(my_string, letter) {
//     return my_string.split('').filter(a => a !== letter).join('');
// }

// letter를 기준으로 쪼개져서 결국 letter 없어짐
function solution(my_string, letter) {
    return my_string.split(letter).join('');
}