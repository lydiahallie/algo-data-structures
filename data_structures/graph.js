class Graph {
  constructor() {
    // Number of vertices in graph.
    this.vertices = [];
    // Ordered pairs.
    this.edges = [];
    this.numberOfEdges = 0;
  }

  addVertex(vertex) {
    // Add the new vertex to the vertices array.
    this.vertices.push(vertex);
    // In the edges array, set the vertex's value equal to an empty array.
    this.edges[vertex] = [];
  }

  removeVertex(vertex) {
    // Find the index of the vertex you want to remove in the vertices array.
    const index = this.vertices.indexOf(vertex);
    if (index >= 0) {
      // Remove the vertex with the found index from the vertices array.
      this.vertices.splice(index, 1);
    }
    // If the values of the vertex in the edge's array has data.
    while (this.edges[vertex].length) {
      // Find the adjacent vertex by geting the last value of the array.
      const adjacentVertex = this.edges[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
  }

  addEdge(vertex1, vertex2) {
    // Add vertices to edges array and increment number of edges.
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
    this.numberOfEdges++;
  }

  removeEdge(vertex1, vertex2) {
    // Find indeces of verteces.
    const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
    const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
    if (index1 >= 0) {
      // Remove the vertex with the specific index from the edges vertex1 array.
      this.edges[vertex1].splice(index1, 1);
      this.numberOfEdges--;
    }
    if(index2 >= 0) {
      this.edges[vertex2].splice(index2, 1);
    }
  }

  size() {
    return this.vertices.length;
  }

  relations() {
    return this.numberOfEdges;
  }

  traverseDFS(vertex, fn) {
    // Depth-first search.
    if(this.vertices.indexOf(vertex) < 0) {
      return console.log('No vertex, sorry');
    }
    // Pass empty array visited as arg to traverseDFS in order to start looping.
    const visited = [];
    this.traverseDFS(vertex, visited, fn);
  }

  traverseDFS(vertex, visited, fn) {
    visited[vertex] = true;
    // Invoke func passed as arg on found vertex in edges array.
    if (this.edges[vertex] !== undefined) {
      fn(vertex);
    }
    // Loop over values of vertex in edges array.
    for (let i = 0; i < this.edges[vertex].length; i++) {
      if (!visited[this.edges[vertex][i]]) {
        // Invoke traverseDFC function with current vertex index
        // which leads to the function being invoked on every child in array.
        this.traverseDFS(this.edges[vertex][i], visited, fn);
      }
    }
  }

  traverseBFS(vertex, fn) {
    if (this.vertices.indexOf(vertex) < 0) {
      return console.log('No vertex, sorry');
    }
    const queue = [];
    // Push vertex to queue.
    queue.push(vertex);
    const visited = [];
    visited[vertex] = true;

    while (queue.length) {
      // Set vertex equal to first item in queue array
      vertex = queue.shift();
      // Invoke function passed as as on vertex.
      fn(vertex);
      // Loop over vertex's value in edges array.
      for (let i = 0; i < this.edges[vertex].length; i++) {
        if (!visited[this.edges[vertex][i]]) {
          // If this vertex hadn't been visited yet, meaning it's not in the visited array
          // set the data in the visited array to true, as we just visited this vertex.
          visited[this.edges[vertex][i]] = true;
          // Push this value to the queue, by which the while-statement returns true.
          queue.push(this.edges[vertex][i]);
        }
      }
    }
  }

  print() {
    // Map over every item in vertices array.
    console.log(this.vertices.map(vertex => {
      // Return value as 1 => | 2 => | 3 => ..... 
      return (`${vertex} => ${this.edges[vertex].join(', ')}`).trim();
    }, this).join(' | '));
  }
}