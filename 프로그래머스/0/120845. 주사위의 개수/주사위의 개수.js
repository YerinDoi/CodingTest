function solution(box, n) {
    // 각 방향별로 들어갈 수 있는 주사위 개수를 구한 후 곱하기
    return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
}
