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

  remove(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) this.root = currentNode.left;
          else {
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.left;
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.right;
          }
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) this.root = currentNode.right;
          else {
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.right;
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.right;
          }
        } else {
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }
          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if (parentNode === null) this.root = leftMost;
          else {
            if (currentNode.value < parentNode.value)
              parentNode.left = leftMost;
            else if (currentNode.value > parentNode.value)
              parentNode.right = leftMost;
          }
        }
        return true;
      }
    }
  }
}
const binaryTree = new BinarySearchTree();
export default binaryTree;
