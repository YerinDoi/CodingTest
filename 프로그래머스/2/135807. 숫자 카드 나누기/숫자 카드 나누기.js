// 최대공약수 구하기 (유클리드 호제법)
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// 배열의 모든 원소의 최대공약수 구하기
const getGCDofArray = (arr) => arr.reduce((acc, val) => gcd(acc, val));

// 숫자가 배열의 모든 원소를 나누지 않는지 확인
const isNotDivisible = (num, arr) => arr.every((val) => val % num !== 0);

function solution(arrayA, arrayB) {
    // Step 1. 배열의 최대공약수 구하기
    const gcdA = getGCDofArray(arrayA);
    const gcdB = getGCDofArray(arrayB);

    // Step 2. 나누지 않는 조건 확인
    const candidateA = isNotDivisible(gcdA, arrayB) ? gcdA : 0;
    const candidateB = isNotDivisible(gcdB, arrayA) ? gcdB : 0;

    // Step 3. 둘 중 더 큰 값 반환 (둘 다 0이면 0 반환)
    return Math.max(candidateA, candidateB);
}