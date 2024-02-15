class Node {
  constructor(val) {
    this.value = val;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      const newTail = oldTail.prev;
      newTail.next = null;
      this.tail = newTail;
      oldTail.pre = null;
    }
    this.length--;
    return oldTail;
  }
  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return;
    const oldHead = this.head;
    const newHead = oldHead.next;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      newHead.prev = null;
      oldHead.next = null;
      this.head = newHead;
    }
    this.length--;
    return oldHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return;

    let count;
    let foundNode;

    if (index <= this.length / 2) {
      count = 0;
      foundNode = this.head;
      while (count !== index) {
        foundNode = foundNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      foundNode = this.tail;
      while (count !== index) {
        foundNode = foundNode.prev;
        count--;
      }
    }
    return foundNode;
  }
  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.value = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const foundNode = this.get(index - 1);

    const newNode = new Node(val);

    const nextNode = foundNode.next;
    foundNode.next = newNode;
    newNode.prev = foundNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode
    removedNode.prev = removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

module.exports = DoublyLinkedList;
