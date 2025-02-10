function solution(array, commands) {
    let result = [];
    for (command of commands) {
        const [i, j, k] = command;
        const sliced = array.slice(i - 1, j).sort((a, b) => a - b);
        result.push(sliced[k - 1]);
    }
    return result;
}

// map 사용
function solution(array, commands) {
    var answer = [];

    answer = commands.map(command => {
        return array.slice(command[0] - 1, command[1])
                    .sort((a, b) => a - b)[command[2] - 1];
    })
    return answer;
}