import { LinkedList } from "./LinkedList.js";

const linkedList = new LinkedList();
linkedList.push("A");
linkedList.push("B");
linkedList.push("C");

linkedList.reverse();

console.log("--- Information ---")
linkedList.traverseRecursive();
console.log(linkedList.size)


