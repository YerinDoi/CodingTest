function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5; // 캐시가 없으면 모두 miss (5초씩 소요)

    let cache = [];
    let time = 0;

    for (let city of cities) {
        city = city.toLowerCase(); // 대소문자 구분 없음

        let idx = cache.indexOf(city); // 현재 캐시에 있는지 확인
        if (idx !== -1) {
            // Cache Hit (1초)
            cache.splice(idx, 1); // 기존 위치에서 제거 후
            cache.push(city); // 가장 최근 사용으로 갱신
            time += 1;
        } else {
            // Cache Miss (5초)
            if (cache.length >= cacheSize) cache.shift(); // 캐시가 가득 차면 가장 오래된 데이터 제거
            cache.push(city);
            time += 5;
        }
    }

    return time;
}
