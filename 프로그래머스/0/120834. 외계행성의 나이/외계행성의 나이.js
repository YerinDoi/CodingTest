function solution(age) {
    // 숫자 age를 문자열로 변환 후, 각 자리를 알파벳으로 변환
    return age
        .toString()  // 숫자를 문자열로 변환
        .split('')   // 각 자릿수를 배열로 분리
        .map(digit => String.fromCharCode(97 + parseInt(digit)))  // 숫자를 해당 알파벳으로 변환
        .join('');   // 알파벳들을 합쳐서 문자열 반환
}
