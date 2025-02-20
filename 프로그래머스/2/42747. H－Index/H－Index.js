function solution(citations) {
    citations.sort((a, b) => b - a);  // 내림차순 정렬
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) {
            return i;  // i번 이상 인용된 논문이 i편 이상일 때, i값이 H-Index
        }
    }
    return citations.length;  // 모든 논문이 해당 조건을 만족하면 논문 수가 H-Index
}