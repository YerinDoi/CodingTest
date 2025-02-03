// function solution(price) {
//     var answer = 0;
//     if (price < 100000) {
//         return price;
//     } else if (price >= 100000) {
//         return price * 0.95;
//     } else if (price >= 300000) {
//         return price * 0.90;
//     } else (price >= 500000) {
//         return price * 0.80
//     } 
// }

function solution(price) {
    if (price >= 500000) {
        return Math.trunc(price * 0.8);
    } else if (price >= 300000) {
        return Math.trunc(price * 0.9);
    } else if (price >= 100000) {
        return Math.trunc(price * 0.95);
    } else {
        return price
    }
}
