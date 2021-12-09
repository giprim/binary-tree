class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let tree = this.root;

    while (true) {
      if (value < tree.value) {
        if (!tree.left) {
          tree.left = newNode;
          return this;
        }
        tree = tree.left;
      } else {
        if (!tree.right) {
          tree.right = newNode;
          return this;
        }
        tree = tree.right;
      }
      return this;
    }
  }
}
