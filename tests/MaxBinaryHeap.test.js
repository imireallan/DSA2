const MaxBinaryHeap = require("../src/MaxBinaryHeap");

describe.only("MaxBinaryHeap", () => {
  describe("insert", () => {
    test("It adds values in the heap", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(41);
      heap.insert(39);
      heap.insert(33);
      heap.insert(18);
      heap.insert(27);
      heap.insert(12);
      heap.insert(55);

      expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
    });
  });
  describe("remove", () => {
    test("It removes a value in the heap", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(41);
      heap.insert(39);
      heap.insert(33);
      heap.insert(18);
      heap.insert(27);
      heap.insert(12);
      heap.insert(55);

      const result = heap.extractMax();

      expect(result).toEqual(55);
      expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);
    });
  });
});
