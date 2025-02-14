function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);

    let count = n - realLost.length;

    realLost.forEach(l => {
        let index = realReserve.findIndex(r => Math.abs(r - l) === 1);
        if (index !== -1) {
            count++;
            realReserve.splice(index, 1);
        }
    });

    return count;
}
