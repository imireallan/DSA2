const Graph = require("../src/Graph");

describe("Graph", () => {
  describe("addVertex", () => {
    test("it can add a vertex/node", () => {
      const graph = new Graph();

      graph.addVertex("name");

      expect(graph.adjacencyList).toEqual({ name: [] });
    });
  });
  describe("addEdge", () => {
    test("it can add edges to vertices", () => {
      const graph = new Graph();

      graph.addVertex("nairobi");
      graph.addVertex("mombasa");
      graph.addVertex("kisumu");

      graph.addEdge("nairobi", "mombasa");
      graph.addEdge("kisumu", "mombasa");

      expect(graph.adjacencyList["nairobi"]).toContain("mombasa");
      expect(graph.adjacencyList["mombasa"]).toContain("nairobi");
    });
  });
  describe("removeEdge", () => {
    test("it can remove edges from vertices", () => {
      const graph = new Graph();

      graph.addVertex("nairobi");
      graph.addVertex("mombasa");
      graph.addVertex("kisumu");

      graph.addEdge("nairobi", "mombasa");
      graph.addEdge("kisumu", "mombasa");

      graph.removeEdge("nairobi", "mombasa");

      expect(graph.adjacencyList["nairobi"]).toEqual([]);
      expect(graph.adjacencyList["mombasa"]).toEqual(["kisumu"]);
    });
  });

  describe("removeVertex", () => {
    test("it can remove vertex from the graph", () => {
      const graph = new Graph();

      graph.addVertex("nairobi");
      graph.addVertex("mombasa");
      graph.addVertex("kisumu");

      graph.addEdge("nairobi", "mombasa");
      graph.addEdge("kisumu", "mombasa");

      graph.removeVertex("nairobi");

      expect(graph.adjacencyList["nairobi"]).toBeUndefined();
      expect(graph.adjacencyList["mombasa"]).toEqual(["kisumu"]);
    });
  });

  describe("dfsRecursive", () => {
    test("it can traverse the graph using DFS recursively", () => {
      const graph = new Graph();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");
      graph.addEdge("C", "E");
      graph.addEdge("D", "E");
      graph.addEdge("D", "F");
      graph.addEdge("E", "F");

      let result = graph.dfsRecursive("A")
      expect(result).toEqual(["A", "B", "D", "E", "C", "F"])


    });
  });
  describe("dfsIterative", () => {
    test("it can traverse the graph using DFS iteratively", () => {
      const graph = new Graph();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");
      graph.addEdge("C", "E");
      graph.addEdge("D", "E");
      graph.addEdge("D", "F");
      graph.addEdge("E", "F");

      let result = graph.dfsIterative("A")
      expect(result).toEqual([ 'A', 'C', 'E', 'F', 'D', 'B' ])


    });
  });
  describe("bfs", () => {
    test("it can traverse the graph using BFS", () => {
      const graph = new Graph();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");
      graph.addEdge("C", "E");
      graph.addEdge("D", "E");
      graph.addEdge("D", "F");
      graph.addEdge("E", "F");

      let result = graph.bfs("A")

      expect(result).toEqual([ 'A', 'B', 'C', 'D', 'E', 'F' ])


    });
  });
});
