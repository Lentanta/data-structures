class DoublyListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isHeadEmpty() {
    return this.head === null;
  };

  push(value) {
    const node = new DoublyListNode(value);

    if (this.isHeadEmpty()) {
      this.head = node;
      this.tail = node;
    } else {

      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size += 1;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  traverseRecursive(node = this.head) {
    if (node === null) {
      return;
    }
    console.log(node.value);
    return this.traverseRecursive(node.next);
  }

  pop() {
    if (this.isHeadEmpty()) {
      console.log("Linked list is empty");
      return;
    }

    const popedNode = this.tail;
    this.tail = popedNode.prev;
    this.tail.next = null;
    this.size -= 1;

    popedNode.prev = null;
    return popedNode;
  }

  shift() {
    if (this.isHeadEmpty()) {
      console.log("Head is empty");
      return;
    }

    let shiftHead = this.head;
    this.head = currentHead.next;
    this.head.prev = null;
    this.size -= 1;

    return shiftHead;
  }

  unshift(value) {
    const node = new DoublyListNode(value);

    if (this.isHeadEmpty()) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.size += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index > this.size - 1) return;

    let count = 0;
    let current = this.head;
    while (count < index) {
      count++;
      current = current.next;
    }

    return current;
  }

  set(index, value) {
    if (index < 0 || index > this.size - 1) return;
    const currentNode = this.get(index);
    currentNode.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      return this.unshift(value);
    };

    if (index === this.size) {
      return this.push(value);
    };


    const newNode = new DoublyListNode(value);
    const preCurrentNode = this.get(index - 1);
    const currentNode = this.get(index);

    newNode.prev = preCurrentNode;
    preCurrentNode.next = newNode;

    newNode.next = currentNode;
    currentNode.prev = newNode;

    this.size += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.size - 1) return;

    if (index === 0) {
      this.shift();
      return true;
    };

    const preCurrentNode = this.get(index - 1);
    const current = this.get(index)

    preCurrentNode.next = current.next;
    current.next.prev = preCurrentNode;

    this.size -= 1;

    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let index = 0;
    let next = null;
    let prev = null;
    while (index < this.size) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;

      index++;
    }

    return this;
  }
}
