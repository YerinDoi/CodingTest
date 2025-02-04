function solution(rsp) {
    return rsp.split('').map(a => a === "2" ? "0" : a === "0" ? "5" : "2").join('')
}