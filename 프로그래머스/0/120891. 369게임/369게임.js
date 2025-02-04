function solution(order) {
    let count = 0;  
    
    for (let digit of order.toString()) {
        if (digit === '3' || digit === '6' || digit === '9') {
            count++;
        }
    }
    return count;
}
