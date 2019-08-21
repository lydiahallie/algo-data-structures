// As shown in Data Structures and Algorithms with JavaScript by Michael McMillan
class Stack {
  constructor() {
    // Empty stack to start with.
    this.stack = [];
  }

  push(value) {
    // Push value to stack.
    this.stack.push(value);
  }

  pop() {
    // Remove value from top of the stack and return it.
    return this.stack.pop();
  }

  peek() {
    // Return the last item in stack.
    return this.stack[-1];
  }

  length() {
    // Get length of stack.
    return this.stack.length;
  }

  clear() {
    // Delete all the Item in stack.
    this.stack.slice(0, stack.length);
  }

  print() {
    console.log(this.stack.join(' '));
  }
}