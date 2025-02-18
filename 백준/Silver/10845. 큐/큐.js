const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
    constructor() {
        this.queue = [];
        this.frontIdx = 0;  // Shift 연산 최적화
    }

    push(x) {
        this.queue.push(x);
    }

    pop() {
        return this.queue.length > this.frontIdx ? this.queue[this.frontIdx++] : -1;
    }

    size() {
        return this.queue.length - this.frontIdx;
    }

    empty() {
        return this.size() === 0 ? 1 : 0;
    }

    front() {
        return this.size() > 0 ? this.queue[this.frontIdx] : -1;
    }

    back() {
        return this.size() > 0 ? this.queue[this.queue.length - 1] : -1;
    }
}

const queue = new Queue();
const result = [];

for (let i = 1; i < input.length; i++) {
    const [cmd, num] = input[i].split(" ");
    if (cmd === "push") queue.push(Number(num));
    else if (cmd === "pop") result.push(queue.pop());
    else if (cmd === "size") result.push(queue.size());
    else if (cmd === "empty") result.push(queue.empty());
    else if (cmd === "front") result.push(queue.front());
    else if (cmd === "back") result.push(queue.back());
}

console.log(result.join("\n"));
