function solution(priorities, location) {
    const queue = priorities.map((priority, index) => [priority, index]);
    let printCount = 0;

    while (queue.length > 0) {
        const [currentPriority, currentIndex] = queue.shift();
        
        // 나머지 문서들 중 더 높은 우선순위가 있는지 확인
        if (queue.some(([priority]) => priority > currentPriority)) {
            queue.push([currentPriority, currentIndex]);  // 뒤로 보냄
        } else {
            printCount++;  // 인쇄
            if (currentIndex === location) {
                return printCount;
            }
        }
    }
}