class PriorityQueue {
  constructor() {
    this.heap = [];
  }
    
  swap(a, b) {
      const temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
  }

  push(value) {
    const { heap } = this;
    heap.push(value);
    let index = heap.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && heap[index] < heap[parent]) {
      this.swap(index, parent);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    const { heap } = this;
    if (heap.length <= 1) {
      return heap.pop();
    }

    const output = heap[0];
    heap[0] = heap.pop();
    let index = 0;

    while (index * 2 + 1 < heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;

      if (heap[left] < heap[next]) {
        next = left;
      }

      if (right < heap.length && heap[right] < heap[next]) {
        next = right;
      }

      if (index === next) {
        break;
      }

      this.swap(index, next);
      index = next;
    }

    return output;
  }
}

// 파일 경로 설정 (VSCode & 백준 지원)
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const [N, ...cards] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const queue = new PriorityQueue();
let count = 0;

// 카드 묶음을 우선순위 큐에 삽입
cards.forEach(card => queue.push(card));

// 최소 비용으로 카드 묶음 합치기
while (queue.heap.length > 1) {
  const sum = queue.pop() + queue.pop();
  queue.push(sum);
  count += sum;
}

console.log(count);
