function Node(data) {
  this.data = data;
  this.children = [];
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    // Create new node.
    const node = new Node(data);
    // If the toNodeData arg is passed, find that node. Else, return null.
    const parent = toNodeData ? this.findBFS(toNodeData) : null;
    // If the parent isn't null, meaning it's not the root node
    // push the new node as a child to that parent node.
    if (parent) {
      parent.children.push(node);
    } else {
      // If there is no parent, set the node equal to the root.
      if (!this.root) {
        this.root = node;
      } else {
        // You can't have two roots.
        return 'Oops! You can\'t have two roots!'
      }
    }
  }

  remove(data) {
    // If the node's data we want to remove is equal to the root's data
    // remove the node by setting it to null.
    if (this.root.data === data) {
      this.root = null;
    }

    // Define a queue, with the initial value of an array with the root.
    const queue = [this.root];
    while (queue.length) {
      // Get the first node in the queue.
      const node = queue.shift();
      // Get all the children that node has.
      for (let [index, child] of node.children.entries()) {
        // If one of the children's data is equal to the node's data we want to remove:
        if (child.data === data) {
          // Delete that specific child node from the children entries array.
          node.children.splice(index, 1);
        } else {
          queue.push(child);
        }
      }
    }
  }

  contains(data) {
    return !!this.findBFS(data);
  }

  findBFS(data) {
    // Breadth-first search.
    // Define a queue, with the initial value of an array with the root.
    const queue = [this.root];
    while (queue.length) {
      // Get the first node of the array.
      const node = queue.shift();
      // If the node's data is equal to the data we want, return that node.
      if (node.data === data) {
        return node;
      }
      // Push the children of that node to the queue.
      for (const child of node.children) {
        queue.push(child);
      }
    }
    // If the queue has no length, meaning the value hasn't been found, return null.
    return null;
  }

  preOrder(node, fn) {
    if(node) {
      if(fn) {
        fn(node);
      }
      for(const child of node.children) {
        this.preOrder(child, fn);
      }
    }
  }

  postOrder(node, fn) {
    if(node) {
      for(const child of node.children) {
        this.postOrder(child, fn);
      }
      if(fn) {
        fn(node);
      }
    }
  }

  traverseDFS(fn, method) {
    // Depth-first search.
    const current = this.root;
    if (method) {
      // If a method has been passed as an arg, invoke that method on the current node.
      this[`${method}`](current, fn);
    } else {
      this.preOrder(current, fn);
    }
  }

  traverseBFS(fn) {
    // Breadth-first search.
    const queue = [this.root];
    // Define a queue, with the initial value of an array with the root.
    while (queue.length) {
      // The current node is equal to the first element in the array.
      const node = queue.shift();
      // If a function had been passed, invoke that function on the node.
      if (fn) {
        fn(node);
      }
      for (const child of node.children) {
        // Push all children of the node to the array.
        queue.push(child);
      }
    }
  }

  print() {
    if(!this.root) {
      return console.log('There\'s no root');
    }
    // Add a newline to distinguish different levels of tree.
    const newline = new Node('|');
    // After the root, a newline always follows, as it's the top level.
    const queue = [this.root, newline];
    let string = '';
    while (queue.length) {
      // Node is equal to first item in array.
      const node = queue.shift();
      // Set var string equal to the node's data stringified. 
      string += `${node.data.toString()} `;
      if (node === newline && queue.length) {
        queue.push(newline);
      }
      for (const child of node.children) {
        queue.push(child);
      }
    }
    console.log(string.slice(0, -2).trim());
  }

  printByLevel() {
    if(!this.root) {
      return console.log('No root node found');
    }
    // Same as print method, however instead of using the pipe symbol
    // to distuingish different levels, you print the levels on different lines.
    const newline = new Node('\n');
    const queue = [this.root, newline];
    let string = '';
    while(queue.length) {
      const node = queue.shift();
      string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
      if(node === newline && queue.length) {
        queue.push(newline);
      }
      for(const child of node.children) {
        queue.push(child);
      }
    }
    console.log(string.trim());
  }
}