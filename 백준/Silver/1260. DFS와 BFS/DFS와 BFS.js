const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 입력값 정리
const [n, m, start] = input[0].split(" ").map(Number); // 사람 수, 관계 수, 시작점
const edges = input.slice(1).map(line => line.split(" ").map(Number));

// 그래프 만들기
const graph = Array.from({ length: n + 1 }, () => []);
edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});

// 친구 번호 오름차순 정렬
graph.forEach(friends => friends.sort((a, b) => a - b));

// DFS (깊이 우선 탐색)
const dfsResult = [];
const visitedDFS = Array(n + 1).fill(false);
const dfs = (v) => {
    if (visitedDFS[v]) return; // 이미 본 친구는 무시
    visitedDFS[v] = true;      // 친구 만남!
    dfsResult.push(v);
    graph[v].forEach(friend => dfs(friend)); // 친구 따라가기
};
dfs(start);

// BFS (너비 우선 탐색)
const bfsResult = [];
const visitedBFS = Array(n + 1).fill(false);
const bfs = (v) => {
    const queue = [v];   // 줄 서서 기다림
    visitedBFS[v] = true;

    while (queue.length > 0) {
        const current = queue.shift(); // 맨 앞 친구 만남
        bfsResult.push(current);

        graph[current].forEach(friend => {
            if (!visitedBFS[friend]) { // 아직 안 만난 친구
                visitedBFS[friend] = true;
                queue.push(friend);    // 줄 서!
            }
        });
    }
};
bfs(start);

// 결과 출력
console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
