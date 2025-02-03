function solution(sides) {
    const sorted = sides.sort((a, b) => b - a)
    return sorted[1] + sorted[2] > sorted[0] ? 1 : 2;
}