class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val)
    if(!this.first) {
        this.first = this.last = node
    } else {
        this.last.next = node
        this.last = node
    }
    return ++this.size
  }
  dequeue() {
    if(!this.first) return
    if(this.first === this.last) {
        this.last = null
    }
    let removedNode = this.first
    this.first = removedNode.next
    this.size--
    return removedNode.value
  }
}

module.exports = Queue
