const DoublyLinkedList = require("../src/DoublyLinkedList");

describe("DoublyLinkedList", () => {
  describe("push", () => {
    test("it adds a node at the end of a list", () => {
      const ll = new DoublyLinkedList();

      ll.push(20);
      ll.push(30);
      ll.push(40);

      expect(ll.length).toBe(3);
      expect(ll.head.value).toBe(20);
      expect(ll.tail.value).toBe(40);
    });
  });
  describe("pop", () => {
    test("it removes a node at the end of a list", () => {
      const ll = new DoublyLinkedList();

      ll.push(20);
      ll.push(30);
      ll.push(40);
      const removedNode = ll.pop();

      expect(ll.length).toBe(2);
      expect(removedNode.value).toBe(40);
    });
  });
  describe("unshift", () => {
    test("it adds a node at the start of a list", () => {
      const ll = new DoublyLinkedList();

      ll.unshift(20);
      ll.unshift(30);
      ll.unshift(40);

      expect(ll.length).toBe(3);
      expect(ll.head.value).toBe(40);
      expect(ll.tail.value).toBe(20);
    });
  });
  describe("shift", () => {
    test("it removes a node at the start of a list", () => {
      const ll = new DoublyLinkedList();

      ll.push(20);
      ll.push(30);
      const removedNode = ll.shift();

      expect(ll.length).toBe(1);
      expect(removedNode.value).toBe(20);
    });
  });
  describe("get", () => {
    test("it returns a node from a list given an index", () => {
      const ll = new DoublyLinkedList();

      ll.push(20);
      ll.push(30);
      const foundNode = ll.get(1);

      expect(foundNode.value).toBe(30);
    });
  });
  describe("set", () => {
    test("it updates a value of a node from a list given an index", () => {
      const ll = new DoublyLinkedList();

      ll.push(20);
      ll.push(30);
      ll.set(1, 40);

      const foundNode = ll.get(1);

      expect(foundNode.value).toBe(40);
    });
  });
  describe("insert", () => {
    test("it adds a node to a list given at a given position", () => {
      const ll = new DoublyLinkedList();

      ll.push(10);
      ll.push(20);
      ll.push(30);
      ll.insert(1, 30);

      const foundNode = ll.get(1);
      expect(foundNode.value).toBe(30);
      expect(ll.length).toBe(4);

    });
  });
  describe("remove", () => {
    test("it removes a node to a list given at a given position", () => {
      const ll = new DoublyLinkedList();

      ll.push(10);
      ll.push(20);
      ll.push(30);
      const val = ll.remove(1);

      expect(val.value).toBe(20);
      expect(ll.length).toBe(2);

    });
  });
});
