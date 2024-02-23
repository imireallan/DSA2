const BinarySearchTree = require("../src/BinarySearchTree");

describe.only("BinarySearchTree", () => {
  describe("insert", () => {
    test("it can insert a node to the tree", () => {
      const tree = new BinarySearchTree();

      tree.insert(10);
      tree.insert(15);
      tree.insert(5);
      tree.insert(22);
      tree.insert(6);
      tree.insert(6);

      expect(tree.root.value).toBe(10);
      expect(tree.root.right.value).toBe(15);
      expect(tree.root.left.value).toBe(5);
      expect(tree.root.right.right.value).toBe(22);
      expect(tree.root.left.right.value).toBe(6);
    });
  });
  describe("contains", () => {
    test("it can search if a node exists in the tree", () => {
      const tree = new BinarySearchTree();

      tree.insert(10);
      tree.insert(15);
      tree.insert(5);

      const result1 = tree.contains(10);
      const result2 = tree.contains(55);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
    });
  });
  describe("BFS", () => {
    test("it can visit every node once using breadth first search approach", () => {
      const tree = new BinarySearchTree();

      tree.insert(10);
      tree.insert(15);
      tree.insert(5);
      tree.insert(20);
      tree.insert(12);
      tree.insert(8);
      tree.insert(4);

      const result = tree.BFS();
      expect(result).toEqual([10, 5, 15, 4, 8, 12, 20]);
    });
  });
  describe("DFSPreOrder", () => {
    test("it can visit every node once using dfs preOrder approach", () => {
      const tree = new BinarySearchTree();

      tree.insert(10);
      tree.insert(15);
      tree.insert(5);
      tree.insert(20);
      tree.insert(12);
      tree.insert(8);
      tree.insert(4);

      const result = tree.DFSPreOrder();
      expect(result).toEqual([10, 5, 4, 8, 15, 12, 20]);
    });
  });
  describe("DFSPostOrder", () => {
    test("it can visit every node once using dfs postOrder approach", () => {
      const tree = new BinarySearchTree();

      tree.insert(10);
      tree.insert(15);
      tree.insert(5);
      tree.insert(20);
      tree.insert(12);
      tree.insert(8);
      tree.insert(4);

      const result = tree.DFSPostOrder();
      expect(result).toEqual([4, 8, 5, 12, 20, 15, 10]);
    });
  });
  describe("DFSInOrder", () => {
    test("it can visit every node once using dfs inOrder approach", () => {
      const tree = new BinarySearchTree();

      tree.insert(10);
      tree.insert(15);
      tree.insert(5);
      tree.insert(20);
      tree.insert(12);
      tree.insert(8);
      tree.insert(4);

      const result = tree.DFSInOrder();
      expect(result).toEqual([4, 5, 8, 10, 12, 15, 20]);
    });
  });
});
