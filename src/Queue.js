class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;

    return this;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      const lastNode = this.head;
      this.head = null;
      this.tail = null;
      this.size = 0;

      return lastNode.value;
    }

    const node = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return node.value;
  }
}
