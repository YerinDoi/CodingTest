function solution(my_string) {
    var answer = my_string.split('')
                          .filter( a => !"aeiou".includes(a))
                          .join('');
    return answer;
}