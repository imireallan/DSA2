class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vert) => vert !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vert) => vert !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let edge of this.adjacencyList[vertex]) {
        this.removeEdge(edge, vertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  dfsRecursive(vertex) {
    let visitedVerticesList = [];
    let visitedVerticesMap = new Map();

    const dfsR = (v) => {
      if (!v) return;
      visitedVerticesMap.set(v, true);
      visitedVerticesList.push(v);

      for (let vert of this.adjacencyList[v]) {
        if (!visitedVerticesMap.has(vert)) {
          dfsR(vert);
        }
      }
    };
    dfsR(vertex);
    return visitedVerticesList;
  }

  dfsIterative(vertex) {
    let result = [];
    let stack = [vertex];
    let map = new Map();

    map.set(vertex, true);

    let vert;
    while (stack.length) {
      vert = stack.pop();
      result.push(vert);

      for (let v of this.adjacencyList[vert]) {
        if (!map.has(v)) {
          map.set(v, true);
          stack.push(v);
        }
      }
    }

    return result;
  }
  bfs(vertex) {
    let result = [];
    let queue = [vertex];
    let map = new Map();

    map.set(vertex, true);

    let vert;
    while (queue.length) {
      vert = queue.shift();
      result.push(vert);

      for (let v of this.adjacencyList[vert]) {
        if (!map.has(v)) {
          map.set(v, true);
          queue.push(v);
        }
      }
    }

    return result;
  }
}

module.exports = Graph;
