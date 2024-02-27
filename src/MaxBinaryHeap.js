class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this._bubbleUp();
  }
  _bubbleUp() {
    let valueIndex = this.values.length - 1;
    let value = this.values[valueIndex];

    while (valueIndex > 0) {
      let parentIndex = Math.floor((valueIndex - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (value <= parentValue) break;

      this.values[parentIndex] = value;
      this.values[valueIndex] = parentValue;

      valueIndex = parentIndex;
    }
  }
  extractMax() {
    const parentNode = this.values[0];
    const removed = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = removed;
      this._sinkDown();
    }
    return parentNode;
  }
  _sinkDown() {
    let parentIndex = 0;
    let parentValue = this.values[parentIndex];
    let length = this.values.length;
    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let leftChildValue, rightChildValue;
      let swap = null;

      if (leftChildIndex < length) {
        leftChildValue = this.values[leftChildIndex];
        if (leftChildValue > parentValue) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChildValue = this.values[rightChildIndex];

        if (
          (swap === null && rightChildValue > parentValue) ||
          (swap !== null && rightChildValue > leftChildValue)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[parentIndex] = this.values[swap];
      this.values[swap] = parentValue
      parentIndex = swap;
    }
  }
}

module.exports = MaxBinaryHeap;
