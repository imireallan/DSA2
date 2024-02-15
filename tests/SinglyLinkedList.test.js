const { beforeEach } = require("node:test");
const SinglyLinkedList = require("../src/SinglyLinkedList");

describe("SingleLinkedList", () => {
  describe("push", () => {
    test("it can add a value to the end of a list", () => {
      const ll = new SinglyLinkedList();
      ll.push(10);

      expect(ll.tail.value).toBe(10);
      expect(ll.length).toBe(1);

      ll.push(20);
      expect(ll.head.value).toBe(10);
      expect(ll.tail.value).toBe(20);
      expect(ll.length).toBe(2);
    });
  });
  describe("pop", () => {
    test("it can remove a value at the end of a list", () => {
      const ll = new SinglyLinkedList();
      ll.push(10);
      ll.push(20);
      ll.push(30);

      ll.pop();

      expect(ll.tail.value).toBe(20);
      expect(ll.head.value).toBe(10);
      expect(ll.length).toBe(2);
    });
    test("it can set the head and tail to null if the length is 0", () => {
      const ll = new SinglyLinkedList();
      ll.push(10);

      ll.pop();

      expect(ll.length).toBe(0);
      expect(ll.tail).toBeNull();
      expect(ll.head).toBeNull();
    });
  });
  describe("shift", () => {
    test("it can remove a value at the start of a list", () => {
      const ll = new SinglyLinkedList();
      ll.push(10);
      ll.push(20);
      ll.push(30);

      ll.shift();

      expect(ll.length).toBe(2);
      expect(ll.head.value).toBe(20);
    });
    test("it can set the head and tail to null if the length is 0", () => {
      const ll = new SinglyLinkedList();
      ll.push(10);

      ll.shift();

      expect(ll.length).toBe(0);
      expect(ll.tail).toBeNull();
      expect(ll.head).toBeNull();
    });
  });
  describe("unshift", () => {
    test("it can add a value at the start of a list", () => {
      const ll = new SinglyLinkedList();
      ll.unshift(10);
      ll.unshift(20);
      ll.unshift(30);

      expect(ll.length).toBe(3);
      expect(ll.head.value).toBe(30);
    });
  });
  describe("get", () => {
    test("it returns undefined if the list is empty", () => {
      const ll = new SinglyLinkedList();

      const val1 = ll.get(0);

      expect(val1).toBeUndefined();
    });
    test("it returns undefined if the position is less than 0", () => {
      const ll = new SinglyLinkedList();

      ll.push(90);

      const val1 = ll.get(-1);

      expect(val1).toBeUndefined();
    });
    test("it returns undefined if the position is greater than or equal to length of the list", () => {
      const ll = new SinglyLinkedList();

      ll.push(90);
      ll.push(100);

      const val1 = ll.get(2);

      expect(val1).toBeUndefined();
    });
    test("it can return a value given the position in the list", () => {
      const ll = new SinglyLinkedList();
      ll.push(10);
      ll.push(20);
      ll.push(50);

      const val1 = ll.get(0);
      const val2 = ll.get(2);
      const val3 = ll.get(1);

      expect(val1.value).toBe(10);
      expect(val2.value).toBe(50);
      expect(val3.value).toBe(20);
    });
  });
  describe("set", () => {
    test("it changes the value of a node based on it's position", () => {
      const ll = new SinglyLinkedList();

      ll.push(90);
      ll.push(100);

      const result = ll.set(1, 200);
      const val = ll.get(1);

      expect(val.value).toBe(200);
      expect(result).toBeTruthy();

      const result2 = ll.set(4, 200);

      expect(result2).toBeFalsy();
    });
  });
  describe("insert", () => {
    test("it adds a node at a given position", () => {
      const ll = new SinglyLinkedList();

      ll.push(90);
      ll.push(100);
      ll.push(300);
      ll.push(400);

      ll.insert(2, 200);
      const val = ll.get(2);

      expect(val.value).toBe(200);

      ll.insert(0, 80);
      expect(ll.head.value).toBe(80);

      ll.insert(ll.length, 500);
      expect(ll.tail.value).toBe(500);
    });
  });
  describe("remove", () => {
    test("it removes a node at a given position", () => {
      const ll = new SinglyLinkedList();

      ll.push(90);
      ll.push(100);
      ll.push(300);
      ll.push(400);

      const val3 = ll.remove(2);
      expect(val3.value).toBe(300);

      const val = ll.remove(0);
      expect(val.value).toBe(90);

      const val2 = ll.remove(ll.length - 1);
      expect(val2.value).toBe(400);
    });
  });
  describe("reverse", () => {
    test("it reverses a linkedList in place", () => {
      const ll = new SinglyLinkedList();

      ll.push(90);
      ll.push(100);
      ll.push(200);
      ll.push(300);

      ll.reverse();
      expect(ll.head.value).toBe(300);
      expect(ll.tail.value).toBe(90);

      const val = ll.get(1);
      const val2 = ll.get(2);
      expect(val.value).toBe(200);
      expect(val2.value).toBe(100);
    });
  });
});
