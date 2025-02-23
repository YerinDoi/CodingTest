const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map(line => line.split("").map(Number));

const dx = [-1, 1, 0, 0]; // 상하좌우 이동 (x축)
const dy = [0, 0, -1, 1]; // 상하좌우 이동 (y축)

function bfs() {
    const queue = [[0, 0]]; // 시작점 (0,0)부터 BFS 시작
    while (queue.length > 0) {
        const [x, y] = queue.shift(); // 현재 위치
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < N && ny < M && maze[nx][ny] === 1) {
                maze[nx][ny] = maze[x][y] + 1; // 거리 갱신
                queue.push([nx, ny]); // 다음 탐색할 위치 큐에 추가
            }
        }
    }
}

bfs();
console.log(maze[N - 1][M - 1]); // 도착점의 최단 거리 출력
