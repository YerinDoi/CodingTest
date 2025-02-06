const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);

const coins = input.map(Number).sort((a, b) => b - a);
let cnt = 0;
for (const coin of coins) {
  cnt += Math.floor(K / coin);
  K %= coin;
}

console.log(cnt);