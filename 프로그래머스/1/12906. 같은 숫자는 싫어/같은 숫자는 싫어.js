function solution(arr) {
    return arr.filter((val, idx) => idx === 0 || val !== arr[idx - 1]);
}