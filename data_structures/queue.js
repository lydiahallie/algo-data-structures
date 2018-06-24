class Queue {
  constructor() {
    // Empty queue to start with.
    this.queue = [];
  }

  enqueue(value) {
    // Push value to queue.
    this.queue.push(value);
  }

  dequeue() {
    // Remove value from queue and return this value.
    return this.queue.shift();
  }

  peek() {
    // Return first item in queue.
    return this.queue[0];
  }

  length() {
    // Get length of queue.
    return this.queue.length;
  }

  print() {
    console.log(this.queue.join(' '));
  }
}