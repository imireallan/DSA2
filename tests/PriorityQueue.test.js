const PriorityQueue = require("../src/PriorityQueue");

describe.only("PriorityQueue", () => {
  describe("enqueue", () => {
    test("It adds values in the priority queue", () => {
      const pq = new PriorityQueue();
      pq.enqueue('common cold', 5)
      pq.enqueue('broken limb', 2)
      pq.enqueue('heart attack', 1)


      expect(pq.values[0].value).toBe('heart attack');
    });
  });
  describe("dequeue", () => {
    test("It removes a value in the pq", () => {
      const pq = new PriorityQueue();
      pq.enqueue('common cold', 5)
      pq.enqueue('broken limb', 2)
      pq.enqueue('heart attack', 1)

      const result = pq.dequeue()
      expect(result.value).toBe('heart attack');
      const result2 = pq.dequeue()
      expect(result2.value).toBe('broken limb');

    });
  });
});
