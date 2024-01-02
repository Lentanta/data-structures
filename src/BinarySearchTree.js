import { Queue } from "./Queue.js";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) return this;
        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
      }
    }
  }

  insertRecursiveImprove(value, node) {
    if (node === null) {
      return new TreeNode(value)
    };

    if (value > node.value) {
      node.right = node.right === null
        ? new TreeNode(value)
        : this.insertRecursiveImprove(value, node.right)
    }

    if (value < node.value) {
      node.left = node.left === null
        ? new TreeNode(value)
        : this.insertRecursiveImprove(value, node.left)
    }

    return node;
  }

  insertRecursive(value) {
    this.root = this.insertRecursiveImprove(value, this.root)
  };

  findImprove(value, node) {
    if (node === null)
      return false;
    if (value === node.value)
      return true;
    if (value > node.value)
      return this.findImprove(value, node.right);
    if (value < node.value)
      return this.findImprove(value, node.left);
  };

  find(value) {
    return this.findImprove(value, this.root)
  };


  BFS() {
    let node = this.root;
    let data = [];

    let queue = new Queue();
    queue.enqueue(node);

    while (queue.size) {
      node = queue.dequeue();
      data.push(node);

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];

    const traverse = (node) => {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    };

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }
}
