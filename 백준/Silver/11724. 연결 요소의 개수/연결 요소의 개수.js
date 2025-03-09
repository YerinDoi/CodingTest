const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = input.slice(1).map((line) => line.split(' ').map(Number));

const graph = Array.from({ length : n + 1 }, () => []);
edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
})

const visitied = Array(n + 1).fill(false);

function dfs(node) {
    visitied[node] = true;

    for (const next of graph[node]) {
        if (!visitied[next]) dfs(next);
    }
}

let count = 0;

for (let i = 1; i <= n; i++) {
    if (!visitied[i]){
        dfs(i);
        count++;
    }
}

console.log(count);