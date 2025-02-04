function solution(numbers, direction) {
    if (direction === "right") {
        let last = numbers.pop(); 
        numbers.unshift(last);     
    } else if (direction === "left") {
        let first = numbers.shift(); 
        numbers.push(first);         
    }
    
    return numbers;
}
