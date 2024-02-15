const Stack = require("../src/Stack");

describe("Stack", () => {
  describe("push", () => {
    test("it adds a node in the stack", () => {
      const stack = new Stack();

      stack.push(100);
      stack.push(200);

      expect(stack.size).toBe(2);
      expect(stack.first.value).toBe(200);
      expect(stack.last.value).toBe(100);
    });
  });
  describe("pop", () => {
    test("it removes a node from the stack", () => {
      const stack = new Stack();

      stack.push(100);
      stack.push(200);

      const removedNode = stack.pop();

      expect(stack.size).toBe(1);
      expect(removedNode).toBe(200);

      const removedNode2 = stack.pop();

      expect(stack.size).toBe(0);
      expect(removedNode2).toBe(100);

      stack.pop();

      expect(stack.size).toBe(0);
      expect(stack.first).toBeNull();
      expect(stack.last).toBeNull();
    });
    test("it returns undefined when the size is 0", () => {
      const stack = new Stack();

      const result = stack.pop();

      expect(result).toBeUndefined();
    });
  });
});
