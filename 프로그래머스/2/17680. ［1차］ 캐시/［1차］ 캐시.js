function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;
    
    const cache = [];
    let time = 0;
    
    for (let city of cities) {
        city = city.toLowerCase();
        
        let idx = cache.indexOf(city);
        if (idx !== -1) {
            cache.splice(idx, 1);
            cache.push(city);
            time += 1;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            cache.push(city);
            time += 5;
        }
    }
    return time;
}
