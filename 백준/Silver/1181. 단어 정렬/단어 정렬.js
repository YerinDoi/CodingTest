const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 중복 제거를 위해 Set 사용
const uniqueWords = new Set(arr); // 여기서 uniqueWords의 타입은 Set

// 정렬
const sortedWords = [...uniqueWords].sort((a, b) => { // 타입을 배열로 바꿔줘야만 sort()사용 가능
    if (a.length === b.length) {
        return a.localeCompare(b);
    }
    return a.length - b.length;
});

console.log(sortedWords.join('\n'));