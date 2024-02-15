class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size
  }
  pop() {
    if (!this.first) return;
    if(this.first === this.last) {
        this.last = null
    }
    let removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode.value;
  }
}

module.exports = Stack;
