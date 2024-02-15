class Node {
  constructor(val) {
    this.value = val;
    this.right = this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return;
      if (val < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
      if (!current.right) {
        current.right = node;
        return this;
      }
      current = current.right;
    }
  }
  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    // while(true) {
    //     if(val === current.value) return true
    //     else if(val < current.value) {
    //         if(!current.left) {
    //             return false
    //         }
    //         current = current.left
    //     } else if(val > current.value) {
    //         if(!current.right) {
    //             return false
    //         }
    //         current = current.right
    //     }
    // }
    let found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }
}

module.exports = BinarySearchTree;
