function Node(data) {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }

  // Add node to list. 
  addNode(data) {
    const node = new Node(data);
    if(!this.head) {
      // If there's no head, that means that the list has no length.
      // The node will then be both the tail and the head.
      this.head = node;
      this.tail = node;
    } else {
      // If the list has a length, the tail's next node is the new node.
      this.tail.next = node;
      this.tail = node;
    }
    // We just added a new node, so the list is one node longer. 
    this.numberOfValues++;
  }

  removeNode(data) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      // If the data is equal, then we found the node we want to have removed.
      if (current.data === data) {
        // If the node we want to remove is the head node:
        if (current === this.head) {
          // The head is now equal to the second node in the list which is the next node.
          this.head = this.head.next;
        }
        if (current === this.tail) {
          // If the node we want to remove is the tail, the tail is equal to its the previous node. 
          this.tail = previous;
        }
        // The previous node is now the current node, and so is its next value.
        previous.next = current.next;
        // We just shortened the list by one.
        this.numberOfValues--;
      } else {
        previous = current;
      }
      // Go to next node until current.data === data returns true.
      current = current.next;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        if (current === this.tail) {
          // The tail's next node is equal to the new node. Add it to the end of list.
          this.tail.next = node;
          this.tail = node;
        } else {
          // The found node's next node is equal to the new node. Add it to the list.
          node.next = current.next;
          current.next = node;
        }
        // Increment the length of the list by one.
        this.numberOfValues++;
      }
      // Go to next node until current.data === toNodeData returns true.
      current = current.next;
    }
  }

  traverse(fn) {
    // Call function passed in arg on every node in list.
    let current = this.head;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.next;
    }
  }
}