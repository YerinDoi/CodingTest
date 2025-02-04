function solution(n) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // 최대공약수(GCD)
    const lcm = (n * 6) / gcd(n, 6); // 최소공배수(LCM)
    return lcm / 6; 
}


// 6의 배수 중에서 n으로 나누어떨어지는 최소값을 찾아야 함 → "최소공배수(LCM)" 문제!