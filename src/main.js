import { Heaps } from "./Heaps.js";

const heap = new Heaps();
console.log(heap.values)

heap.insert(24)
heap.insert(32)
heap.insert(93)
heap.insert(12)
heap.insert(27)


console.log(heap.extractMax())

