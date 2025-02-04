function solution(num, k) {
    let str = num.toString();
    let index = str.indexOf(k.toString());
    
    return index === -1 ? -1 : index + 1;
}