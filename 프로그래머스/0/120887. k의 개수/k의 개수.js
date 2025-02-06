function solution(i, j, k) {
    const base = Array.from({length: j - i + 1}, (_, idx)=> i + idx).join('').split('');
    return base.filter(a => a === String(k)).length
}