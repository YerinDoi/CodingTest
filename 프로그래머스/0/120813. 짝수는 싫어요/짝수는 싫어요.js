function solution(n) {
    let answer = []
    for (let i = 1; i <= n; i+=2) {
        answer.push(i)
    }
    return answer
}

// const solution = (n) => 
//     Array
//         .from({ length: n }, (_, i) => i + 1)
//         .filter(i => i % 2 !== 0)

