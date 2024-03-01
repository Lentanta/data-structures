export class Heaps {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp()
    console.log(this.values)
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (!parent) break;
      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    // Swap the last and the first element
    const max = this.values[0];
    const last = this.values.pop();
    this.values[0] = last;

    if (this.values.length > 0) {
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild = undefined;
      let rightChild = undefined;
      let swapIndex = null;

      // null < number is True :)
      if (leftChild < length) {
        leftChild = this.values[leftChildIndex];
        swapIndex = leftChildIndex;
      };

      if (rightChild < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swapIndex && rightChild < length)
          || (swapIndex && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }
}
