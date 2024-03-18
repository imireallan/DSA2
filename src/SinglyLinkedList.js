class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new node with the given value to the end of the linked list.
   * @param {*} val - The value to be added to the linked list.
   * @returns {LinkedList} - The updated linked list.
   */
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * Removes the last element from the linked list.
   * @returns {any} The removed element.
   */
  pop() {
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return current;
  }

  shift() {
    let current = this.head;
    let newHead = current.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      const currentHead = this.head;
      this.head = node;
      this.head.next = currentHead;
    }
    this.length++;
  }

  /**
   * Retrieves the element at the specified position in the linked list.
   * @param {number} position - The position of the element to retrieve.
   * @returns {any} The element at the specified position.
   * If the position is invalid or the linked list is empty, returns undefined.
   */
  get(position) {
    if (!this.head) return;
    if (position < 0 || position >= this.length) return;

    let count = 0;
    let current = this.head;

    while (count !== position) {
      current = current.next;
      count++;
    }
    return current;
  }

  /**
   * Sets the value at the specified position in the data structure.
   * @param {number} position - The position at which to set the value.
   * @param {*} val - The value to set.
   * @returns {boolean} - True if the value was successfully set, false otherwise.
   */
  set(position, val) {
    const current = this.get(position);
    if (current) {
      current.value = val;
      return true;
    }
    return false;
  }

  insert(position, val) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) return !!this.unshift(val);
    if (position === this.length) return !!this.push(val);

    const prevNode = this.get(position - 1);
    const temp = prevNode.next;
    const node = new Node(val);

    node.next = temp;
    prevNode.next = node;
    this.length++;
    return false;
  }
  /**
   * Removes a node at the specified position in the linked list.
   * @param {number} position - The position of the node to be removed.
   * @returns {Node|null} - The removed node, or null if the position is invalid.
   */
  remove(position) {
    if (position < 0 || position >= this.length) return;
    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();

    const prevNode = this.get(position - 1);
    const removed = prevNode.next;

    prevNode.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }
  /**
   * Reverses the linked list.
   */
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
  }
}

module.exports = SinglyLinkedList;
