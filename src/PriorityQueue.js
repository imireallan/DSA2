class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  _bubbleUp() {
    let index = this.values.length - 1;
    let node = this.values[index];

    while (index > 0) {
      let parentNodeIndex = Math.floor((index - 1) / 2);
      let parentNode = this.values[parentNodeIndex];

      if (node.priority >= parentNode.priority) break;

      this.values[parentNodeIndex] = node;
      this.values[index] = parentNode;
      index = parentNode;
    }
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this._bubbleUp();
  }

  _sinkDown() {
    let index = 0;
    let node = this.values[index];
    let length = this.values.length;

    while (true) {
      let leftNodeIndex = 2 * index + 1;
      let rightNodeIndex = 2 * index + 2;
      let leftNode, rightNode;
      let swap = null;

      if (leftNodeIndex < length) {
        leftNode = this.values[leftNodeIndex];

        if (leftNode.priority < node.priority) {
          swap = leftNodeIndex;
        }
      }
      if (rightNode < length) {
        rightNode = this.values[rightNodeIndex];

        if (
          (swap === null && rightNode.priority < node.priority) ||
          (swap !== null && rightNode.priority < leftNode.priority)
        ) {
          swap = rightNode;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = node;
      index = swap;
    }
  }

  dequeue() {
    const removedRoot = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this._sinkDown();
    }
    return removedRoot;
  }
}

module.exports = PriorityQueue;
