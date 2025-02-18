function solution(priorities, location) {
    const queue = priorities.map((priority, index) => [priority, index]);
    let printCount = 0;
    
    while (queue.length > 0) {
        const [currentPriority, currentIndex] = queue.shift();
        
        if (queue.some(([priority]) => priority > currentPriority)) {
            queue.push([currentPriority, currentIndex]);
        } else {
            printCount++;
            if (currentIndex === location) {
                return printCount;
            }
        } 
    }
}