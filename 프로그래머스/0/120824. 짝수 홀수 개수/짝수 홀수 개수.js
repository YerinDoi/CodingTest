function solution(num_list) {
    const j = []
    const h = []
    num_list.filter(a => a % 2 === 0 ? j.push(a) : h.push(a))
    return [j.length, h.length];
}